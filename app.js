const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeClasslist();
        card.classList.add('active');
    })
})

function removeClasslist() {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}