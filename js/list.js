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

    this.cardNodes = createNode('div');
    this.cardNodes.classList.add('cards')

    if (!dummyList) {
      this.cards = [new Card(this, 'Add new card...')];
      console.log(this.cards);
      this.cardForm = cardForm();
      this.cards[this.cards.length - 1].node.appendChild(this.cardForm);
      this.cards.forEach(card => {
        this.cardNodes.appendChild(card.node);
        console.log(card.node);
      })
      this.node.appendChild(this.cardNodes);
      this.cards[this.cards.length - 1].node.addEventListener('click', () => addCard(this));
    }
  }
}