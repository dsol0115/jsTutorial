// 1. if statement
var date = new Date();
var hour = date.getHours();

if(hour<11){
    console.log("morning");
}
else if(hour<15){
    console.log("afternoon");
}
else{
    console.log("evening");
}

// 2. switch statement
var num =1;

switch(num){
    case 0:
        console.log("num is 0");
        break;
    case 1:
        console.log("num is 1");
        break;
    default:
        console.log("it is not num");
        break;

}

// 3. conditional operator
var max=0;
(num > 0) ? console.log('a') : console.log('b');
(max < num) ? max=num : max;

// 4. while loop
var value =0;
while(value<5){
    console.log(value);
    value++;
}

// 5. do while loop

var dovalue =0;
do{
    console.log(dovalue);
    dovalue++;
}while(dovalue<5);

//6. for loop

var forarray = [0,1,2,3,4,5];

for(var i=0; i<forarray.length; i++){
    console.log(forarray[i]);
}

// 7. for in loop

for(var i in forarray){
    console.log(forarray[i]);
}