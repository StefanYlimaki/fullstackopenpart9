interface Report {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
/*
interface ExerciseValues {
    targetAmountOfDailyHours: number;
    dailyExerciseHours: Array<number>;
}

const parseExerciseArguments = (args: Array<string>): ExerciseValues => {
    console.log(args);
    if (args.length < 4) throw new Error('Not enough arguments');
    const dailyHours: Array<number> = [];

    for (let i = 3; i < args.length; i++) {
        if (!isNaN(Number(args[i]))) {
            dailyHours.push(Number(args[i]));
        } else {
            throw new Error('Provided values were not numbers!');
        }
    }

    if (!isNaN(Number(args[2]))) {
        return {
            targetAmountOfDailyHours: Number(args[2]),
            dailyExerciseHours: dailyHours
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};*/

export const calculateExercises = (dailyExerciseHours: Array<number>, targetAmountOfDailyHours: number): Report => {
    let trainingDays = 0;
    let success = false;
    let ratingDescription;
    let totalHours = 0;
    let rating = 1;

    dailyExerciseHours.forEach(element => {
        if (element !== 0) {
            trainingDays += 1;
        }
        totalHours += element;
    });

    const averageDailyHours = totalHours / dailyExerciseHours.length;

    if (averageDailyHours < 1.5) {
        rating = 1;
    } else if (averageDailyHours < 2) {
        rating = 2;
    } else {
        rating = 3;
    }

    if (averageDailyHours > targetAmountOfDailyHours) {
        success = true;
    } else {
        success = false;
    }

    if (rating === 1) {
        ratingDescription = 'you should think about touching the grass';
    } else if (rating === 2) {
        ratingDescription = 'not too bad but could be better';
    } else {
        ratingDescription = 'good job!';
    }

    const newValues = {
        periodLength: dailyExerciseHours.length,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: targetAmountOfDailyHours,
        average: averageDailyHours
    };
    return newValues;
};
/*
try {
    const { dailyExerciseHours, targetAmountOfDailyHours } = parseExerciseArguments(process.argv);
    console.log(calculateExercises(dailyExerciseHours, targetAmountOfDailyHours));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}*/