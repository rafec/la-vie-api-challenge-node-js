import { Psychologist as PsychologistRepository } from '../../models/index.js';
import bcrypt from 'bcryptjs';

async function findAllPsychologists(request, response) {
    try {
        const psychologists = await PsychologistRepository.findAll();
        response.status(200).json({ message: 'Succesfull operation', data: psychologists });
    } catch (error) {
        console.log('Error retrieving psychologists records: ', error);
        response.status(404).json({ message: 'Operation failed', data: [] });
    };
};

async function findPsychologist(request, response) {
    const psychologistId = request.params.id;
    try {
        const psychologist = await PsychologistRepository.findByPk(psychologistId);
        response.status(200).json({ message: 'Succesfull operation', data: psychologist });
    } catch (error) {
        console.log(`Error retrieving psychologist records with id: ${psychologistId}`, error);
        response.status(404).json({ message: 'Operation failed', data: 'id not found' });
    };
};

async function addPsychologist(request, response) {
    try {
        const createdPsychologist = await PsychologistRepository.create({
            name: request.body.name,
            email: request.body.email,
            password: bcrypt.hashSync(request.body.password, 10),
            presentation: request.body.presentation
        });

        response.status(201).json({ message: 'Succesfull operation', data: createdPsychologist });
    } catch (error) {
        console.log('Error adding psychologist: ', error);
        response.status(400).json({ message: 'Operation failed', data: 'Requisition error' });
    };
};