

const taskForm = () =>{
    const content = document.getElementById('content'); 

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'myModal';
    modal.style.display = "block";

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const closeElement = document.createElement('span');
    closeElement.classList.add('close');
    closeElement.textContent = '✕';
    closeElement.onclick = function() {
        modal.style.display = "none";
    }
    modalContent.appendChild(closeElement);
    
    const toDoForm = document.createElement('form');
    toDoForm.action = '#';
    toDoForm.method = 'post';
    
    const titleTextarea = document.createElement('textarea');
    titleTextarea.cols = "100"
    titleTextarea.maxLength = "40";
    titleTextarea.placeholder = "title"
    toDoForm.appendChild(titleTextarea);

    const detailTextarea = document.createElement('textarea');
    detailTextarea.cols = "100"
    detailTextarea.rows = "10"
    detailTextarea.placeholder = "details"
    toDoForm.appendChild(detailTextarea);

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

    

    modalContent.appendChild(toDoForm);

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    content.appendChild(modal);
}

export default taskForm;