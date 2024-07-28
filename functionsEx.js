// This is a simple function.
function sing(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
//This is to call/print function.
sing()

//Function Argument
function greet(firstName){
    console.log(`HI, ${firstName}`)
    
}

/*
 Exercise: 
 Define a function called rant which accepts a string argument called message.  
 The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  
 For example, rant("I hate beets") should print out:
    I HATE BEETS
    I HATE BEETS
    I HATE BEETS

*/
// Solution 1:
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
// Solution 2:
function rant(message) {
    for (let i = 0; i < 3; i++) {
      console.log(message.toUpperCase());
    } 
}

// functions with multiple arguments.
function name(fName, lName){
    console.log(`HI, ${fName} ${lName[0]}.`)
}

// function repeat
function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i <numTimes; i++){
         result += str;
    }
    console.log(result);
}

/*
 Exercise:
 In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  
 Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice. 
 If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!" 

*/

function isSnakeEyes(num1, num2){
    if (num1 === 1 && num2 === 1) {
        console.log('Snake Eyes!');
      } else {
        console.log('Not Snake Eyes!');
      }
}

// Return value function
function add(x, y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x + y;
}
/*
 Exercice:
 I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  
 It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather. 

*/
function isShortsWeather(temp){
    if(temp >= 75){
        return true;
    }
    return false;
}

/*
 Exercise:
 Please write a function called lastElement which accepts a single array argument.  
 The function should return the last element of the array (without removing the element).  
 If the array is empty, the function should return null.

*/
//Solution 1:
function lastElement(arr) {
    if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
}
//Solution 2:
function lastElement(arr) {
    if (!arr.length) {
      return null;
    }
    return arr[arr.length - 1];
  }
   
  // Or we can write it like this:
  function lastElement(arr) {
    if (!arr.length) return null;
    return arr[arr.length - 1];
}
// Solution 3:
function lastElement(arr) {
    if (arr.length > 0) {
      return arr[arr.length - 1];
    }
    return null;
}
//Solution 4:
function lastElement(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : null;
  
}
/*
 Exercise:
 Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized
  (but the rest of the string unchanged).  For example:

    capitalize('eggplant') // "Eggplant"
    capitalize('pamplemousse') // "Pamplemousse"
    capitalize('squid') //"Squid"

Hints:

    Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.

    Single out the first letter and capitalize it. (use a string method to help!)

    Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)

    For example: 'eggplant' becomes 'E' + 'ggplant'


*/
function capitalize(word){
    
    return word[0].toUpperCase() + word.slice(1);
    
}
/*
 Exercise:
 Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

    sumArray([1,2,3]) // 6
    sumArray([2,2,2,2]) // 8
    sumArray([50,50,1]) // 101

Hints:

    You'll need a variable to keep track of the total.  It should start out as zero.

    Loop over the array and for each element, add it to the total variable.

    After you have added every number to total, return total.
*/
// Solution 1:
function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total;
}
//Solution 2:
function sumArray(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
}

/*
 Exercise: 
 Write a function called returnDay. this function takes in one parameter (a number from 1-7) 
 and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, 
 the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use 
 Monday as the first day.

 Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number 
 into the array/object you've created to retrieve the corresponding day name and then return that value.

    returnDay(1) // "Monday"
    returnDay(7) // "Sunday"
    returnDay(4) // "Thursday"
    returnDay(0) // null
 
 */
function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num - 1];
    }
  }

    