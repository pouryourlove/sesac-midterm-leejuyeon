const todoPlace = document.querySelector('.todo-list')
const inputBtn = document.querySelector('.inputBtn')
const input = document.querySelector('#todo-input')

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
        }
        
}


inputBtn.addEventListener('click',addTodo)