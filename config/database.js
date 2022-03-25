module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_DIALECT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dxwood_cms'),
      user: env('DATABASE_USERNAME', 'dev'),
      password: env('DATABASE_PASSWORD', 'ansuzdev'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
