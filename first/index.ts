import express = require('express');
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());


app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});


app.get('/bmi', (req, res) => {
    const { height, weight } = req.query;
    if (isNaN(Number(height)) || isNaN(Number(weight))) {
        res.send({ error: 'malformatted parameters' });
    }
    const result = calculateBmi(Number(height), Number(weight));
    const response = {
        weight: weight,
        height: height,
        bmi: result
    };
    res.send(response);
});


app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = req.body;
    console.log(daily_exercises, target);

    if (!target || !daily_exercises) {
        res.send({ error: 'parameters missing' });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    daily_exercises.forEach((e: number) => {
        if (isNaN(Number(e))) {
            res.send({ error: 'malformatted parameters' });
        }
    });

    if (isNaN(Number(target))) {
        res.send({ error: 'malformatted parameters' });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(daily_exercises, target);
    res.send(result);
});


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
