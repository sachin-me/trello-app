class List {
  constructor(board, title, index, dummyList) {
    this.board = board;
    this.title = title;
    this.index = index;
    this.node = createNode('div');
    this.node.classList.add('list');
    this.titleNode = createNode('h3');
    this.titleNode.classList.add('list-title');
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode);
  }
}