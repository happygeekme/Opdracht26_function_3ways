// function squared(number1, number2) {
//     const squared1 = Math.pow(number1, 2);
//     const squared2 = Math.pow(number2, 2);
//     const sumSquared = squared1 + squared2;
//     return(Math.pow(sumSquared , 2));
// }

// const outcome = squared(1, 1);
// console.log(outcome)


// const squared = function(number1, number2) {
//     const squared1 = Math.pow(number1, 2);
//     const squared2 = Math.pow(number2, 2);
//     const sumSquared = squared1 + squared2;
//     return(Math.pow(sumSquared , 2));
// };

// const outcome = squared(2,3);
// console.log(outcome);

const squared = (number1, number2) => {
    const squared1 = Math.pow(number1, 2);
    const squared2 = Math.pow(number2, 2);
    const sumSquared = squared1 + squared2;
    return(Math.pow(sumSquared , 2));
};
const outcome = squared(2, 2);
console.log(outcome);