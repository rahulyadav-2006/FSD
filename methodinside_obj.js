//Methods inside Objects:

let user={
    name: "Rahul",
    age:"25",

    sayHi: function(){
        console.log("Hello "+this.name)
    }
}
user.sayHi();