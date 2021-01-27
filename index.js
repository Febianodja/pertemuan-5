// Exercise 1
let itPosition = ["Full Stack Developer", "Front End Developer", "Back End Developer", "Product Manager", "CTO"];
console.log(itPosition.length);
itPosition.forEach((value) => {
    console.log(value);
})

// Exercise 2
let dynamicDraco = ["Brian", "Faay", "Dendy", "Rendy", "Sur", "Utomo", "Yoshi", "Febian"];
let splitted = dynamicDraco.length/2;
let firstTeam = dynamicDraco.splice(0,splitted);
let secondTeam = dynamicDraco.splice(-splitted);
console.log(firstTeam, secondTeam);

//Exercise 3
let numArray = [3,5,7,9,11];
let newNum = [];
function timesFive (){
    for(let i = 0 ; i < numArray.length ; i++){
        newNum.push(numArray[i] * 5);
    }   
    return newNum;
}
console.log(timesFive(newNum));

//Exercise 4
let firstArray = ['Math', 'English', 'Programming'];
let secondtArray = ['Geography', 'Spanish', 'Programming'];
for(let i = 0 ; i < firstArray.length ; i++){
    if(firstArray[i] === secondtArray[i]){
        console.log("TRUE");
    } else {
        console.log("FALSE");
    }
}

//Exercise 5
