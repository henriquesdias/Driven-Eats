const icon = document.querySelectorAll('.icon');
const food = document.querySelectorAll('.first-row')
const drink = document.querySelectorAll('.second-row')
const dessert = document.querySelectorAll('.third-row')
const button  = document.querySelector('.button');
const options = document.querySelectorAll('.option');
let confirm = document.querySelector('.transparent');

button.disabled = true;


let optionOne;
let optionTwo;
let optionThree;
let foodDescription = '';
let foodPrice = '';
let drinkDescription = '';
let drinkPrice = '';
let dessertDescription = '';
let dessertPrice = '';
function selectedFood(iten , num) {
    if (iten.classList.contains('select-item') ) {
        iten.classList.toggle('select-item');
        icon[num].classList.toggle('show-icon');
        optionOne = undefined;
        // ------Aqui vc reseta a opção de prato escolhida
    } else {
        for (let i = 0 ; i < food.length ; i++) {
            food[i].classList.remove('select-item');
            icon[i].classList.remove('show-icon');
          
        }
        // ------Aqui vc adiciona as informações do prato
        optionOne = iten.classList.toggle('select-item');
        foodDescription = iten.querySelector('h3').innerHTML;
        foodPrice = iten.querySelector('span').innerHTML;
        icon[num].classList.toggle('show-icon');
    }
    verificated();
}

function selectedDrink(iten, num) {
    if (iten.classList.contains('select-item') ) {
        iten.classList.toggle('select-item');
        icon[num].classList.toggle('show-icon');
        optionTwo = undefined;
        // ------Aqui vc reseta a opção de prato escolhida
    } else {
        for (let i = 0 ; i < drink.length ; i++) {
            drink[i].classList.remove('select-item');
            icon[i + 5].classList.remove('show-icon');
        }
        // ------Aqui vc adiciona as informações do prato
        optionTwo = iten.classList.toggle('select-item');
        drinkDescription = iten.querySelector('h3').innerHTML;
        drinkPrice = iten.querySelector('span').innerHTML;
        icon[num].classList.toggle('show-icon');
    }
    verificated();
}
function selectedDessert(iten, num) {
    if (iten.classList.contains('select-item') ) {
        iten.classList.toggle('select-item');
        icon[num].classList.toggle('show-icon');
        optionThree = undefined;
        // ------Aqui vc reseta a opção de prato escolhida
    } else {
        for (let i = 0 ; i < dessert.length ; i++) {
            dessert[i].classList.remove('select-item');
            icon[i + 9].classList.remove('show-icon');
        }
        // ------Aqui vc adiciona as informações do prato
        optionThree = iten.classList.toggle('select-item');
        dessertDescription = iten.querySelector('h3').innerHTML;
        dessertPrice = iten.querySelector('span').innerHTML;
        icon[num].classList.toggle('show-icon');
    }
    verificated();

}
function verificated() {
    if (optionOne & optionTwo & optionThree) {
        button.innerHTML = 'Fechar pedido';
        button.classList.add('buttonGreen');
        button.disabled = false;
    } else {
        button.innerHTML = 'Selecione os 3 itens para fechar o pedido';
        button.classList.remove('buttonGreen');
        button.disabled = true;
    }
}

let priceTotal = 0;
function confirmOrder() {
    confirm.classList.remove('hide');
    document.querySelector('.foodDescription').innerHTML = foodDescription;
    let priceOne = document.querySelector('.foodPrice').innerHTML = foodPrice;
    document.querySelector('.drinkDescription').innerHTML = drinkDescription;
    let priceTwo = document.querySelector('.drinkPrice').innerHTML = drinkPrice;
    document.querySelector('.dessertDescription').innerHTML = dessertDescription;
    let priceThree = document.querySelector('.dessertPrice').innerHTML = dessertPrice;
    priceTotal = Number(priceOne) + Number(priceTwo) + Number(priceThree);
    document.querySelector('.totalPrice').innerHTML = `R$ ${priceTotal.toFixed(2)}`;
}
function cancelOrder() {
    confirm.classList.add('hide');
}

function completeOrder() {
    let name = prompt('Qual é o seu nome ?');
    let address = prompt('Qual o seu endereço ?');
    if (name == '' || address == '') {
        alert('Por favor, preencha o seu nome/endereço')
    } else {
    let textFinal =  encodeURIComponent(`Olá, gostaria de fazer o pedido:- Prato: ${foodDescription}- Bebida: ${drinkDescription}- Sobremesa: ${dessertDescription}: R$ ${priceTotal}- Nome: ${name}- Endereço: ${address}`);
    const url =  `https://wa.me/?text=${textFinal}`;
    open(url);
    }
}

