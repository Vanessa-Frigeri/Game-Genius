let order = [];
let clickedOrder = [];
let score = 0;
let level = 1;
let lose = false;

//0 = verde
//1 = vermelho
//2 = amarelo
//3= azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criando a ordem de cores aleatoriamente
let shuffleOrder = () => {
    let colorTurn = Math.floor(Math.random() * 4);
    order[order.length] = colorTurn;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(order[i], elementColor, Number(i) + 1);
    };
};

//Acenda a proxima cor
let lightColor = (color, element, number) => {
    number = number * 700;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 400);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 350);
};

//Verifica se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrderClicked = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose = true;
            gameOver();
            break;
        };
    };
    if (clickedOrder.length == order.length) {
        score++;
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    };
};

//Clique do usuário
let clickUser = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrderClicked();
    }, 400);
};

//Retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
};

//Cria proximo nivel do jogo
let nextLevel = () => {
    shuffleOrder();
};

//Finaliza o jogo
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar novo jogo!`);
    order = [];
    clickedOrder = [];
    playGame();
};

//Inicia o jogo
let playGame = () => {
    alert(`Bem vindo ao Vans Genius!\nIniciando novo jogo!`);
    score = 0;
    lose = false;
    nextLevel();
};

//Eventos de click para as cores
green.onclick = () => clickUser(0);
red.onclick = () => clickUser(1);
yellow.onclick = () => clickUser(2);
blue.onclick = () => clickUser(3);


playGame();