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
    searchByTraits(people);
    break;
    default:
    alert("Wrong! Please try again, following the instructions dummy. :)");
    app(people); // restart app
    break;
  }
}

// app(people);

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;
  let foundPerson;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      displayPeople(filteredPeople);
      break;
  
    case "weight":
      filteredPeople = searchByWeight(people);
      displayPeople(filteredPeople);
      break;
    case "eye color":
      filteredPeople = searchEyeColor(people);
      displayPeople(filteredPeople);
      break;
    case "occupation":
      filteredPeople = searchOccupation(people);
      displayPeople(filteredPeople);
      break;
    case "gender":
      filteredPeople = searchGender(people);
      displayPeople(filteredPeople);
      break;
    case "age": 
      filteredPeople = searchAge(people);
      displayPeople(filteredPeople);
      break;




    // so on and so forth
    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }


  // ask if they want to search again
    // if yes, call searchByTraits
  userSearchChoice = prompt("Would you like to search again based on the new list of people?");

    if(userSearchChoice === "yes"){
      searchByTraits(filteredPeople);
    }
    else{
    foundPerson = filteredPeople[0];
  }
  
  mainMenu(foundPerson, people);

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

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

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

    // TODO: get person's family
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
    let foundPerson = filteredPerson[0];
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
 

  // TODO: find the person using the name they entered

}

// alerts a list of people
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

