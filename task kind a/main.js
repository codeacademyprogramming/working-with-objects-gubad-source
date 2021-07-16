let user={
    userName:"Cody",
    userSurname:"Wilson",
    userAge:66,
    address:{
        district:"Sietle",
        street:"michael.ames",
        door:66,
    },
    body:{
        height:1.66,
        weight:66,
    },
    isEngaged:false
}
console.log(user.userName);

let user2=user;

user2={
    userName:"Rex",
    isEngaged:true,
}
console.log(user2);

delete user.address
console.log(user);

const IsFull=(object)=>{
for(let key in object){
    return true
}
return false
}
console.log(IsFull(user.address));


let budgetOfCountries={
USA:200,
Russia:50,
China:150,
GB:66
}

const budgetCalc=(budget)=>{
    let temp=0;
    for(let key in budget){
        (temp+=budget[key]/66)
    }
    return temp;
}
console.log(budgetCalc(budgetOfCountries));



const calcDistance=(obj)=>{
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key]*=66;
        }
    }
}


let distanceFromGalaxies={
    Andromeda:330,
    Hyperion:66
}
calcDistance(distanceFromGalaxies);

console.log(distanceFromGalaxies);