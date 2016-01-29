var a = prompt("Enter a number");
var b = prompt("Enter another number");

function max(a,b){
  if (a>b) {
    alert(a + " is a greater number");
  }
  else if (b>a) {
    alert(b + " is greater number");
  }
}

console.log(max(a,b));
