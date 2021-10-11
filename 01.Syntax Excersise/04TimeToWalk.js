"use strict"

function solve(steps, footprint, speed) {
    const dist = steps * footprint;
    let time = Math.round(dist / speed * 3.6);
    time += Math.floor(dist / 500) * 60;

    let seconds = time % 60;
    time -= seconds;
    time /= 60;

    let minutes = time % 60;
    time -= minutes;
    time /= 60;

    let hours = time;

    seconds = replaceZero(seconds);
    minutes = replaceZero(minutes);
    hours = replaceZero(hours);

    console.log(`${hours}:${minutes}:${seconds}`);

    function replaceZero(num){
        return num < 10 ? '0' + num : '' + num;
    }
}
solve (4000, 0.60, 5);
solve (2564, 0.70, 5.5);
