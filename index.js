// brings menu and backdrop into view and out
const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}
// opens and closes the 'more' menu within the side menu
const openMore = () => {
    document.querySelector('.modal-more').className = 'modal-more active';
}
const closeMore = () => {
    document.querySelector('.modal-more').className = 'modal-more';
}

// opens menu
document.getElementById('modal-btn').onclick = e => {
    e.preventDefault();
    openMenu();
}
// closes menu
document.querySelector('.close-btn').onclick = e => {
    e.preventDefault();
    closeMenu();
}
// closes 'more' menu and main menu
document.querySelector('.close-more-btn').onclick = e => {
    e.preventDefault();
    closeMenu();
    closeMore();
}
// allows user to click outside of the menu to close it
document.querySelector('.backdrop').onclick = e => {
    e.preventDefault();
    closeMenu();
    closeMore();
}
// opens the 'more' section of the menu
document.querySelector('.more').onclick = e => {
    e.preventDefault();
    openMore();
}
// hides 'more' menu
document.querySelector('.back').onclick = e => {
    e.preventDefault();
    closeMore();
}

fetch("https://www.youtube.com/")
    .then(res => console.log(res))
