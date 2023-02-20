let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let empty = document.querySelector(".empty");
let mySelect = document.getElementById("my-select");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let task = input.value;

  if (task !== "") {
    let taskRepeat = false;
    let lastTasks = document.querySelectorAll("li p")
    for (let i = 0; i < lastTasks.length; i++) {
      if (
        lastTasks[i].textContent.startsWith(task) &&
        lastTasks[i].textContent.endsWith(`-- ${mySelect.value}`)
      ) {
     taskRepeat = true
        break;
      }
    }
    if  (taskRepeat) {
      alert("Ya tenés esta tarea pendiente")
    } else {
      let li = document.createElement("li")
      let p = document.createElement("p")
      let tarea = `${task} -- ${mySelect.value}`
      p.textContent = tarea
      li.appendChild(p)
      li.appendChild(taskDelete())
      ul.appendChild(li)
      input.value = "";
      empty.style.display = "none"
    }
  }
})

function taskDelete() {
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "X";
  btnDelete.className = "taskDelete";

  btnDelete.addEventListener("click", function (e) {
    let item = e.target.parentElement;
    ul.removeChild(item);
  });

  return btnDelete;
}
