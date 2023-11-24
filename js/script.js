// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const memberList = [
  {name:'Wayne Barnett', role:'Founder & CEO', img_src:'wayne-barnett-founder-ceo.jpg'},
  {name:'Angela Caroll', role:'Chief Editor', img_src:'angela-caroll-chief-editor.jpg'},
  {name:'Walter Gordon', role:'Office Manager', img_src:'walter-gordon-office-manager.jpg'},
  {name:'Angela Lopez', role:'Social Media Manager', img_src:'angela-lopez-social-media-manager.jpg'},
  {name:'Scott Estrada', role:'Developer', img_src:'scott-estrada-developer.jpg'},
  {name:'Barbara Ramos', role:'Founder & CEO', img_src:'barbara-ramos-graphic-designer.jpg'}
]
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let index = 0; index < memberList.length; index++) {
  const member = memberList[index];
  console.log(member.name, member.role, member.img_src)
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const memberListContainer = document.getElementById('member_list');

for (let index = 0; index < memberList.length; index++) {
  const member = memberList[index];
  const textLine = document.createElement('p');
  textLine.innerHTML = 'Name: ' + member.name + '; Role is: ' + member.role + '; Image directory is: ' + member.img_src;
  memberListContainer.appendChild(textLine)
}
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
for (let index = 0; index < memberList.length; index++) {
  const member = memberList[index];
  const textLine = document.createElement('p');
  const imgEl = document.createElement('img');
  imgEl.src = '../img/' + member.img_src;
  textLine.innerHTML = 'Name: ' + member.name + '; Role is: ' + member.role;
  memberListContainer.appendChild(textLine);
  memberListContainer.appendChild(imgEl)
}

// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  ma anche realizzare qualcosa di creativo!!!