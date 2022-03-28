let addButton = document.getElementById("addTask");
let toDos = document.getElementById("container");
let task = document.getElementById("task");

addButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-style");
  paragraph.innerText = task.value;
  toDos.appendChild(paragraph);
  task.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDos.removeChild(paragraph);
  });
});