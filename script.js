

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
  firstName: "",
  middleName: "",
  lastName: "",
  nickName: "",
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
    console.log("loadJSON");

    addEventListenersToButtons();




    json.forEach((student) => {


      addEventListenersToButtons();
  });

  }

  


function prepareJsonObjects(jsonData) {

    jsonData.forEach(jsonObject => {
        //create
        const student = Object.create(oneStudent);


        // define firstspace and lastspace
        const firstSpace = jsonObject.fullname.trim().indexOf(" ");
        const lastSpace = jsonObject.fullname.trim().lastIndexOf(" ");
        

        // create const for each data in prototype
        const firstName = jsonObject.fullname.trim().substring(0, firstSpace);
        const middleName = jsonObject.fullname.substring(firstSpace, lastSpace).trim();
        const lastName = jsonObject.fullname.trim().substring(lastSpace).trim();
        const gender = jsonObject.gender.substring(0).trim();
        const house = jsonObject.house.substring(0).trim();
        const nickName = jsonObject.nickName;
      

        //console.log to see if it works
        console.log(firstName, lastName, middleName, nickName, gender, house);


        //firstname: make first letter C and rest c
        student.firstName = firstName.substring(0, 1).toUpperCase() +firstName.substring(1, firstSpace).toLowerCase();


        //middlename: make first letter C and rest c
        student.middleName = middleName.substring(0, 1).toUpperCase() + middleName.substring(1, middleName.length).toLowerCase();


        //lastname: make first letter C and rest c
        student.lastName = lastName.substring(0, 1).toUpperCase() + lastName.substring(1).toLowerCase(lastName.length);


        // ""names == nickname
      
    
        

        //gender: make first letter C and rest c
        student.gender = gender.substring(0, 1).toUpperCase() +
        gender.substring(1).toLowerCase();


        //house: make first letter C and rest c
        student.house = house.substring(0, 1).toUpperCase() +
        house.substring(1).toLowerCase();


        //push that shit
        allStudents.push(student);
    })

    displayList();
  
}


function displayList() {
        // clear the list
        document.querySelector("#list tbody").innerHTML = "";

        // build a new list
        allStudents.forEach(displayStudent);
    
        console.log("displayList");
    

}
      
function displayStudent(student) {

        // create clone
        const clone = document.querySelector("template#student").content.cloneNode(true);

        // set clone data
        clone.querySelector("[data-field=firstName]").textContent = student.firstName;
        clone.querySelector("[data-field=middleName]").textContent = student.middleName;
        clone.querySelector("[data-field=lastName]").textContent = student.lastName;
        clone.querySelector("[data-field=nickName]").textContent = student.nickName;
        clone.querySelector("[data-field=gender]").textContent = student.gender;
        clone.querySelector("[data-field=house]").textContent = student.house;
    
        // append clone to list
        document.querySelector("#list tbody").appendChild( clone );
    
        console.log("displayStudent");

}


