module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // host: env('PGHOST', '127.0.0.1'),
      // port: env.int('PGPORT', 5432),
      // database: env('PGDATABASE', 'strapi'),
      // user: env('PGUSER', 'strapi'),
      // password: env('PGPASSWORD', 'password'),
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL_SELF', false),
    },
  },
});
