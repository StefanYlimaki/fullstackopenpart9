import { NewPatientEntry, Gender } from "./types";

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };


const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatientEntry => {
    const newEntry: NewPatientEntry = {
        name: parseString(name),
        dateOfBirth: parseDate(dateOfBirth),
        ssn: parseSSN(ssn),
        gender: parseGender(gender),
        occupation: parseString(occupation)
    };
    return newEntry;
};

export default toNewPatientEntry;

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







