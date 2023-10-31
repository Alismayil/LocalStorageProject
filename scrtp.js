let inputSend = document.querySelector("#inputSend");
let toDoSend = document.querySelector("#toDoSend");
const body = document.querySelector("body");
let toDoListDown = document.querySelector(".toDoList_down");
let clear = document.querySelector("#clear");
let arr = [];

if (JSON.parse(localStorage.getItem("data"))) {
  arr = JSON.parse(localStorage.getItem("data"));
  arr.forEach((element) => {
    let EditBtn = document.createElement("button");
    let toDoListText = document.createElement("div");
    let check = document.createElement("input");
    toDoListText.classList.add("toDoListText");

    check.type = "checkbox";
    toDoListText.textContent = element;
    EditBtn.textContent = "Edit";

    toDoListText.append(check);
    check.addEventListener("click", () => {
      toDoListText.classList.toggle("Check_line");
    });
    toDoListDown.append(toDoListText);
    body.append(toDoListDown);
    toDoListText.append(EditBtn);
  });
}
clear.addEventListener("click", () => {
  localStorage.clear();
});

toDoSend.addEventListener("click", () => {
  arr.push(inputSend.value);

  localStorage.setItem("data", JSON.stringify(arr));

  let EditBtn = document.createElement("button");
  let toDoListText = document.createElement("div");
  let check = document.createElement("input");
  toDoListText.classList.add("toDoListText");

  check.type = "checkbox";
  toDoListText.textContent = inputSend.value;
  EditBtn.textContent = "Edit";

  check.addEventListener("click", () => {
    toDoListText.classList.toggle("Check_line");
  });

  toDoListText.append(check);
  toDoListText.append(EditBtn);
  toDoListDown.append(toDoListText);
  body.append(toDoListDown);

  inputSend.value = "";
});

document.body.addEventListener("keypress",function (e) {
    if (e.key==="Enter") {
        toDoSend.click()
    }
})
