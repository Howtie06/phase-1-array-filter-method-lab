// Code your solution here
function findMatching(drivers,copy) {
    return drivers.filter(driver => driver.toLowerCase() === copy.toLowerCase());
}


function fuzzyMatch(drivers,copy) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(copy.toLowerCase()));
}

function matchName(drivers, copy) {
    return drivers.filter(driver => driver.name.toLowerCase() === copy.toLowerCase());
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
];
