//1. Hàm không có tham số (parameter) và không có return (giá trị trả về)
function  hello(){
    console.log("hello greenwich!")
}

hello()
hello()


//2. Hàm có tham số và không có return 
function sum(a, b){
    console.log(a + b)
}

sum(5,2)

//3. Hàm không có tham số nhưng có return
function year(){
    return 2022;
}

console.log("Current year is " + year())

//4. Hàm có cả tham số và có cả return
function sayHi(name, age){
    return ("Hello " + name + ". You are " + age + " year old!")
}

console.log(sayHi("Minh",40))

//var: phạm vi tác dụng là trong toàn bộ file code
//let: phạm vi tác dụng chỉ trong 1 đoạn code (ex: function)