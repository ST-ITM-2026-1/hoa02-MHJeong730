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

    getProfileInfo("https://api.github.com/users/MHJeong730");
    getRepoInfo("https://api.github.com/users/MHJeong730/repos");
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


async function getProfileInfo(url){
    const gitMain = document.querySelector("#myGithub-main");

    try{
        const response = await fetch(url); 
        if (!response.ok) throw new Error("No user info");
        
        const data = await response.json();

        const avatarUrl = data.avatar_url;
        const name = data.name ;
        const bio = data.bio ;
        const publicRepositoryNum = data.public_repos
        const followers = data.followers ;
        const following = data.following


        const profileInfo = document.createElement("section");
        profileInfo.classList.add("profileData");

        profileInfo.innerHTML =`
            <img src = "${avatarUrl}" alt = "github Avatar">
            <h1>${name}</h1>
            <p class = "bio">${bio}</p>
            <ul>
                <li>Number of public repository : ${publicRepositoryNum}</li>
                <li>Followers : ${followers}</li>
                <li>Following : ${following}</li>
            </ul>
        `;

        gitMain.appendChild(profileInfo);

    }catch(error){
        const profileInfo = document.createElement("section");
        profileInfo.classList.add("errorMessage");
        profileInfo.innerHTML = `
            <p>Error: ${error.message}</p>
        `;

        gitMain.appendChild(profileInfo);
    }
}

async function getRepoInfo(url){
    const gitMain = document.querySelector("#myGithub-main");

    try{
        const response = await fetch(url); 
        if (!response.ok) throw new Error("No repo info");
        
        const repolist = await response.json();

        repolist.forEach((item, index)=>{

            const repoName = item.name ;
            const description = item.description ;
            const pLanguage = item.language ;
            const starCnt = item.stargazers_count ;
            const forks = item.forks ;
            const repoLink = item.html_url ;

            const repoInfo = document.createElement("section");
            repoInfo.classList.add("repoData");

            repoInfo.innerHTML =`
                <h1>${repoName}</h1>
                <p>${description}</p>
                <a href=${repoLink}>|| Repository Link ||</a>
                <ul>
                    <li>Primary Language : ${pLanguage}</li>
                    <li>Star count : ${starCnt}</li>
                    <li>Forks : ${forks}</li>
                </ul>
            `;

            gitMain.appendChild(repoInfo);
        });

    }catch(error){
        const repoInfo = document.createElement("section");
        repoInfo.classList.add("errorMessage");
        repoInfo.innerHTML = `
            <p>Error: ${error.message}</p>
        `;

        gitMain.appendChild(repoInfo);
    }
}



