realarray=[];
positivearray=[];
negarray=[];
const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const myObj = (this.responseText); 
    let x=myObj.length;
    //extract all numbers except commas
    const arr = myObj.split(',');
    realarray=arr;
    //store positive values in arr1
    let arr1=[];
    for (let i=0;i<x;i++){
      if(arr[i]>0){
         arr1[i]=arr[i];
      }
  }
  positivearray=arr1;
// let positivearray=[];
// positivearray = arr.filter(myFunction);
//function myFunction(value, index, arr) {
//return value > 0;
//}
//console.log(positivearray);
let negativearray=[];
 negativearray = arr.filter(myFunction);
function myFunction(value, index, arr) {
return value < 0;
}
negarray=negativearray;}
 xhttp.open("GET", "number.txt");
  xhttp.send();

operation="";
radiobutton="";
function operattions(p){
    console.log(p);
    if(p=="add"){
    operation= "add";
    console.log(operation);
    calculation(operation);
    }
    else if(p=="subtract"){
    operation="subtract";
    calculation(operation);
    }
    else if(p=="multiply"){
    operation= "multiply";
    calculation(operation);
    }
    else{
    operation= "divide";
    calculation(operation);
    }
}
  function doSomething(id){
      console.log(id);
  if(id=="positive")
  radiobutton="positive";
  else if(id=="negative")
  radiobutton="negative";
  else
  radiobutton="all";

}
function calculation(abc){
//calculations for positive + all operations
if(operation=="add" && radiobutton=="positive"){
    console.log(positivearray);
  //var sum = positivearray.reduce(function(a, b){
      //return a + b;
 // }, 0);
 sum=0;
   for (let i=22;i<positivearray.length;i++){
     sum+=positivearray[i];
 }
 console.log(sum);
 document.getElementById("result").innerHTML="Sum of all positive numbers are"+" "+sum;
}
 else if(operation=="subtract" && radiobutton=="positive"){
  {
    console.log(positivearray);
    const subtract = (accumulator, number) =>  accumulator - number;
    sub=(positivearray.reduce(subtract));
    document.getElementById("result").innerHTML="Subtraction of all positive numbers are"+" "+sub;
}
}
else if(operation=="multiply" && radiobutton=="positive"){
  {
    console.log(positivearray);
    const mul = (accumulator, number) =>  accumulator * number;
    mu=(positivearray.reduce(mul));
    document.getElementById("result").innerHTML="Multiplication of all positive numbers are"+" "+mu;
}
}
else if(operation=="divide" && radiobutton=="positive"){
  {
    console.log(positivearray);
    const divi = (accumulator, number) =>  accumulator / number;
    dvd=(positivearray.reduce(divi));
    document.getElementById("result").innerHTML="Division of all positive numbers are"+" "+dvd;
}
}
//calculations for negative + all operations
if(operation=="add" && radiobutton=="negative"){
    console.log(negarray);
  sum=0;
 for (let i=22;i<negarray.length;i++){
     sum+=negarray[i];
 }
 console.log(sum);
 document.getElementById("result").innerHTML="Sum of all negative numbers are"+" "+sum;
}
 else if(operation=="subtract" && radiobutton=="negative"){
  {
    console.log(negarray);
    const subtract = (accumulator, number) =>  accumulator - number;
    sub=(negarray.reduce(subtract));
    document.getElementById("result").innerHTML="Subtraction of all negative numbers are"+" "+sub;
}
}
else if(operation=="multiply" && radiobutton=="negative"){
  {
    console.log(negarray);
    const mul = (accumulator, number) =>  accumulator * number;
    mu=(negarray.reduce(mul));
    document.getElementById("result").innerHTML="Multiplication of all negative numbers are"+" "+mu;
}
}
else if(operation=="divide" && radiobutton=="negative"){
  {
    console.log(negarray);
    const divi = (accumulator, number) =>  accumulator / number;
    dvd=(negarray.reduce(divi));
    document.getElementById("result").innerHTML="Division of all negative numbers are"+" "+dvd;
}
}
//calculations for all+ all operations
if(operation=="add" && radiobutton=="all"){
    console.log(realarray);
  sum=0;
 for (let i=22;i<realarray.length;i++){
     sum+=realarray[i];
 }
 console.log(sum);
 document.getElementById("result").innerHTML="Sum of all  numbers are"+" "+sum;
}
 else if(operation=="subtract" && radiobutton=="all"){
  {
    console.log(realarray);
    const subtract = (accumulator, number) =>  accumulator - number;
    sub=(realarray.reduce(subtract));
    document.getElementById("result").innerHTML="Subtraction of all negative numbers are"+" "+sub;
}
}
else if(operation=="multiply" && radiobutton=="all"){
  {
    console.log(realarray);
    const mul = (accumulator, number) =>  accumulator * number;
    mu=(realarray.reduce(mul));
    document.getElementById("result").innerHTML="Multiplication of all  numbers are"+" "+mu;
}
}
else if(operation=="divide" && radiobutton=="all"){
  {
    console.log(realarray);
    const divi = (accumulator, number) =>  accumulator / number;
    dvd=(realarray.reduce(divi));
    document.getElementById("result").innerHTML="Division of all  numbers are"+" "+dvd;
}
}

}