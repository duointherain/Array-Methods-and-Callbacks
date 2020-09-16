import { fifaData } from './fifa.js';
//console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //
console.log("***Task 1****");
/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final

(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let wishItWorked = fifaData.filter(item => {
    return item.Stage === 'Final' && item.Year === 2014;
    
})
console.log(wishItWorked[0]['Home Team Name']);
console.log(wishItWorked[0]['Away Team Name']);
console.log(wishItWorked[0]['Home Team Goals']);
console.log(wishItWorked[0]['Away Team Goals']);
console.log(wishItWorked[0]['Win conditions']);
console.log(fifaData[0].Year) 


//console.log(wishItWorked[0]['Stage']);


// let wishItWorked2 = fifaData.filter(item => {
//     return item.Stage === 'Final'
    
// })

// console.log(wishItWorked2);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log("***Task 2****");



function getFinals(data) {
    const onlyFinals = data.filter(game =>{
        return game.Stage === "Final";
    })
    return onlyFinals;
};
console.log(getFinals(fifaData));


// function getFinals(data) {
    
//     let finDat = data.filter(item => {
//         return item.Stage === 'Final'
      
        
//     })
//     return finDat;
// };
// console.log(getFinals(fifaData));
 
console.log("***Task 3****");
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const years = callback.map((data) => {
        return data.Year;
    });
    return years;
};
console.log(getYears(getFinals(fifaData)));







// console.log(fifaData[0].Year) 


// function getYears(callback) {

   

//     let years = wishItWorked3.forEach(item => {
//         console.log(item.Year) 
        
//     });   
// };
// console.log(getYears(getFinals(fifaData)));

// function getYears(callback) {
//     const years = callback.map((data) => {
//         return data.Year;
//     });
//     return years;
//     console.log(fifaData[0].Year) 
// };

// console.log(getYears(getFinals(fifaData)));
// console.log(fifaData[0].Year) 
  

//let makeItWork = the array from get finals, filter it to have just the years, console.log makeItWork ?

console.log("***Task 4****");
/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();
console.log("***Task 5****");
/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();
console.log("***Task 6****");
/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
