/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri
    del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto :
faccia_leggermente_sorridente:

BONUS 3:
Aggiungere attraverso un form un membro al team
*/
const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }

]
const page = document.querySelector('body');
page.setAttribute('style', `background-color:rgba(57, 145, 7, .4)`);

const container = document.getElementById('row');
const pageCreation = function(){
    for (let teamMate of ourTeam){
        const cardContainer = document.createElement('div');
            cardContainer.className = 'col'
            container.append(cardContainer);
        const card = document.createElement('div');
            card.className = 'rounded-2 p-3 d-flex align-items-center justify-content-start';
            card.setAttribute('style', `background-color:#27BA95`);
            cardContainer.append(card);
        const img = document.createElement('img');
            img.setAttribute('src', `./img/${teamMate.img}`);
            img.setAttribute('max-width', `100%`);
            img.setAttribute('width', `30%`);
            img.className = 'rounded-circle';
            card.append(img);
        const cardText = document.createElement('div');
            cardText.className = 'fw-bold mx-4';
            card.append(cardText);
        const name = document.createElement('div');
            name.innerText = `${teamMate.name}`;
            name.setAttribute('style', `color:#920025`);
            cardText.append(name);
        const role = document.createElement('div');
            role.innerText = `${teamMate.role}`;
            role.setAttribute('style', `font-size:.8em; color:#84E3CC`);
            cardText.append(role);
    }
}
pageCreation()
const btns = document.querySelectorAll('button');
const inputName = document.getElementById('newMateName');
const inputRole = document.getElementById('newMateRole');

for (let button of btns){
    button.setAttribute('style', `background-color:#27BA95`);
}

const showInput = function(){
    btns[0].classList.add('d-none');
    btns[1].classList.replace('d-none', 'd-inline-block');
    inputName.classList.replace('d-none', 'd-inline-block');
    inputRole.classList.replace('d-none', 'd-inline-block');

    
}
const addMember = function(){
    const member = {
        name: `${inputName.value}`,
        role: `${inputRole.value}`,
        img: 'new-member-avatar.jpg'
    }
    ourTeam.push(member)
    console.log(member,ourTeam)
    container.innerHTML='';
    inputName.value='';
    inputRole.value='';
    pageCreation()
}


btns[0].addEventListener('click', showInput);

btns[1].addEventListener('click', addMember);