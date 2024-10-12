function outer (){
    let counter = 0;
    function incrementCounter (){
        counter ++;
        console.log(counter);
    }
  }
  outer();
  // please not that this function will be excuted once not twice
  