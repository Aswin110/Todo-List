

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
    const toDoForm = document.createElement('form');
    toDoForm.action = '#';
    toDoForm.method = 'post';
    
    //title
    const titleTextarea = document.createElement('textarea');
    titleTextarea.cols = "100"
    titleTextarea.maxLength = "40";
    titleTextarea.placeholder = "title"
    toDoForm.appendChild(titleTextarea);

    //details
    const detailTextarea = document.createElement('textarea');
    detailTextarea.cols = "100"
    detailTextarea.rows = "10"
    detailTextarea.placeholder = "details"
    toDoForm.appendChild(detailTextarea);

    //date
    const dateContent = document.createElement('div');
    dateContent.classList.add('date-content');

    const dateLabel = document.createElement('label');
    dateLabel.for = 'date';
    dateLabel.textContent = 'Due date:  ';
    dateContent.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'date';
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
    priorityContent.appendChild(lowInput);
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute('for','Low');
    lowLabel.textContent = "Low";
    priorityContent.appendChild(lowLabel);

    const mediumInput = document.createElement('input');
    mediumInput.type = 'radio';
    mediumInput.id = 'Medium';
    mediumInput.name = 'priority';
    priorityContent.appendChild(mediumInput);
    const mediumLabel = document.createElement('label');
    mediumLabel.setAttribute('for','Medium');
    mediumLabel.textContent = "Medium";
    priorityContent.appendChild(mediumLabel);

    const highInput = document.createElement('input');
    highInput.type = 'radio';
    highInput.id = 'High';
    highInput.name = 'priority';
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
}

export default taskForm;