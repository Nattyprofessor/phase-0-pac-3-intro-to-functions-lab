function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else {
        // Handle other cases if needed
    }
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else {
        // Handle other cases if needed
    }
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else {
        // Handle other cases if needed
    }
}

// Example usage:
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // This should log "I would love to!"
