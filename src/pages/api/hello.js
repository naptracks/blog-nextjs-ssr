// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import jwt from "jsonwebtoken";
import config from "config";

export default function handler(req, res, next) {

  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded)=> {
      if (error) {
        return res.status(401).json({ msg: 'token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });

  } catch(err) {
    console.log('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
}