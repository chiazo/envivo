require('dotenv').config();

const { Pool } = require('pg');

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const pool = new Pool(config);

const getUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
      console.log(result);
      if (error) reject(error);
      resolve(result.rows);
    });
  });
};

const createUser = (body) => {
  return new Promise((resolve, reject) => {
    const { name, username, email } = body;
    pool.query(
      'INSERT INTO users (name, username, email) VALUES ($1, $2, $3) RETURNING *',
      [name, username, email],
      (error, result) => {
        if (error) reject(error);
        resolve(`A new user was added: ${result.rows[0]}`);
      }
    );
  });
};

const deleteUser = () => {
  return new Promise((resolve, reject) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
      if (error) reject(error);
      resolve(`User with ID: ${id} was deleted.`);
    });
  });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
};
