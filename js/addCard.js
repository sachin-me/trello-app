function addCard(list) {
  list.cardForm.style.display = 'block';
  const cardText = list.cardNodes.querySelector('.card-text')
      , cardSubmit = list.cardNodes.querySelector('.card-submit');
  cardSubmit.onclick = addNewCard;
  function addNewCard(e){
    e.preventDefault();
    let title = cardText.value
        , card;
    card = new Card(list, title);
    cardText.value = "";
    list.cardNodes.insertBefore(card.node, list.cards[list.cards.length - 1].node);
  }
}