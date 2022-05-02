const cards = document.querySelectorAll('.card')

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}
cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        removeActiveClasses()
        card.classList.add('active')
    })
})