let todo = JSON.parse(localStorage.getItem("todo")) ||[];
// 

let create = document.getElementById("create");
let showList = document.getElementById("showList");

let input_todo = document.getElementById("inputTodo");
let input_id = document.getElementById("inputId");
let input_search = document.getElementById("inputSearch");
let input_date = document.getElementById("inputDate");

let title = document.getElementById("title");
let userName = document.getElementById('dropdownMenuButton1');

let btnEdit = document.querySelectorAll(".edit");
let btnDelete = document.querySelectorAll(".delete");
let sample = document.querySelectorAll(".sample");

loadList(todo);
initializeEvent();
displayUser();

function addList(list) {
//   let lists = {
//     id: generateId(),
//     input: list,
//     date: date
//   };

  if (input_todo === "") {
    alert("No Input");
    return;
  }

  if(list.id == 0){
    list.id = generateId();

    todo.push(list);
    localStorage.setItem("todo", JSON.stringify(todo));
    saveStorage();
  }else{
    let createIndex = todo.findIndex((x) => x.id == list.id);

    todo[createIndex].input = list.input;
    todo[createIndex].date = list.date;
  }
}

function editList(id) {
  let editList = todo.findIndex((x) => x.id == id);

  input_id.value = todo[editList].id;
  input_todo.value = todo[editList].input;
  input_date.value = todo[editList].date;
  //console.log((input_todo.value = todo[editList].input));
}

function deleteList(id){
	let deleteList = todo.findIndex((x) => x.id == id);
	todo.splice(deleteList, 1);
	loadList(todo);
}

function searchTask(textSearch){
    return todo.filter(function (obj) {
		return (
			obj.input.toLowerCase().includes(textSearch.toLowerCase()) ||
            obj.date.toLowerCase().includes(textSearch.toLowerCase()) ||
            obj.id.toLowerCase().includes(textSearch.toLowerCase())
		);
	});
}

function loadList(data) {
  showList.innerHTML = "";
  let addList = "";
  for (let lists of data) {
    addList += `
            <tr>
                <td class="sample">${lists.id}</td>
                <td class="sample">${lists.input}</td>
                <td class="sample">${lists.date}</td>
                <td>
                    <button class="btn btn-sm btn-success edit" data-id='${lists.id}' value="Edit">Edit</button>
                    <button class="btn btn-sm btn-danger delete" data-id='${lists.id}' value="Delete">Delete</button>
                </td.
            </tr>
        `;
  }

  showList.innerHTML = addList;

  btnEdit = document.querySelectorAll(".edit");
  btnDelete = document.querySelectorAll(".delete");
  sample = document.querySelectorAll("#sample");

  for (let edit of btnEdit) {
    edit.addEventListener("click", () => {
      //   if (edit.textContent == "Save") {
      //     edit.textContent = "Edit";
      //     let id = edit.dataset.id;
      //     editList(id);
      //     loadList(todo);
      //   }
      //   if (edit.textContent == "Edit") {
      //     edit.textContent = "Save";
      //     let id = edit.dataset.id;
      //     editList(id);
      //   }
      
      let id = edit.dataset.id;
      editList(id);

    });
  }

  for (let deleted of btnDelete) {
    deleted.addEventListener("click", () => {
      let id = deleted.dataset.id;
      deleteList(id);
    });
  }
}

function initializeEvent() {
  input_search.addEventListener("input", ()=> {
    
    let textSearch = input_search.value;
    console.log(textSearch)
    let data = searchTask(textSearch);
    loadList(data);
  })

  create.addEventListener("click", () => {
    // input_todo = document.getElementById("inputTodo");
    // input_id = document.getElementById("inputId");
    // input_date = document.getElementById("inputDate");

    let listTodo = {
      id: input_id.value,
      input: input_todo.value,
      date: input_date.value
    };

    addList(listTodo);
    loadList(todo);
  });
}

function generateId() {
  let id;
  do {
    id = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
  } while (localStorage.getItem(id)); // Check if ID already exists in localStorage
  return id;
}

function saveChangesToStorage(){
    if (localStorage.getItem("todo") === null)
        localStorage.setItem('todo', "");

    let _user = JSON.stringify(todo);
    localStorage.setItem('todo', _user);
}

function displayUser(){
  userName = document.getElementById('dropdownMenuButton1');
  let user = localStorage.getItem('Username');
  
  userName.innerHTML = `
    <span><i class="fa fa-user" aria-hidden="true"></i>  ${user}</span>
  `;
  console.log(user);
}