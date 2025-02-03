// document.addEventListener('DOMContentLoaded',function(){
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const taskInput = document.getElementById('taskInput');
//     const taskList = document.getElementById('taskList');
//     const sortTasksBtn = document.getElementById('sortTasksBtn')
// })

document.getElementById('addTaskBtn').addEventListener('click', function(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
     if (taskText === ''){
        alert('veuillez entrer une tâche.');
        return ;
     }
        
       
     const taskList = document.getElementById('taskList');

     const li = document.createElement('li');
     
     const taskSpan = document.createElement('span');
     taskSpan.textContent = taskText;

     const deleteBtn = document.createElement('button');
     deleteBtn.textContent = 'Supprimer';
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click', function(){
        taskList.removeChild(li);
     });
     li.appendChild(taskSpan);
     li.appendChild(deleteBtn);
     taskList.appendChild(li);
     taskInput.value = '';
     
});

document.getElementById('sortTasksBtn').addEventListener('click' , function(){
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children);

    tasks.sort((a,b) =>{
        const taskA = a.querySelector('span').textContent.toLowerCase();
        const taskB = b.querySelector('span').textContent.toLowerCase();
        return taskA.localeCompare(taskB);
    });
    taskList.innerHTML = '';
    tasks.forEach(task => taskList.appendChild(task));
});

document.getElementById('taskList').addEventListener('click', function(event) {
    if(event.target.tagName === 'SPAN'){
        event.target.parentElenment.classList.toggle('completed');
    }
});