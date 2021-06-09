// TODO: add code here
// TODO: add code here
window.addEventListener("load",function(){
    console.log("windowloaded");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            // console.log(json);
            const image = document.getElementsByClassName("avatar");
            const div = document.getElementById("container");
            // const div = document.getElementById("container");
            for(let i = 0;i < json.length;i++){
                div.innerHTML = `
                <div class = "astronaut" >
                <div class = "bio">
                <h3> ${json[i].firstName} ${json[i].lastName} </h3>
                <ul>
                <li> Hours in space:${json[i].hoursInSpace} </li>
                <li> Skills:${json[i].skills} </li>
                <li> Active:${json[i].active} </li>
                </div>
                <img src = ${json[i].picture} </img>
                </div>
                `;
                // image.src = `${json[i].picture}`;
                // console.log(json[i].id);
            }
        });
    });
});