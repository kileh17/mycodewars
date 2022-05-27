let marks = [1,1,1,1,1,1,1,2]
function getAverage(marks){
    let x = marks.reduce((previous,current) => previous + current,0);
    let mean = x / marks.length
    let roundedMean = Math.floor(mean)
    return roundedMean
    }
// prompt
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.