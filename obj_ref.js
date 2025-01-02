//direct copying
let user={
    name:"Ramu",
    age:20
}

admin = user;

admin.name="John"

console.log(admin.name)

console.log(user.name)

// 2nd cloning
//Object Copying


let usero={
    name:"Ramu",
    age:20,
    sizes:{
        width: 20,
        height:40
    }
}
user1=user;
user2=Object.assign({},user);

console.log(user1===user)
console.log(user2===user)
user1.name="John"
user2.name="KLH"
console.log(usero.name)