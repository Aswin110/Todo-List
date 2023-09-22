import todo from "./todo";

const taskForm = () =>{


    const content = document.getElementById('content'); 
     
    //full screen
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'myModal';
    modal.style.display = "block";

    //modal screen
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    //close button on modal
    const closeElement = document.createElement('span');
    closeElement.classList.add('close');
    closeElement.textContent = '✕';
    closeElement.onclick = function() {
        modal.style.display = "none";
    }
    modalContent.appendChild(closeElement);
    
    //form
    const toDoForm = document.createElement('div');
    
    //title
    const titleTextarea = document.createElement('textarea');
    titleTextarea.cols = "100";
    titleTextarea.maxLength = "40";
    titleTextarea.placeholder = "title";
    titleTextarea.setAttribute("required", "");
    toDoForm.appendChild(titleTextarea);

    //details
    const detailTextarea = document.createElement('textarea');
    detailTextarea.cols = "100"
    detailTextarea.rows = "10"
    detailTextarea.placeholder = "details"
    detailTextarea.setAttribute("required", "");
    toDoForm.appendChild(detailTextarea);

    //date
    const dateContent = document.createElement('div');
    dateContent.classList.add('date-content');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for','date');
    dateLabel.textContent = 'Due date:  ';
    dateContent.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'date';
    dateInput.setAttribute("required", "");
    dateContent.appendChild(dateInput);
    
    toDoForm.appendChild(dateContent);

    //footer
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');

    //priority input radio   
    const priorityContent = document.createElement('div');
    priorityContent.classList.add('priority-content');

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'priority';
    priorityLabel.id = 'priority';
    priorityLabel.textContent = 'Priority:  ';
    priorityContent.appendChild(priorityLabel);

    const lowInput = document.createElement('input');
    lowInput.type = 'radio';
    lowInput.id = 'Low';
    lowInput.name = 'priority';
    lowInput.value = 'low';
    lowInput.setAttribute("required", "");
    priorityContent.appendChild(lowInput);
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute('for','Low');
    lowLabel.textContent = "Low";
    priorityContent.appendChild(lowLabel);

    const mediumInput = document.createElement('input');
    mediumInput.type = 'radio';
    mediumInput.id = 'Medium';
    mediumInput.name = 'priority';
    mediumInput.value = 'medium';
    priorityContent.appendChild(mediumInput);
    const mediumLabel = document.createElement('label');
    mediumLabel.setAttribute('for','Medium');
    mediumLabel.textContent = "Medium";   
    priorityContent.appendChild(mediumLabel);

    const highInput = document.createElement('input');
    highInput.type = 'radio';
    highInput.id = 'High';
    highInput.name = 'priority';
    highInput.value = 'high';
    priorityContent.appendChild(highInput);
    const highLabel = document.createElement('label');
    highLabel.setAttribute('for','High');
    highLabel.textContent = "High";   
    priorityContent.appendChild(highLabel);
    footerContent.appendChild(priorityContent);

    //submit
    const submitContent = document.createElement('div');
    submitContent.classList.add('submit-content');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'submit';

    let todoList = [];
    submitButton.onclick = function(){
        let priorityValue = getPriorityValue();

        let todoObj = new todo(titleTextarea.value, detailTextarea.value, dateInput.value, priorityValue)
        todoList.push(todoObj);
        console.log(todoList.length);

        updateStorage("todoList",todoList,todoObj)
        updateOnSubmit()

        titleTextarea.value = "" ;
        detailTextarea.value = "" ;
        dateInput.value = "" ;
        lowInput.checked = false;
        mediumInput.checked = false;
        highInput.checked = false;
    }

    const updateStorage = (key, arr,obj) =>{
        const name = localStorage.getItem(key)
        if(!name){
            const stringifiedObj = JSON.stringify(arr) ;
            localStorage.setItem(`${key}`, stringifiedObj);
        }else{
            const existingData = localStorage.getItem(key);
        
            let parsedData = existingData ? JSON.parse(existingData) : {};
            console.log(parsedData)
            parsedData.push(obj);

            localStorage.setItem(key, JSON.stringify(parsedData));
        }
    }

    submitContent.appendChild(submitButton);
    footerContent.appendChild(submitContent);
    toDoForm.appendChild(footerContent);
    modalContent.appendChild(toDoForm);
    
    //when click on window close the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    content.appendChild(modal);

    const getPriorityValue = () => {
        const selectedPriority = document.querySelector('input[name="priority"]:checked'); // Assuming that the radio buttons share the same 'name' attribute, in this case, 'priority'.
    
        if (selectedPriority) {
        const selectedValue = selectedPriority.value; // If a radio button is selected, its value can be retrieved using the 'value' property.
        // console.log(`Selected Priority: ${selectedValue}`);
        return selectedValue;
        } else {
        console.log('No priority selected.'); // Handle the case where no radio button is selected.
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
    const deleteTasks = (num) =>{
        console.log('parsed',num);
        let parsedData = [];
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
            updateOnSubmit();
        }
    } 
}

export default taskForm;