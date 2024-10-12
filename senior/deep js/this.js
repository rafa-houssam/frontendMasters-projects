
var workshop = {
    teacher:"houssam",
    ask() {
        setTimeout(()=>{
            console.log(this.teacher + " will be in the first place in the next year so ...");
        }, 1000);
    }
};

workshop.ask();
