function addTodo() {
    const inputEl = document.getElementById("inp");
    const textNode = document.createElement("div");
    textNode.innerHTML = inputEl.value;
    const parentEl = document.getElementById("todos");
    parentEl.appendChild(textNode);

  }

  function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
  }

  //if we want to print the second h4 element in increasing order 

// let i = 0;
// function callback(){
//     document.querySelectorAll("h4")[1].innerHTML = i;
//     i++;
// }

// setInterval(callback, 1000);