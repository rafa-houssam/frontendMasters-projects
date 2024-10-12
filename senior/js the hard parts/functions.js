function houssam(array, instructions) {
    console.log(instructions);
    console.log(array);

    let output = [];
    for (let item of array) {
        output.push(instructions(item));
    }
    return output;

}
let arr = houssam([1, 2, 3], input => input * 2);//what a syntax
console.log(arr);
// console.log(multiplyByTWO());
// console.log(undefined*2);
let numbers=[3,2,34]
numbers.forEach(element =>console.log(element));

