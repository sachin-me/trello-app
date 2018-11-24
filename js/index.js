document.body.onload = function() {
  var board = new Board('Learning js');
  board.render();
  let mainContainer = document.querySelector('#main');
  mainContainer.appendChild(board.node);
  console.log(board);
}