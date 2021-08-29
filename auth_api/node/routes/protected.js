import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization;
  try {
    const data = protectFunction(authorization);
    const response = {
      data
    };
    res.send(response);
    next();
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
}
