// data base=========================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase, ref, push, set,onValue,update,remove } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9nmncROq7D4bhDsxXpvFrH-DAaRa69NA",
    authDomain: "todo-app-3982c.firebaseapp.com",
    databaseURL: "https://todo-app-3982c-default-rtdb.firebaseio.com",
    projectId: "todo-app-3982c",
    storageBucket: "todo-app-3982c.appspot.com",
    messagingSenderId: "1082966946207",
    appId: "1:1082966946207:web:7af89a2f2223022ddf4daa",
    measurementId: "G-8MSW2TP2YR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

window.add= function(){
    var obj={
        todo: document.getElementById("inpTOdO").value
    }
    var toDo_ref = push(ref(db,"ToDo")) 
   obj.key = toDo_ref.key; 
    set(toDo_ref,obj)
    var todoapp = document.getElementById("toDo")
    onValue(ref(db,"ToDo"),function(data){
        // console.log(data.val());
        // var TodoList=Object.values(data.val())
        // for(var j =0;j<TodoList;i++){
        //     console.log(TodoList[j])
        // }
        // console.log(TodoList)
        
        todoapp.innerHTML=''
        data.forEach(function(Todos){
            console.log(Todos.val())
            var TodoLi =Todos.val().todo
            var TodoKey =Todos.val().key
            if(TodoLi){
                todoapp.innerHTML+=`TODO : ${TodoLi}   
                <button onclick="edit('${TodoKey}')">Edit</button>
                <button onclick="DeleteTodo('${TodoKey}')">Delete</button>
                 <br/>`
                
            }
        else{
            todoapp.innerHTML='NO TODOS'
        }
        });

    })

}


window.edit = function(id){
    var NewTodo = prompt(`EDIT TODO`)
console.log(id)
update(ref(db,`ToDo/${id}`),{
    todo:NewTodo
})


}

window.DeleteTodo=function(id){
    remove(ref(db,`ToDo/${id}`))
}
// data base=========================================



window.get = function(){
    
remove(ref(db));
    
    
}








































// var list = document.getElementById('list')
// var TodoInp = document.getElementById('todoInp')

// function addtodo() {

//     var text = todoInp.value
//     var todotextNode = document.createTextNode(text)
//     var lii = document.createElement('li')
//     lii.setAttribute('class', 'todoList')
//     lii.appendChild(todotextNode)
//     list.appendChild(lii)

//     var deleteButton = document.createElement('button')
//     deleteButton.setAttribute('onclick', 'deletedTodo(this)')
//     var deleteTextNote = document.createTextNode('Delete')
//     deleteButton.appendChild(deleteTextNote)
//     lii.appendChild(deleteButton)

//     var editButton = document.createElement('button')
//     editButton.setAttribute('onclick', 'editTodo(this)')
//     var editText = document.createTextNode('edit')
//     editButton.appendChild(editText)
//     lii.appendChild(editButton)

// }
// function deletedTodo(element) {
//     element.parentNode.remove()
//     console.log(element)
// }

// function editTodo(element) {
//     element.parentNode.firstChild.nodeValue = prompt('editValue', element.parentNode.firstChild.nodeValue)
//     console.log(element.parentNode.childNodes[0])
// }
// function deleteAll() {
//     list.innerHTML = ''
// }