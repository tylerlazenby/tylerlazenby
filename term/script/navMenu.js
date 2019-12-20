function toggleNav() {
    console.log("clicked");
    document.getElementsByClassName('main-header')
        [0].classList.toggle("responsive");
    return false;
}