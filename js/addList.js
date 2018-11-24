function addList(board) {
  board.listForm.style.display = 'block';
  const listValue = document.querySelector('.list-text')
      , listSubmit = document.querySelector('.list-submit');
  listSubmit.onclick = addNewList;
  function addNewList(e){
    e.preventDefault();
    let value = listValue.value
        , index = board.lists.length - 1
        , list;
    if(value){
      list = new List(board, value, index);
      board.lists.splice(index, 0, list);
      board.listNodes.insertBefore(list.node, board.lists[index + 1].node);
      listValue.value = "";
    }
  }
}