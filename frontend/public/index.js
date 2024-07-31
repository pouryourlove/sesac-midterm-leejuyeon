const todoPlace = document.querySelector('.todo-list')
console.log(todoPlace)

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
