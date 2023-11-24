// crezione di un array con al suo interno oggetti

const teamList = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & Ceo',
        img : './img/wayne-barnett-founder-ceo.jpg'
    },

    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        img : './img/angela-caroll-chief-editor.jpg'
    },

    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        img : './img/walter-gordon-office-manager.jpg'
    },

    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        img : './img/angela-lopez-social-media-manager.jpg'
    },

    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        img : './img/scott-estrada-developer.jpg'
    },

    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        img : './img/barbara-ramos-graphic-designer.jpg'
    }
];

console.log(teamList)

const containerEl = document.querySelector('div.container');

for (let i = 0; i < teamList.length; i++) {
    const listEl = teamList[i];
    console.log(listEl)

    const listArticleEl = document.createElement('article')
    listArticleEl.classList.add('card')
    containerEl.appendChild(listArticleEl);

    listArticleEl.innerHTML = teamList.toString(teamList.nome, teamList.ruolo, teamList.img);
    // listArticleEl.innerHTML = 
    // `
    // <p>${listEl.nome}, ${listEl.ruolo}, ${listEl.img} </p>
    // `;

}



// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe