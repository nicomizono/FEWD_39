var response = prompt("What was your best marathon time?");

if (response>4 && response <= 5) {
  alert("Your time is average");
}
else if (response>=2 && response <=4) {
  alert("Your time was excellent");
}
else if (response > 5) {
  alert("Hurry your ass up!!");
}
