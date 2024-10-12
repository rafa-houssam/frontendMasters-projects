function display(data){console.log(data)}
function printHello(){console.log("Hello");}
function blockFor300ms(){
    // console.log("block 200 ms is rafa houssam")
}
function err(){
    console.log(" the err funciton is running bro whoooooo");
}
setTimeout(printHello, 1);
const futureData = fetch("ht://dog.ceo/api/breeds/image/rando")
futureData.then(display,err)
//or you can use futureData.catch(err);
// blockFor300ms();
// console.log("Me first!");
