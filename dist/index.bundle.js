"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import todo from "./todo";

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
    // let selectedValue = "";

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
    priorityContent.appendChild(lowInput);
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute('for','Low');
    lowLabel.textContent = "Low";
    // lowInput.onclick = function(){
    //     getPriorityValue()
    //     console.log(`Selected Priority: ${selectedValue}`);
    // }
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
    // mediumInput.onclick = function(){
    //     getPriorityValue()
    // }
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
    // highInput.onclick = function(){
    //     getPriorityValue()
    // }


    priorityContent.appendChild(highLabel);

    footerContent.appendChild(priorityContent);

    //submit
    const submitContent = document.createElement('div');
    submitContent.classList.add('submit-content');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'submit';

    submitButton.onclick = function(){
        // Assuming that the radio buttons share the same 'name' attribute, in this case, 'priority'.
        const selectedPriority = document.querySelector('input[name="priority"]:checked');
    
        if (selectedPriority) {
        // If a radio button is selected, its value can be retrieved using the 'value' property.
        const selectedValue = selectedPriority.value;
        console.log(`Selected Priority: ${selectedValue}`);
        return;
        } else {
        console.log('No priority selected.'); // Handle the case where no radio button is selected.
        }
        // console.log(selectedValue);
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
        
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskForm);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./src/form.js");


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
        (0,_form_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



const todo1 = new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('movie', 'movie at centre square mall', '20/09/2023', 'high');
console.log(todo1);

const stringifiedObj = JSON.stringify(todo1) ;

localStorage.setItem('todo list', stringifiedObj);

const selectedPriority = document.querySelector('input[name="priority"]:checked');

// if (selectedPriority) {
//   // If a radio button is selected, its value can be retrieved using the 'value' property.
//   const selectedValue = selectedPriority.value;
//   console.log(`Selected Priority: ${selectedValue}`);
// } else {
//   console.log('No priority selected.'); // Handle the case where no radio button is selected.
// }


(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todo)
/* harmony export */ });

