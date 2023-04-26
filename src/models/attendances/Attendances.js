import { Sequelize } from 'sequelize';
import db from '../../database/database.js';
import Patient from '../../models/patients/Patients.js';
import Psychologist from '../../models/psychologists/Psychologists.js';

export default db.define('attendance', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    attendance_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    observation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    patient_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Patient,
            key: id
        },
        allowNull: false
    },
    psychologist_id: {
        model: Psychologist,
        key: id
    },
    allowNull: false
});