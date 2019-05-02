function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  var toDos = JSON.parse(localStorage.getItem('forstorage'));
  let id = 0;

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const delete_button = document.createElement('button');
      delete_button.textContent = "Delete";

      delete_button.addEventListener('click', event => {
        toDos = toDos.filter(function(item) {
          return item.id !== toDo.id;
        })
        window.localStorage.setItem('forstorage', JSON.stringify(toDos));
        renderTheUI();
      });
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delete_button);
    })
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++;

    //localStorage
    window.localStorage.setItem('forstorage', JSON.stringify(toDos));


    //
    newToDoText.value = '';
    renderTheUI();
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
};
