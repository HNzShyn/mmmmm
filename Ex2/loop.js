//for loop
//in ra dãy số từ 1 đến 10
for(var i = 1; i<= 10; i++){
    console.log(i)
}

//in ra dãy số từ 1 đến 10 nhưng stop ở số 5
for(var i = 1; i<= 10; i++){
    if(i == 5){
        continue    //skip: bỏ qua số đó
    }
    console.log(i)
}

//do while: 
let z = 1
do{
    console.log(z)
    z++
}while(z <= 10)

//while: chỉ chạy code trong "while" nếu thỏa mãn điều kiện
let j = 1
while(j <= 10){
    console.log(j)
    j++
}

var x = 10
//x++: gán giá trị của x cho y rồi mới tăng x lên 1 đơn vị
var y = x++ // x = x + 1
//++x: tăng x lên 1 đơn vị rồi mới gán giá trị của x cho x
var v = ++x

console.log("x = " + x)
console.log("y = " + y)
console.log("v = " + v)
