let houssam={};
houssam.name="houssam";
houssam.age=18;
houssam.university="higher school of computer science";
// console.log(houssam);
houssam.display=function(){
    console.log("your age is ",houssam.age);
}
houssam.display();
let fadi=Object.create(houssam);
console.log(fadi);
fadi.display();//maybe some closure here ?????!!!!!!
class person{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }

}
let chihab=new person("chihab",18);
console.log(chihab);