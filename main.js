let createBoard = document.querySelector('.board');
let listBtn = document.querySelector('.list-btn');
let form = document.querySelector('.form');
let ulList = document.querySelector('.input-list');
let ul = document.querySelector('section');
let ol = document.querySelector('ol');
let edit = document.querySelector('.edit-btn');


// Board starts here

class Board {
  constructor(name) {
    this.name = name;
    this.id = 0;
    this.arrList = [];
  }
  displayBoard() {
    return createBoard.innerText = `${this.name}`;
  }
}

// Lists starts here

class List extends Board {
  constructor(name, listName) {
    super(name);
    this.listName = listName;
  }
  createList() {
    ul.innerHTML = '';
    console.log('createList')
    const inputName = (document.querySelector('.input-list')).value;
    let listContainer = {
      inputName,
      name: this.name
    }
    if (!(document.querySelector('.input-list')).value) return;
    this.arrList.push(listContainer);
    this.displayList(this.arrList, ul);
    (document.querySelector('.input-list')).value = '';
  }
  displayList(items = [], displayItem) {
    displayItem.innerHTML += items.map((element, i) => {
      return `
        <div class="todo" data-id="${i}">
        <div>${this.arrList[i].inputName}</div>
          <input type="text" data-id="${i}" placeholder="Add a card ..." class="card-input" id="x"></input>
          <button class="card-btn" data-id="${i}">Submit</button>
          <div class="card-div"></div>
        </div>
      `
    }).join('');
  }
}

// Card Starts here

class Card extends List {
  constructor(listName, cardName) {
    super(listName);
    this.cardName = cardName;
    this.todoList = [];
  }
  createToDo(e) {
    ol.innerHTML = '';
    let todoItem;
    const id = e.target.dataset.id;
    let value = '';
    const todoValue = document.querySelectorAll('.card-input');
    todoValue.forEach(t => {
      if(t.dataset.id === id) {
        value = t
      }
      if (!t) return;
    })
    todoItem = {
      todoValue : value.value,
      done: false
    }
    this.todoList.push(todoItem);
    this.displayToDo(this.todoList, ol);
  }
  displayToDo(lists = [], itemsList) {
    itemsList.innerHTML += lists.map((ele, i) => {
      return `
        <li class="todolist-item" data-id="${i}">${lists[i].todoValue}</li>
        <button class="edit-btn" id="edit" data-id="${i}">Edit</button>
        <button class="delete-btn" id="delete" data-id="${i}">Delete</button>
      `
    }).join('');
  }
  // editList(e) {
  //   console.log(e);
  //   if (e.target.id.contains('edit-btn')) {
  //     let id = e.target.dataset.id;
  //     let item = e.target.parentElement;
  //     item.innerHTML = `
  //     <form class="edit-form">
  //       <input type="text" class="editValue" id="${id}" required>
  //       <button id="submit-edit-val">Submit</button>
  //     </form>`;
  //   }
  //   if(e.target.id === 'submit-edit-val') {
  //     const editVal = document.querySelector('.editValue')
  //     this.todoList[editVal.id].name = editVal.value;
  //     if(!editVal.value) return;
  //     this.displayToDo(this.todoList, ol);
  //   }
  // }
  // deleteList(e) {
  //   console.log(e);
  //   if (e.target.classList.contains('delete-btn')) {
  //     let id = e.target.dataset.id;
  //     this.todoList.splice(id, 1);
  //     this.displayToDo(this.todoList, ol);
  //   }
  // }
}

var b1 = new Card('New Board');
b1.displayBoard();
console.log(b1);

form.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('list-btn')) {
    b1.createList();
    b1.displayList(this.arrList, ul);
  }
});

ul.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('card-btn')) {
    b1.createToDo(e);
    let id = e.target.dataset.id;
    console.log(id);
  }
})

ol.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('edit-btn')) {
    console.log('Hi');
    b1.editList();
  }
  if (e.target.classList.contains('delete-btn')) {
    console.log('Hello');
    b1.deleteList();
  }
})
