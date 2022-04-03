const initialNum = 7;
let userGuess = 0
let numberChances = 3;

guess = (attempt ) => {
    if (attempt === 1) {
        userGuess = Number(prompt("Qual o valor, entre 0 e 10, que você deseja chutar?"));
    } else {
        userGuess = Number(prompt(`Você tem mais ${numberChances} chance(s).\nQual o valor, entre 0 e 10, que você deseja chutar?`));
    }
    numberChances -= 1;
};

for (let i = 1; i <=3; i++) {
    guess(i);
    if (userGuess === initialNum) {
        alert(`Parabéns!! Você acertou que o número escolhido foi ${initialNum}`);
        break;
    };
    if (i === 3) {
        alert(`Que pena! Você falhou nas 3 tentativas =(\nO número escolhido foi ${initialNum}`);
    };
};