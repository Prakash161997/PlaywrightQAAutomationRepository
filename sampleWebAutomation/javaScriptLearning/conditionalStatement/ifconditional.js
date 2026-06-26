let num=25
if(num % 4 ==0){
    console.log(num+" is divisible by 4");
}else{
    console.log(num+" is not diviisable by 4");
}

// turnary operator

let age=24
 
let result= (age>=18) ? "Eligiable for Voting": "Not Eligiable for Voting"
console.log(result);

// if else if ladder

let marks=101
 
if(marks>=70 && marks<=100){
    console.log("The Result is FCD!!!");
}else if(marks<70 && marks>=60){
    console.log("The Result is First Class!!!");
}else if(marks<60 && marks>=50){
    console.log("The Result is Second Class!!!");
}else if(marks<50 && marks>=35){
    console.log("The Result is Pass Class!!!");
}else if(marks<35 && marks>=0){
    console.log("The Result has failed!!!");
}else{
    console.log("Invalid Marks");
}


 