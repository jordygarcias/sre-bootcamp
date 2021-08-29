import jws from 'jws';

const TOKEN_SECRET='my2w7wjd7yXF64FIADfJxNs1oupTGAuW';

export const generateToken = (role) => {
  const token = jws.sign({
    header: { alg: 'HS256', typ: 'JWT', },
    payload: { role },
    secret: TOKEN_SECRET,
  });

  return token;
};

export const isAValidToken = (token) => {
  const isValid = jws.verify(
    token,
    'HS256',
    TOKEN_SECRET
  );
  return isValid;
}
