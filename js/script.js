// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const memberList = [
  {name:'Wayne Barnett', role:'Founder & CEO', img_src:'../img/wayne-barnett-founder-ceo.jpg'},
  {name:'Angela Caroll', role:'Chief Editor', img_src:'../img/angela-caroll-chief-editor.jpg'},
  {name:'Walter Gordon', role:'Office Manager', img_src:'../img/walter-gordon-office-manager.jpg'},
  {name:'Angela Lopez', role:'Social Media Manager', img_src:'../angela-lopez-social-media-manager.jpg'},
  {name:'Scott Estrada', role:'Developer', img_src:'../img/scott-estrada-developer.jpg'},
  {name:'Barbara Ramos', role:'Founder & CEO', img_src:'../img/barbara-ramos-graphic-designer.jpg'}
]
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let index = 0; index < memberList.length; index++) {
  const member = memberList[index];
  console.log(member.name, member.role, member.img_src)
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  ma anche realizzare qualcosa di creativo!!!