class todo{
    todo = []
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    createToDoList(){
        this.todo.push(todo);
    }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLFVBQVU7QUFDViw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQzFLUzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7O0FDcEJVO0FBQ0o7O0FBRTdCLGtCQUFrQixnREFBSTtBQUN0Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsY0FBYztBQUNyRCxLQUFLO0FBQ0wsMkNBQTJDO0FBQzNDOzs7QUFHQSxvREFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCB0YXNrRm9ybSA9ICgpID0+e1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyBcbiAgICAgXG4gICAgLy9mdWxsIHNjcmVlblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pZCA9ICdteU1vZGFsJztcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgLy9tb2RhbCBzY3JlZW5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbiAgICAvL2Nsb3NlIGJ1dHRvbiBvbiBtb2RhbFxuICAgIGNvbnN0IGNsb3NlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjbG9zZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgICBjbG9zZUVsZW1lbnQudGV4dENvbnRlbnQgPSAn4pyVJztcbiAgICBjbG9zZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUVsZW1lbnQpO1xuICAgIFxuICAgIC8vZm9ybVxuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvRG9Gb3JtLmFjdGlvbiA9ICcjJztcbiAgICB0b0RvRm9ybS5tZXRob2QgPSAncG9zdCc7XG4gICAgXG4gICAgLy90aXRsZVxuICAgIGNvbnN0IHRpdGxlVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRpdGxlVGV4dGFyZWEuY29scyA9IFwiMTAwXCJcbiAgICB0aXRsZVRleHRhcmVhLm1heExlbmd0aCA9IFwiNDBcIjtcbiAgICB0aXRsZVRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJ0aXRsZVwiXG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVUZXh0YXJlYSk7XG5cbiAgICAvL2RldGFpbHNcbiAgICBjb25zdCBkZXRhaWxUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGV0YWlsVGV4dGFyZWEuY29scyA9IFwiMTAwXCJcbiAgICBkZXRhaWxUZXh0YXJlYS5yb3dzID0gXCIxMFwiXG4gICAgZGV0YWlsVGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcImRldGFpbHNcIlxuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGRldGFpbFRleHRhcmVhKTtcblxuICAgIC8vZGF0ZVxuICAgIGNvbnN0IGRhdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhdGVMYWJlbC5mb3IgPSAnZGF0ZSc7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOiAgJztcbiAgICBkYXRlQ29udGVudC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAnZGF0ZSc7XG4gICAgZGF0ZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChkYXRlQ29udGVudCk7XG5cbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250ZW50Jyk7XG5cbiAgICAvL3ByaW9yaXR5IGlucHV0IHJhZGlvXG4gICAgLy8gbGV0IHNlbGVjdGVkVmFsdWUgPSBcIlwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuZm9yID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAgJztcbiAgICBwcmlvcml0eUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBsb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbG93SW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbG93SW5wdXQuaWQgPSAnTG93JztcbiAgICBsb3dJbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBsb3dJbnB1dC52YWx1ZSA9ICdsb3cnO1xuICAgIHByaW9yaXR5Q29udGVudC5hcHBlbmRDaGlsZChsb3dJbnB1dCk7XG4gICAgY29uc3QgbG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxvd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnTG93Jyk7XG4gICAgbG93TGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIC8vIGxvd0lucHV0Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIC8vICAgICBnZXRQcmlvcml0eVZhbHVlKClcbiAgICAvLyAgICAgY29uc29sZS5sb2coYFNlbGVjdGVkIFByaW9yaXR5OiAke3NlbGVjdGVkVmFsdWV9YCk7XG4gICAgLy8gfVxuICAgIHByaW9yaXR5Q29udGVudC5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG5cblxuICAgIGNvbnN0IG1lZGl1bUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBtZWRpdW1JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBtZWRpdW1JbnB1dC5pZCA9ICdNZWRpdW0nO1xuICAgIG1lZGl1bUlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIG1lZGl1bUlucHV0LnZhbHVlID0gJ21lZGl1bSc7XG4gICAgcHJpb3JpdHlDb250ZW50LmFwcGVuZENoaWxkKG1lZGl1bUlucHV0KTtcbiAgICBjb25zdCBtZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdNZWRpdW0nKTtcbiAgICBtZWRpdW1MYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgLy8gbWVkaXVtSW5wdXQub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGdldFByaW9yaXR5VmFsdWUoKVxuICAgIC8vIH1cbiAgICBwcmlvcml0eUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVkaXVtTGFiZWwpO1xuXG4gICAgY29uc3QgaGlnaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWdoSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgaGlnaElucHV0LmlkID0gJ0hpZ2gnO1xuICAgIGhpZ2hJbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBoaWdoSW5wdXQudmFsdWUgPSAnaGlnaCc7XG4gICAgcHJpb3JpdHlDb250ZW50LmFwcGVuZENoaWxkKGhpZ2hJbnB1dCk7XG4gICAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBoaWdoTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdIaWdoJyk7XG4gICAgaGlnaExhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgLy8gaGlnaElucHV0Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIC8vICAgICBnZXRQcmlvcml0eVZhbHVlKClcbiAgICAvLyB9XG5cblxuICAgIHByaW9yaXR5Q29udGVudC5hcHBlbmRDaGlsZChoaWdoTGFiZWwpO1xuXG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRlbnQpO1xuXG4gICAgLy9zdWJtaXRcbiAgICBjb25zdCBzdWJtaXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VibWl0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY29udGVudCcpO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnc3VibWl0JztcblxuICAgIHN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gQXNzdW1pbmcgdGhhdCB0aGUgcmFkaW8gYnV0dG9ucyBzaGFyZSB0aGUgc2FtZSAnbmFtZScgYXR0cmlidXRlLCBpbiB0aGlzIGNhc2UsICdwcmlvcml0eScuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpO1xuICAgIFxuICAgICAgICBpZiAoc2VsZWN0ZWRQcmlvcml0eSkge1xuICAgICAgICAvLyBJZiBhIHJhZGlvIGJ1dHRvbiBpcyBzZWxlY3RlZCwgaXRzIHZhbHVlIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlICd2YWx1ZScgcHJvcGVydHkuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFByaW9yaXR5LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgUHJpb3JpdHk6ICR7c2VsZWN0ZWRWYWx1ZX1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gcHJpb3JpdHkgc2VsZWN0ZWQuJyk7IC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBubyByYWRpbyBidXR0b24gaXMgc2VsZWN0ZWQuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgc3VibWl0Q29udGVudC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChzdWJtaXRDb250ZW50KTtcblxuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcbiAgICBcbiAgICAvL3doZW4gY2xpY2sgb24gd2luZG93IGNsb3NlIHRoZSBtb2RhbFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHlWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgdGFza0Zvcm07IiwiaW1wb3J0IHRhc2tGb3JtIGZyb20gXCIuL2Zvcm0uanNcIlxuXG5jb25zdCBob21lUGFnZSA9ICgpID0+e1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdob21lUGFnZUhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1RvLWRvIExpc3QnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnV0dG9uJyk7XG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICcrIEFkZCBhIFRhc2snO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICBhZGRUYXNrLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGFza0Zvcm0oKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5jb25zdCB0b2RvMSA9IG5ldyB0b2RvKCdtb3ZpZScsICdtb3ZpZSBhdCBjZW50cmUgc3F1YXJlIG1hbGwnLCAnMjAvMDkvMjAyMycsICdoaWdoJyk7XG5jb25zb2xlLmxvZyh0b2RvMSk7XG5cbmNvbnN0IHN0cmluZ2lmaWVkT2JqID0gSlNPTi5zdHJpbmdpZnkodG9kbzEpIDtcblxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8gbGlzdCcsIHN0cmluZ2lmaWVkT2JqKTtcblxuY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyk7XG5cbi8vIGlmIChzZWxlY3RlZFByaW9yaXR5KSB7XG4vLyAgIC8vIElmIGEgcmFkaW8gYnV0dG9uIGlzIHNlbGVjdGVkLCBpdHMgdmFsdWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGUgJ3ZhbHVlJyBwcm9wZXJ0eS5cbi8vICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkUHJpb3JpdHkudmFsdWU7XG4vLyAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBQcmlvcml0eTogJHtzZWxlY3RlZFZhbHVlfWApO1xuLy8gfSBlbHNlIHtcbi8vICAgY29uc29sZS5sb2coJ05vIHByaW9yaXR5IHNlbGVjdGVkLicpOyAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgbm8gcmFkaW8gYnV0dG9uIGlzIHNlbGVjdGVkLlxuLy8gfVxuXG5cbmhvbWVQYWdlKCk7IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b2Rve1xuICAgIHRvZG8gPSBbXVxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBjcmVhdGVUb0RvTGlzdCgpe1xuICAgICAgICB0aGlzLnRvZG8ucHVzaCh0b2RvKTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==