import express, { Express } from 'express';
import cors from 'cors';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { COOKIE_KEYS, CLIENT_URL } from '../config/keys';

const addMiddleWare = (app: Express) => {
  app.set('trust proxy', 1);
  app.use(express.json());
  app.use(cookieParser()); // parse cookies

  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      secret: COOKIE_KEYS,
      name: 'vitaa-session',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: true,
        httpOnly: true,
        secure: false,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
};

export default addMiddleWare;
