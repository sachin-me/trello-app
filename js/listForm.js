function listForm() {
  var form = createNode('form');
  form.innerHTML = `
    <input type="text" class="list-text" />
    <button class="list-submit">Submit</button>
  `;
  form.style.display = 'none';
  return form;
}