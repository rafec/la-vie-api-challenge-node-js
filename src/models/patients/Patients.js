import { Sequelize } from 'sequelize';
import db from '../../database/database.js';

export default db.define('patient', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: Sequelize.DATE,
        allowNull: false
    }
});