var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var input3 = document.querySelector(".input3");
var input4 = document.querySelector(".input4");
function calculatePercantage(){
var studentMarks = document.querySelector("#total-marks");
var percantage = document.querySelector('#percantage');
var Grade = document.querySelector("#grade");
    // console.log(input1.value);
    // console.log(input2.value);
    // console.log(input3.value);
    // console.log(input4.value);
   
    var obtainMarks = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value) + parseInt(input4.value);
    
    var TotalMarks = 400;
// console.log('obtained marks===>',obtainMarks);
studentMarks.innerHTML = obtainMarks;

var studentPercantage = obtainMarks / TotalMarks * 100;
percantage.innerHTML = studentPercantage;
// console.log(studentPercantage);

if (studentPercantage > 90){
    Grade.innerHTML = 'A+';
} else if(studentPercantage > 80) {
    Grade.innerHTML = 'A';

}else if (studentPercantage > 70){
    Grade.innerHTML = 'B';
}else if (studentPercantage > 60){
    Grade.innerHTML = 'C';
}
else{
    Grade.innerHTML = 'Fail';
}

input1.value = "";
input2.value = "";
input3.value = "";
input4.value = "";

}








// var para = document.querySelector('.para');

// console.log(para.innerHTML);


// function greetUser(){
//     para.innerHTML = "Afo Awan"

// }



// var input1 = document.querySelector('.input1');
// console.log(input1.value);

// function greetUser(){
    
//     console.log(input1.value);
//     input1.value=''
// }