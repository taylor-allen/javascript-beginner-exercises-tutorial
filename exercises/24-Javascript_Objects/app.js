// var person = {
//     name: "John",                //String
//     lastName: "Doe",
//     age: 35,                     //Number
//     gender: "male",
//     luckyNumbers: [7, 11, 13, 17], //Array
//     significantOther: person2   //Object, yes, the same variable/object defined after
// };

// var person2 = {
//     name: "Jane",
//     lastName: "Doe",
//     age: 38,
//     gender: "female",
//     luckyNumbers: [2, 4, 6, 8],
//     significantOther: person
// };

// var family = {
//     lastName: "Doe",
//     members: [person, person2]   //Array of objects, don't forget to add Jimmy
// };


// function addAllFamilyLuckyNumbers(anArray){
//   let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

//   //To-Do: loop and add; consider nested loops
//   //Hint: use the anArray variable to get all of the lucky numbers
  
//   for (const member of anArray) {
//     const currentLuckyNumbers = member.luckyNumbers
//     for (const number of currentLuckyNumbers) {
//         sumOfAllLuckyNumbers += number
//     }
//   }
  
//   return sumOfAllLuckyNumbers;
// }


// //Enter all your code here:
// function changeJohnsLuckyNumber(){
//     person.luckyNumbers[3] = 33
//     return person.luckyNumbers
// }
// changeJohnsLuckyNumber()

// var person3 = {
//     name: "Jimmy",
//     lastName: "Doe",
//     age: 13,
//     gender: "male",
//     luckyNumbers: [1, 2, 3, 4],
//     significantOther: null
// }

// family.members.push(person3)


// //Do not make changes below:
// console.log(addAllFamilyLuckyNumbers(family.members)); 

// refactoring

const family = {
    lastName: "Doe",
    members: []
}

const person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

const person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: null // Set to null initially
};

const person = {
    name: "John",
    lastName: "Doe",
    age: 35,
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],
    significantOther: person2 // Reference person2 now
};

person2.significantOther = person;
family.members.push(person, person2)

function addAllFamilyLuckyNumbers(anArray) {
    return anArray.reduce((totalSum, member) => {
        const memberSum = member.luckyNumbers.reduce((sum, num) => sum + num, 0);
        return totalSum + memberSum
    }, 0)
}

function changeJohnsLuckyNumber() {
    person.luckyNumbers[3] = 33
}

changeJohnsLuckyNumber()
family.members.push(person3)

console.log(addAllFamilyLuckyNumbers(family.members))