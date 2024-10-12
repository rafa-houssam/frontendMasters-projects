function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    return newUser;
   };
   let proto={ increment:function(){
     console.log(this.name);
    }};

   let user1 = userCreator("Will", 3);
   const user2 = userCreator("Tim", 5);
//    user1.increment();//this won't work
   user1=Object.create(proto);
   user1.increment();//but this will work bro but its undefined  
 console.log(typeof this);
   
