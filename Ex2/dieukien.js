var grade = 7.5
if(grade >= 5.0){
    console.log("Passed")
}else{
    console.log("Failed")
}

let point = 8.5
if(point >= 9.0 && point < 10){
    console.log("Distinction")
}else if(point >= 7 && point < 8){
    console.log("Merit")
}else if(point >= 5 && point < 7){
    console.log("Passed")
}else if(point >= 0 && point < 5.0){
    console.log("Failed")
}else{
    console.log("Invalid point")
}

let gender = "m"
if(gender == 'm' || gender == 'M'){
    console.log("You are male")
}else if(gender == 'f' || gender == 'F'){
    console.log("You are female")
}

var menu = 1
switch(menu){
    case 1:
        console.log("You have selected menu 1")
        break;
    case 2:
        console.log("You have selected menu 2")
        break;
    case 3:
        console.log("You have selected menu 3")
        break;
    default:
        console.log("Invalid menu!!!!")
        break;
}