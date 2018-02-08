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

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  let filteredPerson;
  switch(displayOption){
    case "info":
    filteredPerson = displayPerson(person);
    break;
    case "family":
    filteredPerson = displayPeople(getFamily(person, people));
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
    let foundPerson = filteredPerson;
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  // TODO: find the person using the name they entere
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
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
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
