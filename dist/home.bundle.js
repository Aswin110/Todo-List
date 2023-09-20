"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["home"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsVUFBVTtBQUNWLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDMUtTOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQjtBQUNBOztBQUVBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgdGFza0Zvcm0gPSAoKSA9PntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTsgXG4gICAgIFxuICAgIC8vZnVsbCBzY3JlZW5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaWQgPSAnbXlNb2RhbCc7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIC8vbW9kYWwgc2NyZWVuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gICAgLy9jbG9zZSBidXR0b24gb24gbW9kYWxcbiAgICBjb25zdCBjbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2xvc2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gICAgY2xvc2VFbGVtZW50LnRleHRDb250ZW50ID0gJ+KclSc7XG4gICAgY2xvc2VFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VFbGVtZW50KTtcbiAgICBcbiAgICAvL2Zvcm1cbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b0RvRm9ybS5hY3Rpb24gPSAnIyc7XG4gICAgdG9Eb0Zvcm0ubWV0aG9kID0gJ3Bvc3QnO1xuICAgIFxuICAgIC8vdGl0bGVcbiAgICBjb25zdCB0aXRsZVRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0aXRsZVRleHRhcmVhLmNvbHMgPSBcIjEwMFwiXG4gICAgdGl0bGVUZXh0YXJlYS5tYXhMZW5ndGggPSBcIjQwXCI7XG4gICAgdGl0bGVUZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwidGl0bGVcIlxuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlVGV4dGFyZWEpO1xuXG4gICAgLy9kZXRhaWxzXG4gICAgY29uc3QgZGV0YWlsVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRldGFpbFRleHRhcmVhLmNvbHMgPSBcIjEwMFwiXG4gICAgZGV0YWlsVGV4dGFyZWEucm93cyA9IFwiMTBcIlxuICAgIGRldGFpbFRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJkZXRhaWxzXCJcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChkZXRhaWxUZXh0YXJlYSk7XG5cbiAgICAvL2RhdGVcbiAgICBjb25zdCBkYXRlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RhdGUtY29udGVudCcpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuZm9yID0gJ2RhdGUnO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogICc7XG4gICAgZGF0ZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZUlucHV0LmlkID0gJ2RhdGUnO1xuICAgIGRhdGVDb250ZW50LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgXG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUNvbnRlbnQpO1xuXG4gICAgLy9mb290ZXJcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xuXG4gICAgLy9wcmlvcml0eSBpbnB1dCByYWRpb1xuICAgIC8vIGxldCBzZWxlY3RlZFZhbHVlID0gXCJcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5Q29udGVudC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLmZvciA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC5pZCA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogICc7XG4gICAgcHJpb3JpdHlDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgY29uc3QgbG93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxvd0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGxvd0lucHV0LmlkID0gJ0xvdyc7XG4gICAgbG93SW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgbG93SW5wdXQudmFsdWUgPSAnbG93JztcbiAgICBwcmlvcml0eUNvbnRlbnQuYXBwZW5kQ2hpbGQobG93SW5wdXQpO1xuICAgIGNvbnN0IGxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ0xvdycpO1xuICAgIGxvd0xhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAvLyBsb3dJbnB1dC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgZ2V0UHJpb3JpdHlWYWx1ZSgpXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBQcmlvcml0eTogJHtzZWxlY3RlZFZhbHVlfWApO1xuICAgIC8vIH1cbiAgICBwcmlvcml0eUNvbnRlbnQuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuXG5cbiAgICBjb25zdCBtZWRpdW1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbWVkaXVtSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgbWVkaXVtSW5wdXQuaWQgPSAnTWVkaXVtJztcbiAgICBtZWRpdW1JbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBtZWRpdW1JbnB1dC52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIHByaW9yaXR5Q29udGVudC5hcHBlbmRDaGlsZChtZWRpdW1JbnB1dCk7XG4gICAgY29uc3QgbWVkaXVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG1lZGl1bUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnTWVkaXVtJyk7XG4gICAgbWVkaXVtTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIC8vIG1lZGl1bUlucHV0Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIC8vICAgICBnZXRQcmlvcml0eVZhbHVlKClcbiAgICAvLyB9XG4gICAgcHJpb3JpdHlDb250ZW50LmFwcGVuZENoaWxkKG1lZGl1bUxhYmVsKTtcblxuICAgIGNvbnN0IGhpZ2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlnaElucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIGhpZ2hJbnB1dC5pZCA9ICdIaWdoJztcbiAgICBoaWdoSW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgaGlnaElucHV0LnZhbHVlID0gJ2hpZ2gnO1xuICAgIHByaW9yaXR5Q29udGVudC5hcHBlbmRDaGlsZChoaWdoSW5wdXQpO1xuICAgIGNvbnN0IGhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaGlnaExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnSGlnaCcpO1xuICAgIGhpZ2hMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIC8vIGhpZ2hJbnB1dC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgZ2V0UHJpb3JpdHlWYWx1ZSgpXG4gICAgLy8gfVxuXG5cbiAgICBwcmlvcml0eUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcblxuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250ZW50KTtcblxuICAgIC8vc3VibWl0XG4gICAgY29uc3Qgc3VibWl0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1Ym1pdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ3N1Ym1pdCc7XG5cbiAgICBzdWJtaXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIEFzc3VtaW5nIHRoYXQgdGhlIHJhZGlvIGJ1dHRvbnMgc2hhcmUgdGhlIHNhbWUgJ25hbWUnIGF0dHJpYnV0ZSwgaW4gdGhpcyBjYXNlLCAncHJpb3JpdHknLlxuICAgICAgICBjb25zdCBzZWxlY3RlZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKTtcbiAgICBcbiAgICAgICAgaWYgKHNlbGVjdGVkUHJpb3JpdHkpIHtcbiAgICAgICAgLy8gSWYgYSByYWRpbyBidXR0b24gaXMgc2VsZWN0ZWQsIGl0cyB2YWx1ZSBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZSAndmFsdWUnIHByb3BlcnR5LlxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coYFNlbGVjdGVkIFByaW9yaXR5OiAke3NlbGVjdGVkVmFsdWV9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHByaW9yaXR5IHNlbGVjdGVkLicpOyAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgbm8gcmFkaW8gYnV0dG9uIGlzIHNlbGVjdGVkLlxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpO1xuICAgIH1cblxuICAgIHN1Ym1pdENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0Q29udGVudCk7XG5cbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcblxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b0RvRm9ybSk7XG4gICAgXG4gICAgLy93aGVuIGNsaWNrIG9uIHdpbmRvdyBjbG9zZSB0aGUgbW9kYWxcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGdldFByaW9yaXR5VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGb3JtOyIsImltcG9ydCB0YXNrRm9ybSBmcm9tIFwiLi9mb3JtLmpzXCJcblxuY29uc3QgaG9tZVBhZ2UgPSAoKSA9PntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaG9tZVBhZ2VIZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdUby1kbyBMaXN0JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkVGFza0J1dHRvbicpO1xuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgYSBUYXNrJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgYWRkVGFzay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRhc2tGb3JtKCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9