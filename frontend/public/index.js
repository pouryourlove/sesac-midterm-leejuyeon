const todoPlace = document.querySelector('.todo-list')
const inputBtn = document.querySelector('.inputBtn')
const input = document.querySelector('#todo-input')
const deleteBtn = document.querySelector('.deleteBtn')
console.log(deleteBtn)

document.addEventListener("DOMContentLoaded", ()=> {
	getTodos()
});


function getTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => {
        console.log(json.slice(0,10))
        json.slice(0,10).forEach((element) => {
            console.log(element.title)
            todoPlace.innerHTML += `<li>${element.title}</li>`
            const button = document.createElement("button")
            todoPlace.appendChild(button)
            button.innerText = 'x'
        })      
    })
}



function addTodo(e){

        e.preventDefault()
        const inputValue = input.value
        if(inputValue === '') {
            return
        } else {
            todoPlace.innerHTML += `<li>${input.value}</li>`
            const button = document.createElement("button")
            todoPlace.appendChild(button)
            button.innerText = 'x'
            button.classList.add = "deleteBtn"//???
            
        }
        
}


function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove()

}



inputBtn.addEventListener('click',addTodo)

deleteBtn.addEventListener('click',deleteTodo)