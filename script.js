const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const trashIcon = document.getElementById("trash");

function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something....");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value.trim();
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }

    inputBox.value = "";
    inputBox.focus();
    saveData();
}
 listContainer.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();
