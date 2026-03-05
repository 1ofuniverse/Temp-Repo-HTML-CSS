//fro loop
for(var i=0;i<5;i++){
    console.log(i);
}; 
//let: Refreceerror : i is not defiend
// var : 5 

//global variable
let data =100;
{
    //local variable
    let data = 200;
}
console.log(data);
// let : 100 var : 200
// global polluting issue raised beacause  of "var" keyword
// we can overcome gobal polluting issue with help of gobal polluting"let" keyword.

var data1 =100;
var data1= 200;
console.log(data1);
//var:200
//let:syntaxerror: already defiend
//var allows duplicay 
