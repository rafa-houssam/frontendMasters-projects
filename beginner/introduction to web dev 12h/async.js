async function name1(name) {
    return name;
}
console.log("what is this : ",name1("houssam")) 
// this is how to handle multiple promises
 async function getMultiplePromises(){
const arr= await Promise.all([
name1("mark"),
name1("jemmy"),
name1("lora"),
])
console.log(arr);
}
getMultiplePromises();