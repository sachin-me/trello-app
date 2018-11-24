// class Boards {
//   constructor(title) {
//     this.title = title;
//     this.boardsArr = [];
//     this.boardsNode = document.querySelector('#main');
//     this.boardsChild = document.createElement('div');
//     this.boardsTitle = document.createElement('h2');
//     this.boardsTitle.innerText = title;
//     this.boardsChild.appendChild(this.boardsTitle);
//   }
//   render() {
//     this.boardsNode.appendChild(this.boardsChild);
//     this.boardsArr.push(this.boardsChild);
//   }
// }

// let b1 = new Boards('Create a new board');
// b1.render();
// console.log(b1);