let icon = document.querySelector('.icon');


function selected(iten) {
    // if (iten.classList.contains('select-item')) {
    //     icon.classList.remove('show-icon');
    //     iten.classList.remove('select-item');
    // } else {
    //     iten.classList.add('select-item');
    //     icon.classList.add('show-icon');
    // }
    iten.classList.toggle('select-item');
    icon.classList.toggle('show-icon');
}