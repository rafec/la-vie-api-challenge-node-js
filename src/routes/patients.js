import express from 'express';
import patientsController from '../controllers/patients/patientsController.js';

const routes = express.Router();

routes.get('/', patientsController.findAllPatients);
routes.post('/', patientsController.addPatient);
routes.get('/:id', patientsController.findPatient);
routes.put('/:id', patientsController.updatePatient);
routes.delete('/:id', patientsController.deletePatient);

export default routes;