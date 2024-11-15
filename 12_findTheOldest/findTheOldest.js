const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = null;
    for (person of people){
        let birthYear = person.yearOfBirth;
        let deathYear = person.hasOwnProperty("yearOfDeath") ? person.yearOfDeath : new Date().getFullYear();
        if (deathYear - birthYear > oldestAge) {
            oldestAge = deathYear - birthYear;
            oldestPerson = person;
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
