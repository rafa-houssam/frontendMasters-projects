
function say(){
    console.log("this is from the timer")
}
function say1(){
    console.log("this is from the time1r")
}
function say2(){
    console.log("this is from the timer2")
}

setTimeout(say1,0);
setTimeout(say2,0);
setTimeout(say,2000);
console.log("this is out from any time");
console.log("this is out from any time");
console.log("this is out from any time");
console.log("this is out from any time");
say();