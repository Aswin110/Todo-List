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

        checkboxInput.addEventListener('change', function() {
        if (this.checked) {
            console.log("Checkbox is checked..");
            let parsedData = getLocalStorageData("todoList");
            parsedData[i].checked = true;
            setLocalStorageData("todoList", parsedData)

            titleInput.style.textDecoration = "line-through";
            dueDateInput.style.textDecoration = "line-through";
            priorityInput.style.textDecoration = "line-through";
            detailsInput.style.textDecoration = "line-through";
        } else {
            let parsedData = getLocalStorageData("todoList");
            parsedData[i].checked = false;
            console.log("Checkbox is not checked..");
            setLocalStorageData("todoList", parsedData)

            titleInput.style.textDecoration = "none";
            dueDateInput.style.textDecoration = "none";
            priorityInput.style.textDecoration = "none";
            detailsInput.style.textDecoration = "none"
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

        updateCheckBox();
          
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
            updateDOM();

        }
    } 
    
    const updateDOM = () => {
        
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
                titleInput.style.textDecoration = "none";
                dueDateInput.style.textDecoration = "none";
                priorityInput.style.textDecoration = "none";
                detailsInput.style.textDecoration = "none"
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

    const getLocalStorageData= (key) =>{
        const existingData = localStorage.getItem(key);
        
        let Data = existingData ? JSON.parse(existingData) : {};

        return Data;
    }

    const setLocalStorageData = (key, data) => {
        localStorage.setItem(key , JSON.stringify(data));
    }

    const updateCheckBox = () => {
       let parsedData = getLocalStorageData("todoList")
        const titleInput = document.querySelector(".title");
        const dueDateInput = document.querySelector(".date");
        const priorityInput = document.querySelector(".priority");
        const detailsInput = document.querySelector(".details");
        const checkboxInput = document.querySelector(".checkbox");
        
       for (let i = 0; i < parsedData.length ; i++){
        console.log(parsedData[i].checked)
        if(parsedData[i].checked){
            console.log("true inside")
            checkboxInput.checked = true;
            titleInput.style.textDecoration = "line-through";
            dueDateInput.style.textDecoration = "line-through";
            priorityInput.style.textDecoration = "line-through";
            detailsInput.style.textDecoration = "line-through";
        }else{
            checkboxInput.checked = false;
            titleInput.style.textDecoration = "none";
            dueDateInput.style.textDecoration = "none";
            priorityInput.style.textDecoration = "none";
            detailsInput.style.textDecoration = "none"
        }
       }

    }
homePage();