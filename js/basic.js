const pregnant = prompt ("Are you pregnant?");

const pregnantAnswer = pregnant.toUpperCase();

if(pregnantAnswer==="YES") {
    const weeks = prompt ("How many weeks along are you?");
    const timeLeft = 40 - weeks;
    alert("Congratulations! You only have " + timeLeft + " weeks left!");
}
