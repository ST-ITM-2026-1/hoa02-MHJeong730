document.addEventListener("DOMContentLoaded",init);


function init(){
    let toggle = document.querySelector("#toggleButton");
    toggle.addEventListener("click",changeTheme);


    const clickedToggle = document.querySelector("#toggleButton");
    const body = document.querySelector("body")
    const hd = document.querySelector("header") ;
    const main = document.querySelector("main") ;
    const ftr = document.querySelector("footer") ;

    if(localStorage.getItem('theme') === "Night"){

        clickedToggle.classList.add("nightTheme");
        clickedToggle.textContent = "☾" ;
        body.classList.add("nightTheme");
        hd.classList.add("nightTheme");
        main.classList.add("nightTheme");
        ftr.classList.add("nightTheme");
    }
}



function changeTheme(event){
    const clickedToggle = event.currentTarget;
    const body = document.querySelector("body")
    const hd = document.querySelector("header") ;
    const main = document.querySelector("main") ;
    const ftr = document.querySelector("footer") ;

    if(localStorage.getItem('theme') === "Night"){
        localStorage.setItem('theme', 'Day') ;

        clickedToggle.classList.remove("nightTheme");
        clickedToggle.textContent = "☀" ;
        body.classList.remove("nightTheme")
        hd.classList.remove("nightTheme");
        main.classList.remove("nightTheme");
        ftr.classList.remove("nightTheme");
    }else{
        localStorage.setItem('theme', 'Night');

        clickedToggle.classList.add("nightTheme");
        clickedToggle.textContent = "☾" ;
        body.classList.add("nightTheme");
        hd.classList.add("nightTheme");
        main.classList.add("nightTheme");
        ftr.classList.add("nightTheme");
    }

}






