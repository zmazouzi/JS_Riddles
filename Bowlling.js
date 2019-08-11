/*
 Bowling score counting algorithm

 0,0,0,0,0,0,0,0 => 0
 2,3,6,5,8,1,3,2 => 29
 2,3,6,4,8,2,3,2 => 40

  */

export const getScore = (...pins) => {
    let isSpair = false;
    let strikeCounter = 0;
    let lastPin = null;

    function doubleScore(score, pin) {
        return score + 2 * pin;
    }

    function normalScore(score, pin) {
        return score + pin;
    }

    return pins.reduce((score, pin, index) => {
        if ([1, 2].includes(strikeCounter)) {
            strikeCounter--;
            return doubleScore(score, pin);
        }
        if (pin == 10 && (index % 2 == 0)) {
            strikeCounter = 2;
        }
        if (isSpair) {
            isSpair = false;
            return doubleScore(score, pin);
        }
        if (lastPin + pin == 10 && (index % 2 != 0)) {
            isSpair = true;
        }
        lastPin = pin;
        return normalScore(score, pin);
    });
};




