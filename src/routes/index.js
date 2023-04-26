import express from 'express';
import healthRoutes from './health.js';
import patientsRoutes from './patients.js';
import psychologistsRoutes from './psychologists.js';
import attendancesRoutes from './attendances.js';

const routes = express.Router();

routes.use('/health', healthRoutes);
routes.use('/patients', patientsRoutes);
routes.use('/psychologists', psychologistsRoutes);
routes.use('/attendances', attendancesRoutes);

export default routes;