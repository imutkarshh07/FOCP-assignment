
/*
Assignment 1: Student Marks Analyzer
*/

// TASK 1: Store student details
let sname = "Rahul Kumar";
let rollNo = 101;
let department = "CSE";

// TASK 2: Store marks of five subjects
let marks = [78, 85, 62, 91, 34];

// TASK 3: Calculate total marks
function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total;
}

// TASK 4: Calculate percentage
function calculatePercentage(marks) {
    let total = calculateTotal(marks);
    return (total / 500) * 100;
}

// TASK 5: Find the highest mark
function findHighest(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

// TASK 6: Find the lowest mark
function findLowest(marks) {
    let lowest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    return lowest;
}

// TASK 7: Count subjects with marks >= 40
let count = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
        count++;
    }
}

// TASK 8: Convert name to uppercase and count characters
sname = sname.toUpperCase();
let nameLength = sname.length;

// TASK 9: Display the final report
console.log("Student: " + sname);
console.log("Roll Number: " + rollNo);
console.log("Total Marks: " + calculateTotal(marks));
console.log("Percentage: " + calculatePercentage(marks) + "%");
console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));
console.log("Subjects Passed: " + count);
console.log("Name Length: " + nameLength);

// BONUS TASK: Rate performance based on percentage
function MarksRate(marks) {
    let percentage = calculatePercentage(marks);

    if (percentage >= 90) {
        return "Excellent";
    } else if (percentage >= 75) {
        return "Good";
    } else if (percentage >= 60) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}

console.log("Marks Rate: " + MarksRate(marks));
