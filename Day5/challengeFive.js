let newItem = "";
let category = 0;
const categoryNames = ["Frutas", "Laticínios", "Congelados", "Doces", "Carnes", "Outros"];
const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];
const carnes = [];
const outros = [];

const whichCategory = () => category = Number(prompt("Em qual categoria esse item se encaixa? Digite:\n1 para frutas\n2 para laticinios\n3 para congelados\n4 para doces\n5 para carnes\n6 para outros"));
while (confirm("Você deseja adicionar algo em sua lista de compras?")) {
    newItem = prompt("O que você deseja acrescentar?");

    whichCategory();
    switch (category) {
        case 1:
            frutas.push(newItem);
            break;
        case 2:
            laticinios.push(newItem);
            break;
        case 3:
            congelados.push(newItem);
            break;
        case 4:
            doces.push(newItem);
            break;
        case 5:
            carnes.push(newItem);
            break;
        case 6:
            outros.push(newItem);
            break;
        default:
            alert("Categoria inválida")
            whichCategory();
            break;
    };
};

const shoppingList = [frutas, laticinios, congelados, doces, carnes, outros];
let message = "";
for (let i = 0; i < shoppingList.length; i++){
    message += `${categoryNames[i]}:`;
    for (let j = 0; j < shoppingList[i].length; j++) {
        message += ` ${shoppingList[i][j]},`;
    }
    message += "\n";
};

alert(message);
