

let notask = document.getElementById("notask");
let taskContainer = document.getElementById("taskContainer");
let firstTask = document.getElementById("firstTask");
let todo = document.getElementById("todo");
let input = document.querySelector("input");
let btn = document.getElementById("btn");
let ul = document.querySelector("ul");
let mySelect = document.getElementById("my-select");
let priority = document.getElementById("priority");


  //ver de meterlo dentro de una función
  function firstTasks (){
    firstTask.addEventListener("click", () => {
      todo.style.display = "block";
      notask.style.display = "none";
    });

  }
  firstTasks()



  function tareas () {

    btn.addEventListener("click", function (e) {
      e.preventDefault();
    
      let task = input.value;
    
      if (task !== "") {
        let taskRepeat = false;
        let lastTasks = document.querySelectorAll("li p");
        for (let i = 0; i < lastTasks.length; i++) {
          if (
            lastTasks[i].textContent.startsWith(mySelect.value) &&
            lastTasks[i].textContent.endsWith(`-- ${task} -- ${priority.value}`)
          ) {
            taskRepeat = true;
            break;
          }
        }
        if (taskRepeat) {
          alert("Ya tenés esta tarea pendiente");
        } else {
          let li = document.createElement("li");
          let p = document.createElement("p");
          let tarea = `${mySelect.value} -- ${task} -- ${priority.value}`;
          p.textContent = tarea;
          li.appendChild(p);
          li.appendChild(taskDelete());
          ul.appendChild(li);
    
          input.value = "";
    
          if (priority.value == "urgente") {
            p.className = "p-urgente";
          } else if (priority.value == "postergable") {
            p.className = "p-postergable";
          } else {
            p.className = "p-opcional";
          }
        }
      }
    });
  }

  tareas()




function taskDelete() {
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "X";
  btnDelete.className = "taskDelete";


  btnDelete.addEventListener("click", function (e) {
    let item = e.target.parentElement;
    ul.removeChild(item);
      if (ul.children.length === 0) {
        notask.style.display = "block";
        taskContainer.style.display = "none";
        todo.style.display = 'none'
      }
      taskContainer.style.display = "block";
      tareas()

  } );
  
  return btnDelete; 

}








