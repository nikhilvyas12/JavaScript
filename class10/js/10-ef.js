function toggle(category) {

  if (category === 'gaming') {

    const gameing_btn = document.querySelector('.js-button1');
    toggleCheck(gameing_btn);
  }
  else if (category === 'music') {
    const music_btn = document.querySelector('.js-button2');
    toggleCheck(music_btn);
  } else {
    const tech_btn = document.querySelector('.js-button3');
    toggleCheck(tech_btn);
  }
}

function toggleCheck(obj) {
  if (obj.classList.contains('is-toggled'))
    obj.classList.remove('is-toggled');
  else
    obj.classList.add('is-toggled');
}