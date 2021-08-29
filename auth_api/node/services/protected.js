import { isAValidToken } from './jwt';

export const protectFunction = (authorization) => {
  const [, token] = authorization.split('Bearer ');

  if (!token || !isAValidToken(token)) {
    throw new Error('You are not allowed to be here!');
  }

  return 'You are under protected data';
}
