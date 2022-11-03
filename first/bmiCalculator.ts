/*
interface bmiValues {
    h: number;
    w: number;
}

const parseBmiArguments = (args: Array<string>): bmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            h: Number(args[2]),
            w: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}
*/
export const calculateBmi = (h: number, w: number): string => {
    h = h / 100;  //convert centimeters to meters
    const bmi = w / (h * h)

    if (bmi < 16.0) {
        return 'Underweight (Severe thinness)'
    } else if (bmi < 16.9) {
        return 'Underweight (Moderate thinness)'
    } else if (bmi < 18.4) {
        return 'Underweight (Mild thinness)'
    } else if (bmi < 24.9) {
        return 'Normal range'
    } else if (bmi < 29.9) {
        return 'Overweight (Pre-obese)'
    } else if (bmi < 34.9) {
        return 'Obese (Class I)'
    } else if (bmi < 39.9) {
        return 'Obese (Class II)'
    } else {
        return 'Obese (Class III)'
    }
}
/*
try {
    const { h, w } = parseBmiArguments(process.argv);
    console.log(calculateBmi(h, w))
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage)
}*/