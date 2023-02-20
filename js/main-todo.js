let input = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')
let empty = document.querySelector('.empty')
let mySelect = document.getElementById('my-select')


btn.addEventListener("click", function(e){
    e.preventDefault()

    let task = input.value

    if (task !== ""){

        let li = document.createElement('li')
        let p = document.createElement('p')
        let tarea = `${task}  -- ${mySelect.value}`
        p.textContent = tarea
    
        li.appendChild(p)
        li.appendChild(taskDelete())
        ul.appendChild(li)
    
        input.value = ""
        empty.style.display='none'
    }else if(task === tarea){ //no anda
        alert('otra')
    }


})

function taskDelete(){
    let btnDelete = document.createElement('button')
    btnDelete.textContent = "X"
    btnDelete.className = "taskDelete"
    
    btnDelete.addEventListener("click", function(e){
        let item = e.target.parentElement
        ul.removeChild(item)

        
    })
    

    return btnDelete

    
}