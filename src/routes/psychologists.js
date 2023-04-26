import express from 'express';
import psychologistsController from '../controllers/psychologists/psychologistsController.js';

const routes = express.Router();

routes.get('/', psychologistsController.findAllPsychologists);
routes.post('/', psychologistsController.addPsychologist);
routes.get('/:id', psychologistsController.findPsychologist);
routes.put('/:id', psychologistsController.updatePsychologist);
routes.delete('/:id', psychologistsController.deletePsychologist);

export default routes;