let arr=[1,3,4,5,6];
console.log(arr.join("|"));
let arr2=[
    "sunday",
    {
        age:12,
        univeristy:'higher school of computer science',
        sayHi(){
            return "HI";
        },
    },
    4,
    
]
console.log(arr2);
console.log(arr2[1].sayHi());
// lastElement=arr2.pop();
// firstElement=arr2.shift();
// console.log(lastElement,firstElement);
arr2.unshift(4);
console.log(arr2);
let rafa=[1,2,3,4,5];
rafa.forEach(element => {
    console.log(element);
    
});
