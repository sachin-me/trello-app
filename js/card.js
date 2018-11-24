class Card {
  constructor(list, title) {
    this.list = list;
    this.title = title;
    this.node = createNode('div');
    this.node.classList.add('card');
    this.titleNode = createNode('h5');
    this.titleNode.classList.add('card-text-value');
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode);
  }
}