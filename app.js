const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModal);

const technologies = [
    {title: 'HTML', description: 'HTML Text', type: 'html', done: true},
    {title: 'CSS', description: 'CSS Text', type: 'css', done: true},
    {title: 'JavaScript', description: 'JavaScript Text', type: 'js', done: false},
    {title: 'Git', description: 'Git Text', type: 'git', done: false},
    {title: 'React', description: 'React Text', type: 'react', done: false},
]

function openCard() {
    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}

function init() {
    if (technologies.length === 0) {
        content.innerHTML = '<p class="empty">Технологий пока нет. Добавьте первую</p>'
    } else {
        // let html = '';
        // for (let i = 0; i < technologies.length; i++) {
        //     const tech = technologies[i];
        //     html += toCard(tech);
        // }
        // content.innerHTML = html
        content.innerHTML = technologies.map(toCard).join('');
    }
}

function toCard(tech) {
    const doneClass = tech.done ? 'done' : '';
    return `
        <div class="card ${doneClass}">
            <h3>${tech.title}</h3>
        </div>
    `
}

init();