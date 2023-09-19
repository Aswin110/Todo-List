import taskForm from "./taskForm.js"

const homePage = () =>{
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.classList.add('homePageHeading');
    heading.textContent = 'To-do List';
    content.appendChild(heading);

    const addTask = document.createElement('button');
    addTask.classList.add('addTaskButton');
    addTask.textContent = '+ Add a Task';
    content.appendChild(addTask);

    addTask.onclick = function() {
        taskForm();
    };
}

export default homePage;