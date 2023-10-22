function imageSlider(picker) {
  let img = document.querySelector('.js-nutriboost');
  img.src = picker;
}
function changeBgColor(color) {
  const section = document.querySelector('.js-primary');
  section.style.background = color;
}
function changeAddOns(addons){
  const extra = document.querySelector('.js-addons');
  extra.src = addons;
}
function changeButtonColor(bColor){
  const button = document.querySelector('.js-viewButton');
  button.style.background = bColor;
}

const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menu');

  hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  })

  document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }))