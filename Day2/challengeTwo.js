const name = prompt("Qual é o seu nome?").trim();
const age = prompt("Quantos anos você tem?").trim();
const language = prompt("Qual linguagem de programação você está estudando?").trim();

alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);

const like = Number(prompt(`Você gosta de estudar ${language}?\nResponda com o número 1 para SIM ou 2 para NÃO.`).trim())

if (like === 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
};
if (like === 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
};
if (like !== 1 || like !== 2) {
    alert(`Na próxima vez você me conta mesmo se gosta de ${language} ou não =)`)
};