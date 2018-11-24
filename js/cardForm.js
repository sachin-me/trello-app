function cardForm() {
  var form = createNode('form');
  form.innerHTML = `
    <input type="text" class="card-text" />
    <button class="card-submit">Submit</button>
  `;
  form.style.display = 'none';
  return form;
}