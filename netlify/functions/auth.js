// Minimal OAuth entry point for Decap CMS's GitHub backend, since Netlify
// retired its own api.netlify.com/auth proxy (used to be free with any
// Netlify site, no longer available). This starts the GitHub OAuth
// handshake; netlify/functions/callback.js finishes it.
exports.handler = async (event) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const siteUrl = process.env.URL || `https://${event.headers.host}`;
  const redirectUri = `${siteUrl}/.netlify/functions/callback`;

  if (!clientId) {
    return { statusCode: 500, body: "Missing OAUTH_GITHUB_CLIENT_ID env var" };
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user",
  });

  return {
    statusCode: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
    },
  };
};
