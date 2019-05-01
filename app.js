function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
     event.preventDefault();
     // get the text
   let title = newToDoText.value;
   // create a new li
   let newLi = document.createElement('li');

   // create a new input
   let checkbox = document.createElement('input');

   let deleteButton = document.createElement('button')
   // set the input's type to checkbox
   checkbox.type = "checkbox";

   deleteButton.textContent = "Delete";

   // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   // attach the li to the ul
   toDoList.appendChild(newLi);

   newLi.appendChild(deleteButton);
   //empty the input
    newToDoText.value = '';
      // Delete
  deleteButton.addEventListener('click', function () {
  toDoList.removeChild(newLi);
  });
 });
}
window.onload = function() {
  onReady();
};
