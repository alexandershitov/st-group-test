const middleware = (req, res, next) =>
  req.originalUrl === "/favicon.ico" ? res.sendStatus(204) : next();

export const IgnoreFavicon = { middleware };
