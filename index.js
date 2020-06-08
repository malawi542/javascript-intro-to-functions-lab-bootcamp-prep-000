function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

var uppercase = "HELLO!";

uppercase.toUpperCase() === uppercase;

var lowerCase = 'hello!';

lowerCase === lowerCase.toLowerCase();

var mixedCase = 'Hi there!';

mixedCase.toLowerCase() === mixedCase;

mixedCase.toUpperCase() === mixedCase;

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!";
  } else if (HELLO === uppercase) {
    return "YES INDEED!"
  }
}