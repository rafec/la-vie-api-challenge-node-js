import { Psychologist as PsychologistRepository } from '../../models/index.js';

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