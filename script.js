

// let temp = document.querySelector("template");

// let container = document.querySelector("section");

// let json;

// let filter = "alle";

"use strict";

window.addEventListener("DOMContentLoaded", start);


function start( ) {
    console.log("ready");

    loadJSON();
}

const allStudents = [];

const oneStudent = {
  firstname: "",
  middlename: "",
  lastname: "",
  nickname: "",
  gender: "",
  house: "",
};



function loadJSON() {
    fetch("https://petlatkea.dk/2021/hogwarts/students.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // when loaded, prepare objects
        prepareJsonObjects(jsonData);
      });
    console.log("loaded");
  }



function prepareJsonObjects(jsonData) {

    jsonData.forEach(jsonObject => {
        //create
        const student = Object.create(oneStudent);


        // create new objects with cleaned data - and store that in the allStudents array
        const firstSpace = jsonObject.fullname.indexOf(" ");
        const lastSpace = jsonObject.fullname.lastIndexOf(" ");
        

        // create const for each data in prototype
        const firstname = jsonObject.fullname.trim().substring(0, firstSpace);
        const middlename = jsonObject.fullname.substring(firstSpace, lastSpace).trim();
        const lastname = jsonObject.fullname.substring(lastSpace).trim();
        const nickname = jsonObject.nickname;
        const gender = jsonObject.gender;
        const house = jsonObject.house;


        //console.log to see if it works
        console.log(firstname, lastname, middlename, nickname, gender, house);


        
        student.firstname = firstname;
        student.middlename = middlename
        student.lastname = lastname;
        student.nickname = nickname;
        student.gender = gender;
        student.house = house;

        allStudents.push(student);

    

    })

    displayList();
  
}


function displayList() {
        // clear the list
        document.querySelector("#list tbody").innerHTML = "";

        // build a new list
        allStudents.forEach(displayStudent);
    
        console.log("virker jeg1?");
    

}
      
function displayStudent(student) {

        // create clone
        const clone = document.querySelector("template#animal").content.cloneNode(true);

        // set clone data
        clone.querySelector("[data-field=firstname]").textContent = student.firstname;
        clone.querySelector("[data-field=lastname]").textContent = student.lastname;
        clone.querySelector("[data-field=middlename]").textContent = student.middlename;
        clone.querySelector("[data-field=nickname]").textContent = student.nickname;
        clone.querySelector("[data-field=gender]").textContent = student.gender;
        clone.querySelector("[data-field=house]").textContent = student.house;
    
        // append clone to list
        document.querySelector("#list tbody").appendChild( clone );
    
        console.log("virker jeg2?");

}




// function vis(menu) {

//     console.log(menu);

//     container.innerHTML = "";

//     menu.feed.entry.forEach(actor => {

//         if (filter == "alle" || filter == actor.gsx$movie.$t) {


//             const klon = temp.cloneNode(true).content;

//             klon.querySelector(".name").textContent = actor.gsx$name.$t;

// //            klon.querySelector(".kort").textContent = actor.gsx$kort.$t;
// //
// //            klon.querySelector(".pris").textContent = "Pris: " + actor.gsx$pris.$t + ",-";
// //
// //            klon.querySelector("img").src = "imgs/small/" + actor.gsx$billede.$t + "-sm.jpg";

//             klon.querySelector("article").addEventListener("click", () => visPopup(actor));

//             container.appendChild(klon);
//         }
//     })
// }



// function addEventListenersToButtons() {

//     document.querySelectorAll(".filter").forEach((btn) => {

//         btn.addEventListener("click", filterBTNs);

//     });

// }



// function filterBTNs() {

//     filter = this.dataset.movie;

//     document.querySelector(".movie").textContent = this.textContent;

//     document.querySelectorAll(".filter").forEach((btn) => {

//         btn.classList.remove("valgt")

//     })

//     this.classList.add("valgt")

//     vis(json);

// }


// loadJson();


// function visPopup(actor) {
//     popup.style.display = "block";
//     popup.querySelector("h2").textContent = actor.gsx$name.$t;
//     popup.querySelector(".beskrivelse").textContent = "Beskrivelse: " + actor.gsx$lang.$t;
//     popup.querySelector(".oprindelse").textContent = "Oprindelse: " + actor.gsx$oprindelse.$t;
//     popup.querySelector(".pris").textContent = "Pris: " + actor.gsx$pris.$t + ",-";
//     popup.querySelector("img").src = "imgs/small/" + actor.gsx$billede.$t + "-sm.jpg";

//     document.querySelector(".luk").addEventListener("click", () => popup.style.display = "none");
// }
