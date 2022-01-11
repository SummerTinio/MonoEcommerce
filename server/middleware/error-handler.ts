import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import logger from 'loglevel';

const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    next(error);
  } else {
    logger.error(error);
    res.status(500);
    res.json({
      message: error.message,
    });
  }
};

export default errorHandler;
