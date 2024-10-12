let name1="houssam";
let name2=name1;
name2="modified houssam";
console.log(name1,name2);
let students=[1,2,3,4];
for(let student of students){
    console.log(student);
 

}
// in used for indexes and of for values
console.log(Number.isNaN(name1));
console.log(Number.isNaN(name1/2));
console.log(!!NaN);
// !! is another form of Boolean()funcion ()
console.log("13"<2);//interesting
let bizarre=undefined;
console.log("####");
console.log(bizarre==null);
console.log(bizarre===null);
//new block 
let teacher="rafa houssam";
(function change(){
    let teacher="the new houssm rafa";
    console.log("this is inside the function",teacher);
})();
console.log("this is outside the funciton",teacher);
function houssam(){
setTimeout(function rafa(){
    console.log("rafa houssam");
},1);    
}
houssam();
let lll=console.log("this is llll");
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
function stuff(anything){
    console.log(this.name,anything);
}
function otherstuff(){
    let houssam2={
        name:"houssam"
    }
    stuff.call(houssam2,"houssam is the best");
}
otherstuff()

