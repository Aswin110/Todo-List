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

        let todo1 = new todo(titleTextarea.value, detailTextarea.value,dateInput.value, priorityValue)
        todoList.push(todo1);
        console.log(todoList.length);

        updateStorage("todoList",todoList)
        updateTaskListDOM()

        titleTextarea.value = "" ;
        detailTextarea.value = "" ;
        dateInput.value = "" ;
        lowInput.checked = false;
        mediumInput.checked = false;
        highInput.checked = false;
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

    const updateStorage = (key, arr) =>{
        const stringifiedObj = JSON.stringify(arr) ;
        localStorage.setItem(`${key}`, stringifiedObj);
    }

    const updateTaskListDOM = () => {
        const taskList = document.getElementById('container')
        let currentList = localStorage.getItem("todoList");
        let parseObj = JSON.parse(currentList);

        let priorityValue = getPriorityValue();
        
        taskList.innerHTML = "";

        for(let i = 0; i < parseObj.length; i++){
            const taskCard = document.createElement('div');

            taskCard.innerHTML = 
            `<div>
                <input class="checkbox" type="checkbox">
                <span class = "title">${parseObj[i].title}</span>
                <button class="details">details</button>
                <span class="date">${parseObj[i].date}</span>
                <span class="priority">${priorityValue}</span>
                <button class="edit">edit</button>
                <button class="delete">delete</button>
            </div>`;
            taskList.appendChild(taskCard);
            const deleteButton = document.querySelector('.delete');
            deleteButton.onclick = function(){
                const collection = taskCard.children;
                console.log(collection[i]);
                taskCard.removeChild(collection[i]);
            }
        }
    }
    const deleteTask = () => {
        
    }
}

export default taskForm;