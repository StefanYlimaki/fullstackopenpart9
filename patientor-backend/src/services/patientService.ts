import patients from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { NewEntry, NewPatientEntry, Patient } from '../types';

const getPatients = (): Patient[] => {
    return patients;
};

const getPatiendById = (id: string): Patient | undefined => {
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

const addPatientEntry = (id: string, entry: NewEntry | undefined ): Patient | undefined => {

    if(entry === undefined) {
        return;
    }

    const entryToBeAdded = {
        id: uuid(),
        ...entry
    };
    
    patients.map(p => p.id === id ? p.entries.push(entryToBeAdded) : p);
    const patient = patients.find(p => p.id === id);
    return patient;
};

export default {
    getPatients,
    addPatient,
    getPatiendById,
    addPatientEntry
};