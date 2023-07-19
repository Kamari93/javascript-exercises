const findTheOldest = function (arr) {
    let currentYear = new Date().getFullYear();
    let oldest = arr.map((person) => {
        if ('yearOfDeath' in person) {
            person.life = person.yearOfDeath - person.yearOfBirth;
            return person;
        };
        person.life = currentYear - person.yearOfBirth;
        return person;
    }).sort((a, b) => a.life > b.life ? -1 : 1)

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
