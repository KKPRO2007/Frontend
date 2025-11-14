function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Counter:", count);
  };
}
let counter = createCounter();
counter();
counter();
counter();

(function () {
  console.log("IIFE executed immediately!");
})();

function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}
let sayHi = greet("Krishna koushik");
sayHi();

let input = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    list.removeChild(li);
  };

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
});
