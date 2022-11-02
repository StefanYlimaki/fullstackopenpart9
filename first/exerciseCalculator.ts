interface values {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (dailyExerciseHours: Array<number>, targerAmountOfDailyHours: number): values => {
    let trainingDays = 0
    let success = false
    let ratingDescription
    let totalHours = 0
    let rating = 1

    dailyExerciseHours.forEach(element => {
        if (element !== 0) {
            trainingDays += 1
        }
        totalHours += element
    })

    if (totalHours < 5) {
        rating = 1
    } else if (totalHours < 15) {
        rating = 2
    } else {
        rating = 3
    }

    const averageDailyHours = totalHours / dailyExerciseHours.length

    if (averageDailyHours > targerAmountOfDailyHours) {
        success = true
    } else {
        success = false
    }

    if (rating === 1) {
        ratingDescription = 'you should think about touching the grass'
    } else if (rating === 2) {
        ratingDescription = 'not too bad but could be better'
    } else {
        ratingDescription = 'good job!'
    }

    let newValues = {
        periodLength: dailyExerciseHours.length,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: targerAmountOfDailyHours,
        average: averageDailyHours
    }
    return newValues
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))