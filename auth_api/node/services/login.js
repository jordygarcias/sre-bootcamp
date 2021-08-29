import mysql from 'mysql2';
import { generateToken } from './jwt';

const pool = mysql.createPool({
  host: 'bootcamp-tht.sre.wize.mx',
  user: 'secret',
  password: 'noPow3r',
  database: 'bootcamp_tht',
});

export const loginFunction = async (username, password) => {
  const [user] = await pool.promise().query(
      'SELECT * FROM users WHERE username=? AND password=SHA2(CONCAT(?, salt), 512)',
      [username, password]
    )
    .then(([rows]) => rows);

  if (!user) {
    throw new Error("User not found");
  }

  return generateToken(user.role);
}
