// test
console.log("test script.js OK");

const ourTeam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    picture: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(ourTeam);

// stampo in console i dati del team
for (let key in ourTeam) {
  //   const singleMember = ourTeam[i];
  console.log(`Elemento del Team:`);
  console.log(`Nome: ${ourTeam[key].name}`);
  console.log(`Ruolo: ${ourTeam[key].role}`);
  console.log(`Immagine: ${ourTeam[key].picture}`);
  console.log(`------------------------`);
}

// // stampo i dati nel DOM
// const bodyElem = document.querySelector("body");

// const titleElem = document.createElement("h1");
// titleElem.innerText = "Il nostro TEAM";

// const listElem = document.createElement("ul");

// bodyElem.append(titleElem);
// bodyElem.append(listElem);

// for (let key in ourTeam) {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `<span style="font-weight:bold;">${ourTeam[key].name}</span>, ${ourTeam[key].role}, <em>${ourTeam[key].picture}</em><div><img widht="200px" height="200px" src="./img/${ourTeam[key].picture}" alt="Foto"></div>`;

//   listElem.append(listItem);
// }

// stampo i dati nel DOM (CON LAYOUT A CARD)
const rowElem = document.querySelector(".row");

for (let key in ourTeam) {
  const cardElem = document.createElement("div");
  cardElem.classList.add("col");
  cardElem.innerHTML = `
    <img src="./img/${ourTeam[key].picture}" alt="Foto" />
    <div class="caption">
        <span style="font-weight: bold">${ourTeam[key].name}</span>
        <em>${ourTeam[key].role}</em>
    </div>`;
  console.log(cardElem);

  rowElem.append(cardElem);
}
