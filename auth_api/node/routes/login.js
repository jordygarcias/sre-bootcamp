import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  try {
    const data = await loginFunction(username, password);
    let response = {
      data,
    };
    res.send(response);
    next();
  } catch(err) {
    res.status(403).send({ error: err.message });
  }
}
