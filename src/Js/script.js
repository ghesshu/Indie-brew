const mEnter = document.getElementById('m-enter')
const mBack = document.getElementById('m-back')
const mNav = document.getElementById('m-nav')
const mMenu = document.getElementById('m-menu')

mEnter.addEventListener('click', () => {
    mEnter.classList.toggle('hidden')
    mMenu.classList.toggle('hidden')

});

mBack.addEventListener('click', () => {
    mMenu.classList.toggle('hidden')
    mMenu.classList.toggle('fadeOut')
    mEnter.classList.toggle('hidden')

    
});