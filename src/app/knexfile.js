import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

// Test the connection
db.raw('SELECT 1')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Failed to connect to the database', error);
  })
  .finally(() => {
    db.destroy(); // Close the connection pool
  });
  
export default db;