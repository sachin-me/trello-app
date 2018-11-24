class Card {
  constructor(list, title) {
    this.list = list;
    this.title = title;
    this.cardId = list.getNextId();
    this.node = createNode('div');
    this.node.classList.add('card');
    this.titleNode = createNode('h5');
    this.titleNode.classList.add('card-text-value');
    this.titleNode.innerHTML = this.title;
    this.node.setAttribute('data-id', this.cardId);
    this.node.appendChild(this.titleNode);
  }
}