import homePage from "./home.js";
import todo from "./todo.js";

const todo1 = new todo('movie', 'movie at centre square mall', '20/09/2023', 'high');
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


homePage();