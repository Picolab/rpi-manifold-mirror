const config = {
  dev: {
    host: 'http://localhost',
    port: 3000
  },
  prod: {
    host: 'https://manifold.picolabs.io',
    port: 443
  }
};

var env;
if (process.env.npm_lifecycle_event === 'dev') {
  env = 'dev'
}
else {
  env = 'prod'
}
module.exports = config[env];
