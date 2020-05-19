document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('submit-button').addEventListener('click', function(e){
    e.preventDefault();
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    const taskDescription = document.getElementById('new-task-description');
    li.innerText = taskDescription;
    ul.appendChild(li);
  });
});
