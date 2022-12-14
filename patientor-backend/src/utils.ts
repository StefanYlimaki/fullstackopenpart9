import { NewPatientEntry, Gender, NewEntry } from "./types";
//type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown, entries: unknown };
// name, dateOfBirth, ssn, gender, occupation

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object: any): NewPatientEntry => {
    const newPatientEntry: NewPatientEntry = {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseSSN(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        entries: object.entries
    };
    return newPatientEntry;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewEntry = (object: any): NewEntry => {
    const newEntry = {
        date: parseDate(object.date),
        description: parseString(object.description),
        specialist: parseString(object.specialist),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        type: (object.type),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        diagnosisCodes: (object.diagnosisCodes),
    };

    if(object.type === 'HealthCheck'){
        if(!object.healthCheckRating){
            throw new Error('Missing healthCheckRating');
        }
        const healtCheckEntry : NewEntry = {
            ...newEntry,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            healthCheckRating: object.healthCheckRating
        };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return healtCheckEntry;
    }

    if(object.type === 'OccupationalHealthcare'){
        if(!object.employerName || !object.sickLeave){
            throw new Error('Missing employerName or sickLeave');
        }
        const occupationalEntry : NewEntry = {
            ...newEntry,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            employerName: object.employerName,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            sickLeave: object.sickLeave
        };
        return occupationalEntry;
    }

    if(object.type === 'Hospital'){
        if(!object.discharge){
            throw new Error('Missing discharge');
        }
        const hospitalEntry : NewEntry  = {
            ...newEntry,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            discharge: object.discharge
        };
        return hospitalEntry;
    }
    throw new Error('Incorrect or missing type: ' + object.type);
};

export default {
    toNewPatientEntry,
    toNewEntry
};


const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseString = (parameter: unknown): string => {
    if (!parameter || !isString(parameter)) {
        throw new Error('Incorrect or missing parameter: ' + parameter);
    }
    return parameter;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseSSN = (ssn: unknown): string => {
    if (!ssn || !isString(ssn) || ssn.length !== 11) {
        throw new Error('Incorrect or missing ssn: ' + ssn);
    }
    return ssn;
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(Gender).includes(param);
};






