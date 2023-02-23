module.exports = ({ env }) => ({
  host: env('HOST', '185.26.120.246'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
