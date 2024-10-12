function createfunction(){
    function add(a,b){
        return a+b;
    }
    return add;
}
let add2Numbers=createfunction();
// console.log(a,b);nope this won't work bro
console.log(add2Numbers(4,5));
//please not that in the last call of add2numbers we will nver return to create
//function unless we return to the value in add2numbers
