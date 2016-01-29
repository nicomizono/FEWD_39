//for loop
for (var i=0; i<21; i++) {
  console.log(i);
  if (i%2 ===0) {
    console.log(i + "is even");
  }
  else {
    console.log(i + "is odd");
  }
}

//while loop

var a = prompt("Enter a number");
var b = prompt("Enter another number");

function max(a,b){
  if (a>b) {
    alert(a + " is a greater number");
  }
  else {
    alert(b + " is greater number");
  }
}

console.log(max(a,b));

// Pt. II


var three = ["5","10","15"];
console.log(Math.max(...three));

// I
