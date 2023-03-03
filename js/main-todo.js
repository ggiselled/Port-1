

let notask = document.getElementById('notask')
let yestask = document.getElementById('yestask')
let taskContainer = document.getElementById('taskcontainer')
let firstTask = document.getElementById('firstTask')
let todo = document.getElementById('todo')
let input = document.querySelector("input");
let btn = document.getElementById("btn");
let ul = document.querySelector("ul");
let mySelect = document.getElementById("my-select");
let priority = document.getElementById("priority")
let btnBack = document.getElementById('btnBack')



firstTask.addEventListener('click', () => {
  todo.style.display = 'block'
  notask.style.display ='none'
  btnBack.style.display ='block'
})

btnBack.addEventListener('click', () =>{
  notask.style.display = 'block'
  todo.style.display = 'none'
  btnBack.style.display = 'none'

  // let lastTasks = document.querySelectorAll("li p")

  // if (lastTasks){
  //   notask.style.display = 'none'
  //   yestask.style.display = 'block'
  // }else if (taskDelete()){
  //   notask.style.display = 'block'
  //   yestask.style.display = 'none'
  // }
})


  btn.addEventListener("click", function (e) {
    e.preventDefault();
  
    let task = input.value;
  
    if (task !== "") {
      let taskRepeat = false;
      let lastTasks = document.querySelectorAll("li p")
      for (let i = 0; i < lastTasks.length; i++) {
        if (
          lastTasks[i].textContent.startsWith(mySelect.value) &&
          lastTasks[i].textContent.endsWith(`-- ${task} -- ${priority.value}`)
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
        let tarea = `${mySelect.value} -- ${task} -- ${priority.value}`
        p.textContent = tarea
        li.appendChild(p)
        li.appendChild(taskDelete())
        ul.appendChild(li)
  
        input.value = "";

  
        if(priority.value == "urgente"){
          p.className = "p-urgente"
        }else if (priority.value == "postergable"){
          p.className = "p-postergable"
        }else{
          p.className = "p-opcional"
        }
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

    let items = document.querySelectorAll('li')
    if (items.length === 0){
      notask.style.display = 'block'
      todo.style.display ='none'
    }

  });

  return btnDelete;
}
