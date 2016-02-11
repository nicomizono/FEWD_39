//Setting up & grabbing things

var form = document.querySelector("#new-todo-item-form");
var item = document.querySelector("#new-todo-item-input");
var parent = document.querySelector("#todo-list");

//add items to list

function addListItem(todo){//when you define a function, you can create any internal variable i.e. todo to use within the funciton.
  var listItem = document.createElement("li");
  listItem.textContent = todo;
  parent.appendChild(listItem);
}

function formSubmitted(buttonClicked){
  buttonClicked.preventDefault(); //on any event that comes in, prevent the default.
  addListItem(input.value);//calling the function, adding the value that was captured in the previous function above. When you call the function, you need to use the real stuff.
  form.reset();
}

form.addEventListener("submit", formSubmitted);//call back function = is invoked after some kind of event so formSubmitted does not need ()


































// var form = document.querySelector("#new-todo-item-form");
// var input = document.querySelector("#new-todo-item-input");
// var list = document.querySelector("#todo-list");

// function createItem(todo) {
//   var listItem = document.createElement("li");
//   listItem.textContent = todo;
//   list.appendChild(listItem);
// }

// another way to write function above
// function createItem(todo) {
//   var newListItem = "<li>" + todo + "</li>";
//   list.innerHTML += newListItem;
// }

// function formSubmitted(event) {
//   event.preventDefault();
//   createItem(input.value);
//   form.reset();
// }

// form.addEventListener("submit", formSubmitted);

// jQuery
// var $form = $("#new-todo-item-form");
// var $input = $("#new-todo-item-input");
// var $list = $("#todo-list");
//
// $form.on("submit", formSubmitted);
//
// function formSubmitted(event){
//   event.preventDefault();
//   var newListItem = "<li>" + $input.val() + "</li>";
//   $list.append(newListItem);
//   $form[0].reset();
// }
