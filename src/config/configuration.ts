export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: process.env.DATABASE_TYPE || 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database_name: process.env.DATABASE_NAME || 'test',
      synchronize: process.env.SYNCHRONIZE || false
    }
});
  