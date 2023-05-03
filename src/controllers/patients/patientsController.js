import { Patient as PatientRepository } from '../../models/index.js';
import bcrypt from 'bcryptjs';

async function findAllPatients(request, response) {
    try {
        const patients = await PatientRepository.findAll();
        response.status(200).json({ message: 'Succesfull operation.', data: patients });
    } catch (error) {
        console.log('Error retrieving patients records: ', error);
        response.status(500).json({ message: 'Operation failed.', data: [] });
    };
};

async function findPatient(request, response) {
    const patientId = request.params.id;
    try {
        const patient = await PatientRepository.findByPk(patientId);
        response.status(200).json({ message: 'Succesfull operation', data: patient });
    } catch (error) {
        console.log(`Error retrieving patient records with id: ${patientId}`, error);
        response.status(404).json({ message: 'Operation failed.', data: 'Id not found.' })
    };
};

async function addPatient(request, response) {
    try {
        const createdPatient = await PatientRepository.create({
            name: request.body.name,
            email: request.body.email,
            age: request.body.age
        });

        response.status(201).json({ message: 'Succesfull operation', data: createdPatient });
    } catch (error) {
        console.log('Error adding patient', error);
        response.status(400).json({ message: 'Operation failed', data: 'Requisition error' });
    };
};

async function updatePatient(request, response) {
    const patientId = request.params.id;
    try {
        await PatientRepository.update({
            name: request.body.name,
            email: request.body.email,
            age: request.body.age
        },
            {
                where: {
                    id: patientId
                }
            }
        );

        const updatedPatient = await PatientRepository.findByPk(patientId);
        response.status(200).json({ message: 'Succesfull operation', data: updatedPatient });
    } catch (error) {
        console.log(`Error updating patient with id: ${patientId}`, error);
        response.status(400).json({ message: 'Operation failed', data: {} });
    };
};