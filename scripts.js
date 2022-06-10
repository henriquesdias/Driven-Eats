const icon = document.querySelectorAll('.icon');
const food = document.querySelectorAll('.first-row')
const drink = document.querySelectorAll('.second-row')
const dessert = document.querySelectorAll('.third-row')
const button  =document.querySelector('.button');
const options = document.querySelectorAll('.option');

button.disabled = true;

let count = 0;

function selectedFood(iten , num) {
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
    count++;
}

function selectedDrink(iten, num) {
    for (let i = 0 ; i < drink.length ; i++) {
        drink[i].classList.remove('select-item');
        icon[i + 5].classList.remove('show-icon');
    }
    iten.classList.toggle('select-item');
    icon[num].classList.toggle('show-icon');
    count++;
}
function selectedDessert(iten, num) {
    for (let i = 0 ; i < dessert.length ; i++) {
        dessert[i].classList.remove('select-item');
        icon[i + 9].classList.remove('show-icon');
    }
    iten.classList.toggle('select-item');
    icon[num].classList.toggle('show-icon');
    count++;

    if (count >= 3) {
        button.innerHTML = 'Fechar pedido';
        button.classList.add('buttonGreen');
        button.disabled = false;
    }

}

function completeOrder() {
    let textFinal =  encodeURIComponent("Olá, gostaria de fazer o pedido:- Prato: Frango Yin Yang- Bebida: Coquinha Gelada- Sobremesa: PudimTotal: R$ 27.70");
    const url =  `https://wa.me/?text=${textFinal}`;
    open(url);
}