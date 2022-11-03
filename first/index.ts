import express = require('express');
import { calculateBmi } from './bmiCalculator'
const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query
    if (isNaN(Number(height)) || isNaN(Number(weight))) {
        res.send({ error: 'malformatted parameters' })
    }
    const result = calculateBmi(Number(height), Number(weight))
    const response = {
        weight: weight,
        height: height,
        bmi: result
    }
    res.send(response);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
