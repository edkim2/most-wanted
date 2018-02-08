 /*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  setAges(people);
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    searchByName(people);
    break;
    case 'no':
    let filteredPeople = searchByTraits(people);
    //need to call a function that enshures that filtered people only has one person in it
    getFamily(person ,people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}


function searchByTraits(allPeople, somePeople) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;
  let foundPerson;

  if (somePeople === undefined) {
    somePeople = allPeople;
  }

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(somePeople);
      displayPeople(filteredPeople);
      break;
  
    case "weight":
      filteredPeople = searchByWeight(somePeople);
      displayPeople(filteredPeople);
      break;
    case "eye color":
      filteredPeople = searchEyeColor(somePeople);
      displayPeople(filteredPeople);
      break;
    case "occupation":
      filteredPeople = searchOccupation(somePeople);
      displayPeople(filteredPeople);
      break;
    case "gender":
      filteredPeople = searchGender(somePeople);
      displayPeople(filteredPeople);
      break;
    case "age": 
      filteredPeople = searchAge(somePeople);
      displayPeople(filteredPeople);
      break;

    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(allPeople, filteredPeople);
      break;
      return filteredPeople;

  }

  userSearchChoice = prompt("Would you like to search again based on the new list of people?");

    if(userSearchChoice === "yes"){
      searchByTraits(allPeople, filteredPeople);
    }
    else{
    foundPerson = filteredPeople[0];
  }
  
  mainMenu(foundPerson, allPeople);

}

function getAge(dob){

  var today = new Date();
  var oldDay = new Date(dob);
  var timeDifference = Math.abs(oldDay.getTime() - today.getTime());
  var differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
  var age = Math.floor((differentDays/ 365));
  return age;
}

function setAges(people){
  people = people.map(function (el) {
    el.age = getAge(el.dob);
  });
}

function searchAge(people) {
  let userInputAge = prompt("What age is your person?");

  let newArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}

function searchGender(people) {
  let userInputGender = prompt("What gender is your person?");

  let newArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}

function searchOccupation(people) {
  let userInputOccupation = prompt("What occupation does your person have?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}

function searchEyeColor(people) {
  let userInputEyeColor = prompt("What color eyes does the person have?");

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}

function searchByHeight(people) {
  let userInputHeight = prompt("How tall is the person");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
    return true;

    }

  });

  return newArray;

}

// search by height
function searchByHeight(people) {
  let userInputHeight = prompt("What is the height of this person?");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
    //return true if el.weight matches userInputWeight
  });

  return newArray;
}

// search by eye color
function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What is the person's eye color?");

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
    // return true if el.eyeColor matched userInputEyeColor
  });

  return newArray;
}

// search by age
function searchByAge(people) {
  let userInputAge = prompt("What is the person's age?");

  let newArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      return true;
    }
    // return true if el.age matched userInputAge
  });
  
  return newArray;
}

//search by occupation
function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the person's occupation?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
    //return true if el.occupation matched userInputOccupation
  });

  return newArray;
}
function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  var displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  let filteredPerson;
  let filteredPeople;
  switch(displayOption){
    case "info":
    // TODO: get person's info
    filteredPerson = displayPerson(person[0]);
    break;
    case "family":
    filteredPerson = displayPeople(getFamily(person, people));
    break;
    case "descendants":
    // TODO: get person's descendants
    filteredPeople = getDescendants(person[0], people);
    displayPeople(filteredPeople);
    break;
    case restart/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name
    let person = searchByName(people);
    if (person.length === 1){
      mainMenu(person, people);
    }
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      displayPeople(filteredPeople);
      break;
    // weight
    case "weight":
      filteredPeople = searchByWeight(people);
      displayPeople(filteredPeople);
      break;
    // eye color
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      displayPeople(filteredPeople);
    case "age":
      filteredPeople = searchByAge(people);
    // occupation
    case "occupation":
      filteredPeople = searchByOccupation(people);
      displayPeople(filteredPeople);
    // so on and so forth
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}

// search by height
function searchByHeight(people) {
  let userInputHeight = prompt("What is the height of this person?");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
    //return true if el.weight matches userInputWeight
  });

  return newArray;
}

// search by eye color
function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What is the person's eye color?");

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
    // return true if el.eyeColor matched userInputEyeColor
  });

  return newArray;
}

// search by age
function searchByAge(people) {
  let userInputAge = prompt("What is the person's age?");

  let newArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      return true;
    }
    // return true if el.age matched userInputAge
  });
  
  return newArray;
}

//search by occupation
function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the person's occupation?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
    //return true if el.occupation matched userInputOccupation
  });

  return newArray;
}
function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
      return true;
    }
    // return true if el.height matches userInputHeight
  });

  return newArray;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  let filteredPerson;
  let filteredPeople;
  switch(displayOption){
    case "info":
    // TODO: get person's info
    filteredPerson = displayPerson(person[0]);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    filteredPeople = getDescendants(person[0], people);
    displayPeople(filteredPeople);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
 
  let newArray = people.filter(function (el) {
    if(el.firstName.toLowerCase() === firstName.toLowerCase() && el.lastName.toLowerCase() === lastName.toLowerCase()) {
      return true;
    }

  });

  return newArray;

  // TODO: find the person using the name they entered
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

// create a function to determine the descendants 


function getDescendants(person, people, returnArray = []) {
  let firstGenerationArrayLength = returnArray.length;
  let firstGeneration = people.filter(function (el) {
   for(i = 0; i < el.parents.length; i++){
     if(person.id === el.parents[i]) {
       return true;

     }
   }

 });
  
    // take the new array and get their descendants, return their descendants at the end. make sure to call the function within the function
    //console.log(firstGeneration);
    //return firstGeneration;

  // let arraylength = returnArray.length;
  //   let newArray = people.filter(function (el){
  //       for(i = 0; i < el.parents.length; i++){
  //         if(person.id === el.parents[i] ) {
  //           return true;
  //         }
  //       }

  //   });
       returnArray = returnArray.concat(firstGeneration);
       if(returnArray.length === firstGenerationArrayLength){
         return [];
       }
       // for(j=0; j < firstGeneration/*newArray*/.length; j++){
       //   j < 0 ? j = 0 : j = j;
       //   returnArray = returnArray.concat(getDescendants(firstGeneration/*newArray*/[j], people, firstGeneration /*newArray*/));
       // } 
       return returnArray;
}

