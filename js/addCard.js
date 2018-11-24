function addCard(list) {
  list.cardForm.style.display = 'block';
  const cardText = list.cardNodes.querySelector('.card-text')
      , cardSubmit = list.cardNodes.querySelector('.card-submit');
  cardSubmit.onclick = addNewCard;
  function addNewCard(e){
    e.preventDefault();
    let title = `
      ${cardText.value}
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
      `
      , card;
    card = new Card(list, title);
    cardText.value = "";
    list.cardNodes.insertBefore(card.node, list.cards[list.cards.length - 1].node);
    console.log(title);
  }
  let listNode = document.querySelector('.card');
  let CardTextValue = document.querySelector('.card-text-value'); 
}

function deleteBtn(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  }
}

function editBtn(e) {
  e.preventDefault();
  if (e.target.classList.contains('edit-btn')) {
    let item = e.target.parentElement;
    item.innerHTML = `
    <form class="edit-form">
      <input type="text" class="editValue" required>
      <button id="submit-edit-val">Submit</button>
    </form>`;

    let submitValue = document.querySelector('#submit-edit-val');
    console.log(submitValue);
    submitValue.addEventListener('click', function(e) {
      if(e.target.id == 'submit-edit-val') {
        const editVal = document.querySelector('.editValue')
        console.log(editVal);
        let editCard = editVal.value;
        let editCardValue = `
          ${editCard}
          <button class="delete-btn">Delete</button>
          <button class="edit-btn">Edit</button>
        `;
        item.innerHTML = editCardValue;
        if(!editVal.value) return;
      }
    })
    console.log(item);
  }
}