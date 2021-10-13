function createAssemblyLine() {
  return {
    hasClima: (car) => {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = () => {
        if (car.temp < car.tempSettings) {
          car.temp++;
        } else if (car.temp > car.tempSettings) {
          car.temp--;
        }
      };
    },
    hasAudio: (car) => {
      car.currentTrack = { name: "", artist: "" };
      car.nowPlaying = () => {
        if (car.currentTrack !== null) {
          console.log(
            `Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic: (car) => {
      car.checkDistance = (distance) => {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
}

// Create a function that returns a library of decorator functions. They can be used to compose different
//  functionality in a car object that they receive as argument.
// Your solution must return an object, containing three decorator functions:
// hasClima – compose air conditioning controls into the passed in object. This function takes an object
//  as parameter and adds to it the following properties:
// •	temp – number with default value 21;
// •	tempSettings – number with default value 21;
// •	adjustTemp – function which takes no arguments. If temp is less than tempSettings, this function adds
//  1 to temp. If temp is more than tempSettings, it decreases temp by 1. If temp and tempSettings are equal,
//   the function does nothing.
// hasAudio – compose audio player functionality into the passed in object. This function takes an object
// as parameter and adds to it the following properties:
// •	currentTrack – object with properties name (string) and artist (string). Default value is null;
// •	nowPlaying – function, which prints on the console the text "Now playing '{currentTrack.name}'
//  by ${currentTrack.artist}", where name and artist are properties of the currentTrack object.
//   If currentTrack is null, this function does nothing.
// hasParktronic – compose parking aid functionality into the passed in object. This function takes an
//  object as parameter and adds to it the following properties:
// •	checkDistance – function, which takes a single argument distance (number) and prints a message
//  on the console, depending on its value:
// distance < 0.1 – "Beep! Beep! Beep!"
// 0.1 <= distance < 0.25 – "Beep! Beep!"
// 0.25 <= distance < 0.5 – "Beep!"
