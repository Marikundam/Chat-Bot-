function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "What's your name?") {
        return "Remo";
    } 
    else if (input == "Wassup") {
        return "Too bored";
    } else {
        return "Try asking something else!";
    }
}