// Created a function for finding descendants of a person
function getDescendants(person, people, descendantsOfPerson = []){
    for (var i = 0; i < people.length; i++){
        if (people[i].parents.length !== 0){
            var id = person.id;
            var firstParentId = people[i].parents[0];
            var secondParentId = people[i].parents[1];
            if (id == firstParentId || id == secondParentId){
                descendantsOfPerson.push(people[i]);
                getDescendants(people[i], people, descendantsOfPerson);
            }
        }
    }
    return descendantsOfPerson;
}
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
    let foundPerson = filteredPerson;
}

//created a function to allow the user to search by name
function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  let newArray = people.filter(function (el) {
    if(el.firstName.toLowerCase() === firstName.toLowerCase() && el.lastName.toLowerCase() === lastName.toLowerCase()) {
      return true;
    }

  });

  return newArray;

  // TODO: find the person using the name they entered
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));

}

function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
<<<<<<< HEAD
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  // TODO: finish getting the rest of the information to display
=======
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
>>>>>>> 2ede2e3c708768950d3b2fe4c30620bc2c531608
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

<<<<<<< HEAD
// create a function to determine the descendants 

=======
function getFamily(person, people){
  let parents = getParents(person, people);
  let children = getChildren(person, people);
  let currentSpouse = getCurrentSpouse(person, people);
  let family = [person] 
  if(parents !== undefined) family = family.concat(parents);
  if(children !== undefined) family = family.concat(children);
  if(currentSpouse !== undefined) family = family.concat(currentSpouse);
  family.shift();
  return family
}


function getChildren(person, people){
  let children = people.filter(function (el){
  for(let i = 0; i <= el.parents.length; i++){
    if(el.parents[i] == person.id){
      return true
    }
  }
  });
  return children
}

function getParents(person, people){
  let parents = people.filter(function (el){
    for(let i = 0; i <= el.parents.length; i++){
      if(person.parents[i] == el.id){
        return true
      }
    }
  });
  return parents

}

function getCurrentSpouse(person, people){
  let currentSpouse = people.filter(function (el){
    if(el.currentSpouse == person.id){
      return true
    }
  });
  return currentSpouse
}

function getSiblings(person, people){
  let siblings = 
}
>>>>>>> 2ede2e3c708768950d3b2fe4c30620bc2c531608
