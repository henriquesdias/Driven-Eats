let icon = document.querySelectorAll('.icon');
let food = document.querySelectorAll('.first-row')
let drink = document.querySelectorAll('.second-row')
let dessert = document.querySelectorAll('.third-row')


function selected(iten , num) {
    // if (iten.classList.contains('select-item')) {
    //     icon.classList.remove('show-icon');
    //     iten.classList.remove('select-item');
    // } else {
    //     iten.classList.add('select-item');
    //     icon.classList.add('show-icon');
    // }
    for (let i = 0 ; i < food.length ; i++) {
        food[i].classList.remove('select-item');
        icon[i].classList.remove('show-icon');
    }
    iten.classList.toggle('select-item');
    icon[num].classList.toggle('show-icon');
}