function readMoreLess() {
    const moreText = document.querySelector(".header__moreText");
    const btnText = document.querySelector(".read-btn__text");
    const iconButton = document.querySelector(".read-btn__icon");
    const hiddenIcon = document.querySelector(".hiden-image");
    
    var tabletSize = 768;

    if(moreText.style.display == "none" || moreText.style.display == ""){
        moreText.style.display = "inline"
        btnText.innerHTML = "Read Less";
        iconButton.innerHTML = "expand_less";
        if(window.innerWidth < tabletSize){
            hiddenIcon.style.display = "flex";
        }
    }else{
        moreText.style.display = "none"
        btnText.innerHTML = "Read All";
        iconButton.innerHTML = "expand_more";
        hiddenIcon.style.display = "none";
    }
}


function checkMediaQuery() {
    if (window.innerWidth >= 768 & window.innerWidth < 1280) {
        const hiddenIcon = document.querySelector(".hiden-image");
        hiddenIcon.style.display = "none";
    }
    if (window.innerWidth >= 1280) {
        const hiddenIcon = document.querySelector(".header__moreText");
        hiddenIcon.style.display = "inline";
    }
}

window.addEventListener('resize',checkMediaQuery);
