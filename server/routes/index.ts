import express from 'express';
import getEventsRoutes from './api/events';

export default function getRoutes() {
  const router = express.Router();

  router.use('/events', getEventsRoutes());

  return router;
}
