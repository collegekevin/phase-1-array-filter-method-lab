// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

//const matchingDrivers = 'Bobby'; 

//const matchedName = drivers.filter(findMatching(matchingDrivers));

//const matchedInitials = drivers.filter(fuzzyMatch);

//const matchedProperty = drivers.filter(matchName);

function findMatching (drivers, matchingDriver){
     return drivers.filter(driver => driver === matchingDriver)
    
}

// function findMatching (drivers){
//     const foundDrivers = drivers === matchingDrivers;
//     console.log(foundDrivers);
//     return foundDrivers;
// }

function fuzzyMatch(drivers, namesBeginWith){
    return drivers.filter(driver => driver.charAt(0) === namesBeginWith)
}

function matchName (drivers, string){
    return drivers.filter(driver => driver === string)
}
