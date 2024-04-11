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
for (let i = 0; i < ourTeam.length; i++) {
  const singleMember = ourTeam[i];
  console.log(`${i + 1}° elemento del Team:`);
  console.log(`Nome: ${singleMember["name"]}`);
  console.log(`Ruolo: ${singleMember["role"]}`);
  console.log(`Immagine: ${singleMember["picture"]}`);
  console.log(`------------------------`);
}
