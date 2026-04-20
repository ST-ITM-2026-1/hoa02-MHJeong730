document.addEventListener("DOMContentLoaded",init);


function init(){
    let toggle = document.querySelector("#toggleButton");
    toggle.addEventListener("click",changeTheme);

    let filterButtons = document.querySelectorAll("#filter button") ;
    filterButtons.forEach( button =>{
        button.addEventListener("click",filterProject);
    });


    const clickedToggle = document.querySelector("#toggleButton");
    const body = document.querySelector("body")
    const hd = document.querySelector("header") ;
    const main = document.querySelector("main") ;
    const ftr = document.querySelector("footer") ;

    if(localStorage.getItem('theme') === "Night"){

        clickedToggle.classList.add("nightTheme");
        clickedToggle.textContent = "☀" ;
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
        clickedToggle.textContent = "☾" ;
        body.classList.remove("nightTheme")
        hd.classList.remove("nightTheme");
        main.classList.remove("nightTheme");
        ftr.classList.remove("nightTheme");
    }else{
        localStorage.setItem('theme', 'Night');

        clickedToggle.classList.add("nightTheme");
        clickedToggle.textContent = "☀" 
        body.classList.add("nightTheme");
        hd.classList.add("nightTheme");
        main.classList.add("nightTheme");
        ftr.classList.add("nightTheme");
    }

}

function filterProject(event){
    const clickedButton = event.currentTarget ;
    const filterButtons = document.querySelectorAll("#filter button") ;
    const filter = clickedButton.textContent;
    const projects = document.querySelectorAll("#projects-main section:not(#filter)");

    filterButtons.forEach( button =>{
        button.classList.remove("currentSelected");
    });

    if(filter == 'All'){
        projects.forEach(project =>{
            project.style.display = '';
        });
    }else{
        projects.forEach(project =>{
            if(!project.classList.contains(filter)){
             project.style.display = 'none';
            }else{
                project.style.display = '';
            }
    });
    }


    clickedButton.classList.add("currentSelected");
}






