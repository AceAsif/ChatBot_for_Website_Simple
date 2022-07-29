function getBotResponse(input) {
    //rock paper scissors
    if (input.toLowerCase() == "rock") {
        return "paper";
    } else if (input.toLowerCase() == "paper") {
        return "scissors";
    } else if(input.toLowerCase() == "scissors") {
        return "rock";
    }

    //Simple responses
    if (input.toLowerCase() == "hello") {
        return "Hello there!";
    } else if (input.toLowerCase() == "goodbye") {
        return "Talk to you later!"
    } else {
        return "Try asking something else!";
    }
}