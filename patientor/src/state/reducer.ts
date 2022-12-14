import { State } from "./state";
import { Patient, Diagnosis } from "../types";

export type Action =
  | {
    type: "SET_PATIENT_LIST";
    payload: Patient[];
  }
  | {
    type: "ADD_PATIENT";
    payload: Patient;
  }
  | {
    type: "UPDATE_PATIENT";
    payload: Patient;
  }
  | {
    type: "SET_DIAGNOSES_LIST";
    payload: Diagnosis[];
  };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "SET_DIAGNOSES_LIST":
      return {
        ...state,
        diagnoses: {
          ...action.payload
        }
      };
    case "UPDATE_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export const setPatientList = (patientList: Patient[]) => {
  return{
    type: "SET_PATIENT_LIST" as const,
    payload: patientList
  };
};

export const addPatient = (patient: Patient) => {
  return{
    type: "SET_PATIENT" as const,
    payload: patient
  };
};

export const setDiagnosesList = (diagnosesList: Diagnosis[]) => {
  return{
    type: "SET_DIAGNOSES_LIST" as const,
    payload: diagnosesList
  };
};

export const updatePatient = (patient: Patient) => {
  return{
    type: "SET_PATIENT" as const,
    payload: patient
  };
};
