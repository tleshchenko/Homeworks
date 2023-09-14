"use strict";

function userName() {
  var heroName = promt("Add user name");

  if (heroName === null) {
    console.log("Try again, please");
  }

  if (heroName && heroName.lenght >= 2) {
    console.log("Hello, ".concat(heroName));
  }

  if (heroName.lenght < 2) {
    console.log("Name is too short");
  }
}

function ageCheck() {
  var userBirthday = parseInt(prompt('Add your birthday year'));
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var userAge = currentYear - userBirthday;

  if (!isNaN(userBirthday)) {
    if (currentYear < userBirthday) {
      console.log('you are not borned yet!');
    } else {
      var _userAge = currentYear - userBirthday;

      console.log(_userAge);
    }
  } else {
    console.log('Add valid Year');
    ageCheck();
  }
}