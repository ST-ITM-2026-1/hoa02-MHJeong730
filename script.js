document.addEventListener("DOMContentLoaded",init);


function init(){
    let toggle = document.querySelector("#toggleButton");
    toggle.addEventListener("click",changeTheme);
}

function changeTheme(event){
    const clickedToggle = event.currentTarget;
    const body = document.querySelector("body")
    const hd = document.querySelector("header") ;
    const main = document.querySelector("main") ;
    const ftr = document.querySelector("footer") ;

    if(clickedToggle.classList.contains("nightTheme")){
        clickedToggle.classList.remove("nightTheme");
        body.classList.remove("nightTheme")
        hd.classList.remove("nightTheme");
        main.classList.remove("nightTheme");
        ftr.classList.remove("nightTheme");
    }else{
        clickedToggle.classList.add("nightTheme");
        body.classList.add("nightTheme");
        hd.classList.add("nightTheme");
        main.classList.add("nightTheme");
        ftr.classList.add("nightTheme");
    }


}

