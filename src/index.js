import homePage from "./home.js";
import taskForm from "./form.js";
// import todo from "./todo.js";

window.addEventListener("load", () => {
   
        const storedData = localStorage.getItem('todoList');
        let parsedData = [];
        if (storedData) {
            try {
                parsedData = JSON.parse(storedData);
            } catch (error) {
                console.error('Error parsing JSON data:', error);
                // Handle the error if JSON parsing fails
            }
        }

        const taskList = document.getElementById('container');
        taskList.innerHTML = "";

        
        for(let i = 0; i < parsedData.length; i++){
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
            titleInput.textContent = parsedData[i].title;

            const detailsInput = document.createElement('span');
            detailsInput.classList.add('description');
            detailsInput.textContent = parsedData[i].description;

            const dueDateInput = document.createElement('span');
            dueDateInput.classList.add('date');
            dueDateInput.textContent = parsedData[i].dueDate;

            const priorityInput = document.createElement('span');
            priorityInput.classList.add('priority');
            priorityInput.textContent = parsedData[i].priority;

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
    const deleteTasks = (num) =>{
        console.log('parsed',num);
        let currentList = localStorage.getItem("todoList");
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
        }
    }     
    });
homePage();