"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["form"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/form.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsVUFBVTtBQUNWLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IHRhc2tGb3JtID0gKCkgPT57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IFxuICAgICBcbiAgICAvL2Z1bGwgc2NyZWVuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlkID0gJ215TW9kYWwnO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAvL21vZGFsIHNjcmVlblxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICAgIC8vY2xvc2UgYnV0dG9uIG9uIG1vZGFsXG4gICAgY29uc3QgY2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNsb3NlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgIGNsb3NlRWxlbWVudC50ZXh0Q29udGVudCA9ICfinJUnO1xuICAgIGNsb3NlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlRWxlbWVudCk7XG4gICAgXG4gICAgLy9mb3JtXG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9Eb0Zvcm0uYWN0aW9uID0gJyMnO1xuICAgIHRvRG9Gb3JtLm1ldGhvZCA9ICdwb3N0JztcbiAgICBcbiAgICAvL3RpdGxlXG4gICAgY29uc3QgdGl0bGVUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGl0bGVUZXh0YXJlYS5jb2xzID0gXCIxMDBcIlxuICAgIHRpdGxlVGV4dGFyZWEubWF4TGVuZ3RoID0gXCI0MFwiO1xuICAgIHRpdGxlVGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcInRpdGxlXCJcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZVRleHRhcmVhKTtcblxuICAgIC8vZGV0YWlsc1xuICAgIGNvbnN0IGRldGFpbFRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXRhaWxUZXh0YXJlYS5jb2xzID0gXCIxMDBcIlxuICAgIGRldGFpbFRleHRhcmVhLnJvd3MgPSBcIjEwXCJcbiAgICBkZXRhaWxUZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwiZGV0YWlsc1wiXG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsVGV4dGFyZWEpO1xuXG4gICAgLy9kYXRlXG4gICAgY29uc3QgZGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkYXRlLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGF0ZUxhYmVsLmZvciA9ICdkYXRlJztcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6ICAnO1xuICAgIGRhdGVDb250ZW50LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICdkYXRlJztcbiAgICBkYXRlQ29udGVudC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIFxuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGRhdGVDb250ZW50KTtcblxuICAgIC8vZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcblxuICAgIC8vcHJpb3JpdHkgaW5wdXQgcmFkaW9cbiAgICAvLyBsZXQgc2VsZWN0ZWRWYWx1ZSA9IFwiXCI7XG5cbiAgICBjb25zdCBwcmlvcml0eUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY29udGVudCcpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwuaWQgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICAnO1xuICAgIHByaW9yaXR5Q29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IGxvd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsb3dJbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBsb3dJbnB1dC5pZCA9ICdMb3cnO1xuICAgIGxvd0lucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIGxvd0lucHV0LnZhbHVlID0gJ2xvdyc7XG4gICAgcHJpb3JpdHlDb250ZW50LmFwcGVuZENoaWxkKGxvd0lucHV0KTtcbiAgICBjb25zdCBsb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbG93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdMb3cnKTtcbiAgICBsb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgLy8gbG93SW5wdXQub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGdldFByaW9yaXR5VmFsdWUoKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhgU2VsZWN0ZWQgUHJpb3JpdHk6ICR7c2VsZWN0ZWRWYWx1ZX1gKTtcbiAgICAvLyB9XG4gICAgcHJpb3JpdHlDb250ZW50LmFwcGVuZENoaWxkKGxvd0xhYmVsKTtcblxuXG4gICAgY29uc3QgbWVkaXVtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG1lZGl1bUlucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgIG1lZGl1bUlucHV0LmlkID0gJ01lZGl1bSc7XG4gICAgbWVkaXVtSW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgbWVkaXVtSW5wdXQudmFsdWUgPSAnbWVkaXVtJztcbiAgICBwcmlvcml0eUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVkaXVtSW5wdXQpO1xuICAgIGNvbnN0IG1lZGl1bUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtZWRpdW1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ01lZGl1bScpO1xuICAgIG1lZGl1bUxhYmVsLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICAvLyBtZWRpdW1JbnB1dC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgZ2V0UHJpb3JpdHlWYWx1ZSgpXG4gICAgLy8gfVxuICAgIHByaW9yaXR5Q29udGVudC5hcHBlbmRDaGlsZChtZWRpdW1MYWJlbCk7XG5cbiAgICBjb25zdCBoaWdoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZ2hJbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICBoaWdoSW5wdXQuaWQgPSAnSGlnaCc7XG4gICAgaGlnaElucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIGhpZ2hJbnB1dC52YWx1ZSA9ICdoaWdoJztcbiAgICBwcmlvcml0eUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGlnaElucHV0KTtcbiAgICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ0hpZ2gnKTtcbiAgICBoaWdoTGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAvLyBoaWdoSW5wdXQub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGdldFByaW9yaXR5VmFsdWUoKVxuICAgIC8vIH1cblxuXG4gICAgcHJpb3JpdHlDb250ZW50LmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG5cbiAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGVudCk7XG5cbiAgICAvL3N1Ym1pdFxuICAgIGNvbnN0IHN1Ym1pdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdzdWJtaXQnO1xuXG4gICAgc3VibWl0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAvLyBBc3N1bWluZyB0aGF0IHRoZSByYWRpbyBidXR0b25zIHNoYXJlIHRoZSBzYW1lICduYW1lJyBhdHRyaWJ1dGUsIGluIHRoaXMgY2FzZSwgJ3ByaW9yaXR5Jy5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJyk7XG4gICAgXG4gICAgICAgIGlmIChzZWxlY3RlZFByaW9yaXR5KSB7XG4gICAgICAgIC8vIElmIGEgcmFkaW8gYnV0dG9uIGlzIHNlbGVjdGVkLCBpdHMgdmFsdWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGUgJ3ZhbHVlJyBwcm9wZXJ0eS5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkUHJpb3JpdHkudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCBQcmlvcml0eTogJHtzZWxlY3RlZFZhbHVlfWApO1xuICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBwcmlvcml0eSBzZWxlY3RlZC4nKTsgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIG5vIHJhZGlvIGJ1dHRvbiBpcyBzZWxlY3RlZC5cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFZhbHVlKTtcbiAgICB9XG5cbiAgICBzdWJtaXRDb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdENvbnRlbnQpO1xuXG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG5cbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xuICAgIFxuICAgIC8vd2hlbiBjbGljayBvbiB3aW5kb3cgY2xvc2UgdGhlIG1vZGFsXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eVZhbHVlID0gKCkgPT4ge1xuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB0YXNrRm9ybTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=