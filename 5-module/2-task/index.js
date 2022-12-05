function toggleText() {
  let toggle = document.querySelector('.toggle-text-button')
  toggle.addEventListener('click', () => text.hidden = text.hidden ? false : true)
}
