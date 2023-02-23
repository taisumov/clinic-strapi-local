module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env('PUBLIC_URL', 'http://185.26.120.246:1337')
});
