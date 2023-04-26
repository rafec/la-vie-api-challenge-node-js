import express from 'express';
import attendancesController from '../controllers/attendances/attendancesController.js';

const routes = express.Router();

routes.get('/', attendancesController.findAllAttendances);
routes.post('/', attendancesController.addAttendance);
routes.get('/:id', attendancesController.findAttendance);
routes.put('/:id', attendancesController.updateAttendance);
routes.delete('/:id', attendancesController.deleteAttendance);

export default routes;