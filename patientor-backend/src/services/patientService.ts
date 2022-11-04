import patients from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { NewPatientEntry, NonSensitivePatient, Patient } from '../types';

const getPatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

const getPatiendById = (id: string): NonSensitivePatient | undefined => {
    const patient = patients.find(p => p.id === id);
    return patient;
};

const addPatient = (entry: NewPatientEntry): Patient => {

    const newPatientEntry = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
        id: uuid(),
        ...entry
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    addPatient,
    getPatiendById
};