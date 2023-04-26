import Psychologists from './psychologists/Psychologists';
import Patients from './patients/Patients';
import Attendances from './attendances/Attendances';

Patients.hasMany(Attendances, {
    foreignKey: {
        name: 'patient_id'
    }
});

Attendances.belongsTo(Patients, {
    foreignKey: {
        name: 'patient_id'
    }
});

Psychologists.hasMany(Attendances, {
    foreignKey: {
        name: 'psychologist_id'
    }
});

Attendances.belongsTo(Psychologists, {
    foreignKey: {
        name: 'psychologist_id'
    }
});

export { Psychologists, Patients, Attendances };