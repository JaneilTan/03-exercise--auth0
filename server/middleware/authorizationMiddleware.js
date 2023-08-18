const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://housetricks.com",
  issuerBaseURL: `https://dev-8r4cuew5h4u0t6ck.us.auth0.com/`,
});

const checkScopes = requiredScopes("create:properties");

module.exports = {
  checkJwt,
  checkScopes,
};
