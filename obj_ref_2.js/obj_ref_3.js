//Deep Clong vs Structured Cloning:


let user={
    name:"Ramu",
    age:20,
    sizes:{
        width: 20,
        height:40
    }
}
user2=Object.assign({},user);
user3=structuredClone(user);


console.log(user2.sizes===user.sizes)
console.log(user3.sizes===user.sizes)