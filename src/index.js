import homePage from "./home.js";
import taskForm from "./form.js";

window.addEventListener("load", () => {
   
    let currentList = localStorage.getItem("todoList");
    let parseObj = JSON.parse(currentList);
    console.log('parseObj',parseObj)
    const taskList = document.getElementById('container');
    taskList.innerHTML = "";

    for(let i = 0; i < parseObj.length; i++){
        const taskCard = document.createElement('div');
        taskCard.id = 'wrapper';
        taskCard.classList.add('todo')
        
        const checkboxInput = document.createElement('input');
        checkboxInput.classList.add('checkbox');
        checkboxInput.type = "checkbox";
        var checkbox = document.querySelector("input[name=checkbox]");

        checkboxInput.addEventListener('change', function() {
        if (this.checked) {
            console.log("Checkbox is checked..");
            titleInput.style.textDecoration = "line-through";
            dueDateInput.style.textDecoration = "line-through";
            priorityInput.style.textDecoration = "line-through";
            detailsInput.style.textDecoration = "line-through";
        } else {
            console.log("Checkbox is not checked..");
        }
        });

        const titleInput = document.createElement('span');
        titleInput.classList.add('title');
        titleInput.textContent = parseObj[i].title;

        const detailsInput = document.createElement('span');
        detailsInput.classList.add('description');
        detailsInput.textContent = parseObj[i].description;

        const dueDateInput = document.createElement('span');
        dueDateInput.classList.add('date');
        dueDateInput.textContent = parseObj[i].dueDate;

        const priorityInput = document.createElement('span');
        priorityInput.classList.add('priority');
        priorityInput.textContent = parseObj[i].priority;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.id = i;
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click',()=>{
            console.log(deleteButton.id);
            let num = deleteButton.id;
            deleteTasks(num)
        })

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';

        taskCard.appendChild(checkboxInput);
        taskCard.appendChild(titleInput);
        taskCard.appendChild(dueDateInput);
        taskCard.appendChild(priorityInput);
        taskCard.appendChild(editButton);
        taskCard.appendChild(deleteButton);
        taskList.appendChild(taskCard);
          
    } 
    
    });

    const deleteTasks = (num) =>{
        console.log('parsed',num);
        let currentList = localStorage.getItem("todoList");
        let parsedData = [];
        if (currentList) {
            try {
               parsedData = JSON.parse(currentList);
            //    console.log(parsedData);
            } catch (error) {
                console.error('Error parsing JSON data:', error);
            }
        }
        if (Array.isArray(parsedData)) {
            console.log('filter',parsedData);
            parsedData = parsedData.filter((task, index) => index !== parseInt(num));
        
            localStorage.setItem('todoList', JSON.stringify(parsedData));
            updateOnSubmit();

        }
    } 
    
    const updateOnSubmit = () => {
        
        let currentList = localStorage.getItem("todoList");
        let parseObj = JSON.parse(currentList);
        console.log('parseObj',parseObj)
        const taskList = document.getElementById('container');
        taskList.innerHTML = "";

        for(let i = 0; i < parseObj.length; i++){
            const taskCard = document.createElement('div');
            taskCard.id = 'wrapper';
            taskCard.classList.add('todo')
            
            const checkboxInput = document.createElement('input');
            checkboxInput.classList.add('checkbox');
            checkboxInput.type = "checkbox";
            var checkbox = document.querySelector("input[name=checkbox]");

            checkboxInput.addEventListener('change', function() {
            if (this.checked) {
                console.log("Checkbox is checked..");
                titleInput.style.textDecoration = "line-through";
                dueDateInput.style.textDecoration = "line-through";
                priorityInput.style.textDecoration = "line-through";
                detailsInput.style.textDecoration = "line-through";
            } else {
                console.log("Checkbox is not checked..");
            }
            });

            const titleInput = document.createElement('span');
            titleInput.classList.add('title');
            titleInput.textContent = parseObj[i].title;

            const detailsInput = document.createElement('span');
            detailsInput.classList.add('description');
            detailsInput.textContent = parseObj[i].description;

            const dueDateInput = document.createElement('span');
            dueDateInput.classList.add('date');
            dueDateInput.textContent = parseObj[i].dueDate;

            const priorityInput = document.createElement('span');
            priorityInput.classList.add('priority');
            priorityInput.textContent = parseObj[i].priority;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            deleteButton.id = i;
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click',()=>{
                console.log(deleteButton.id);
                let num = deleteButton.id;
                deleteTasks(num)
            })

            const editButton = document.createElement('button');
            editButton.className = 'edit';
            editButton.textContent = 'Edit';

            taskCard.appendChild(checkboxInput);
            taskCard.appendChild(titleInput);
            taskCard.appendChild(dueDateInput);
            taskCard.appendChild(priorityInput);
            taskCard.appendChild(editButton);
            taskCard.appendChild(deleteButton);
            taskList.appendChild(taskCard);
              
        }        
    }


homePage();