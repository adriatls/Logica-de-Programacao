let area = "";
let frontLanguage = "";
let backLanguage = "";
let specialty = "";

const discoverArea = () => area = prompt("Você quer seguir a área de Front-End ou de Back-End?");
const discoverFrontLanguage = () => frontLanguage = prompt("Você tem mais vontade de aprender React ou Vue?");
const discoverBackLanguage = () => backLanguage = prompt("Você tem mais vontade de aprender Java ou C#?");
const discoverSpecialty = () => specialty = Number(prompt(`Você quer seguir se especializando em ${area} ou seguir se desenvolvendo para se tornar Fullstack?\n
Digite 1 para ${area} e digite 2 para Fullstack.`));


discoverArea();

while (
    area.toLowerCase().trim() !== "front-end" && area.toLowerCase().trim() !== "front" && area.toLowerCase().trim() !== "frontend" && 
    area.toLowerCase().trim() !== "back-end" && area.toLowerCase().trim() !== "back" && area.toLowerCase().trim() !== "backend" && 
    area !== false
) {
    alert("Você não digitou uma resposta válida.\nPor favor, digite Front-end ou Back-end!"); 
    discoverArea();
}

if (area.toLowerCase().trim() === "front-end" || area.toLowerCase().trim() === "front" || area.toLowerCase().trim() === "frontend") {
    area = "Front-end";
    discoverFrontLanguage();
    while (frontLanguage.toLowerCase().trim() !== "react" && frontLanguage.toLowerCase().trim() !== "vue" && frontLanguage !== false) {
        alert("Você não digitou uma resposta válida.\nPor favor, digite react ou vue!");
        discoverFrontLanguage();
    };
};

if (area.toLowerCase() === "back-end" || area.toLowerCase() === "back" || area.toLowerCase().trim() === "backend") {
    area = "Back-end";
    discoverBackLanguage();
    while (backLanguage.toLowerCase().trim() !== "java" && backLanguage.toLowerCase().trim() !== "c#" && backLanguage !== false) {
        alert("Você não digitou uma resposta válida.\nPor favor, digite Front-end java ou C#!");
        discoverBackLanguage();
    };
};

discoverSpecialty();

while ( specialty !== 1 && specialty !== 2) {
    alert("Você não digitou uma resposta válida.");
    discoverSpecialty();
}

while(confirm("Tem mais alguma tecnologia que você gostaria de aprender?\nOk para sim e Cancelar para não.")) {
    let newStack = prompt("Qual a tecnologia?");
    alert(`${newStack} é uma excelente escolha!`);
};
