let form = document.getElementById("form");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let text = input.value;

    if (text === "") return;
    let li = document.createElement("li");
    li.textContent = text;
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = function () {
        li.classList.toggle("done");
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
});

