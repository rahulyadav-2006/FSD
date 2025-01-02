//    Object Copying


let user={
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
console.log(user.name)