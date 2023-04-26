import { Sequelize } from 'sequelize';
import db from '../../database/database.js';

export default db.define('psychologist', {
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
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    presentation: {
        type: Sequelize.STRING,
        allowNull: false
    }
});