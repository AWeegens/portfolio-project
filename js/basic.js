// Create const for the question and make sure "yes" works regardless of case
const pregnant = prompt ("Are you pregnant?");

const pregnantAnswer = pregnant.toUpperCase();

// If clause to calculate weeks left of pregnancy

if(pregnantAnswer==="YES") {
    const weeks = prompt ("How many weeks along are you?");
    const timeLeft = 40 - weeks;
    alert("Congratulations! You only have " + timeLeft + " weeks left!");
}
