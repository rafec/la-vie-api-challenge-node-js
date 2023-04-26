import express from 'express';
import healthRoutes from './health.js';

const routes = express.Router();

routes.use('/health', healthRoutes);

export default routes;