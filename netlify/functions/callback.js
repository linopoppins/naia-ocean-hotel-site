// Second half of the GitHub OAuth handshake for Decap CMS. GitHub redirects
// here with a ?code=..., we exchange it for an access token, then hand that
// token back to the Decap CMS popup via postMessage — this exact message
// format/sequence is what Decap's GitHub backend expects.
exports.handler = async (event) => {
  const code = event.queryStringParameters && event.queryStringParameters.code;
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!code) {
    return { statusCode: 400, body: "Missing code" };
  }
  if (!clientId || !clientSecret) {
    return { statusCode: 500, body: "Missing OAuth env vars" };
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const tokenData = await tokenRes.json();

  if (tokenData.error) {
    return {
      statusCode: 401,
      headers: { "Content-Type": "text/html" },
      body: `<p>OAuth error: ${tokenData.error_description || tokenData.error}</p>`,
    };
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" });

  const html = `<!DOCTYPE html>
<html><body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:${payload}',
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html,
  };
};
