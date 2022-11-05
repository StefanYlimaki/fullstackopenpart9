import express from 'express';
import patientService from '../services/patientService';
import utils from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

router.get('/:id', (req, res) => {
  const patient = patientService.getPatiendById(req.params.id);

  if(patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }

});

router.post('/:id/entries', (req, res) => {
  try{
    const newEntry = utils.toNewEntry(req.body);
    const addedEntry = patientService.addPatientEntry(req.params.id, newEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if(error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send(errorMessage);
  }
});


router.post('/', (req, res) => {
  try{
    const newPatientEntry = utils.toNewPatientEntry(req.body);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const addedEntry = patientService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if(error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;