"use strict";

function age() {
  var checkAge = parseInt(prompt('How old are you?'));

  if (!isNaN(checkAge)) {
    if (checkAge >= 0) {
      if (checkAge <= 11) {
        alert('wassup kid');
      }

      if (checkAge >= 12 && checkAge <= 17) {
        alert('maturing period');
      }

      if (checkAge >= 18 && checkAge <= 59) {
        alert('what a man');
      }

      if (checkAge >= 60 && checkAge <= 100) {
        alert('age means wisdom');
      }
    } else {
      alert('u are not borned yet');
      age();
    }
  } else {
    alert('number only');
    age();
  }
}

function numbersIntoSymbols() {
  var number = parseInt(prompt('Enter number from 0 to 9'));

  if (!isNaN(number)) {
    if (number >= 0 && number <= 9) {
      switch (number) {
        case 0:
          alert(')');
          break;

        case 1:
          alert('!');
          break;

        case 2:
          alert('@');
          break;

        case 3:
          alert('#');
          break;

        case 4:
          alert('$');
          break;

        case 5:
          alert('%');
          break;

        case 6:
          alert('^');
          break;

        case 7:
          alert('&');
          break;

        case 8:
          alert('*');
          break;

        case 9:
          alert('(');
          break;

        default:
          break;
      }
    } else {
      alert('only numbers from 0 to 9');
      numbersIntoSymbols();
    }
  } else {
    alert('numbers only');
    numbersIntoSymbols();
  }
}

function sum() {
  var firstNumber = parseInt(prompt("Enter first number"));
  var secondNumber = parseInt(prompt("Enter second number"));
  var a = firstNumber;
  var b = secondNumber;

  if (!isNaN(a && b)) {
    for (var _sum = 0; a <= b; a++) {
      _sum += a;
      console.log("sum of all numbers from ".concat(firstNumber, " to ").concat(secondNumber, " is ").concat(_sum));
    }
  } else {
    console.log("numbers only");
  }
}

function commonDivisor() {
  var comDiv;
  var firstNumber = parseInt(prompt('Enter first number'));
  var secondNumber = parseInt(prompt('Enter second number'));

  for (var i = 0; i <= firstNumber, i <= secondNumber; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      comDiv = 1;
    }
  }

  alert("common divisor of ".concat(firstNumber, " and ").concat(secondNumber, " is ").concat(comDiv));
}

function divisors() {
  var userNumber = parseInt(prompt("Enter a number, please"));

  for (var i = 0; i <= userNumber; i++) {
    userNumber / 1;

    if (userNumber % i === 0) {
      console.log(i);
    }
  }
}

function palindrom() {
  var number = prompt("Add number");

  if (number.length !== 0) {
    for (var i = 0; i < number.length; i++) {
      if (number[i] !== number[number.length - 1 - i]) {
        alert("".concat(number, " is not a palindrom"));
        return false;
      } else {
        alert("".concat(number, " is palindrom"));
        return false;
      }
    }
  } else {
    alert("try again");
    palindrom();
  }
}

function discount() {
  var purchaseAmount = parseInt(prompt('Enter purchase amount'));

  if (!isNaN(purchaseAmount)) {
    var _discount = 0;

    if (purchaseAmount <= 200) {
      alert("Discount of ".concat(purchaseAmount, " UAH will be ").concat(_discount, " %"));
    }

    if (purchaseAmount >= 200 && purchaseAmount <= 300) {
      _discount = 3;

      var _total = purchaseAmount - purchaseAmount / 100 * _discount;

      alert("Discount of ".concat(purchaseAmount, " UAH will be ").concat(_discount, " %.\n            Total price = ").concat(_total, " UAH"));
    }

    if (purchaseAmount >= 301 && purchaseAmount <= 500) {
      _discount = 5;
      total = purchaseAmount - purchaseAmount / 100 * _discount;
      alert("Discount of ".concat(purchaseAmount, " UAH will be ").concat(_discount, " %.\n            Total price = ").concat(total, " UAH"));
    }

    if (purchaseAmount >= 501 && purchaseAmount <= 1000) {
      _discount = 7;
      total = purchaseAmount - purchaseAmount / 100 * _discount;
      alert("Discount of ".concat(purchaseAmount, " UAH will be ").concat(_discount, " %.\n            Total price = ").concat(total, " UAH"));
    }
  } else {
    alert("Buy something");
    discount();
  }
}

function dayOfTheWeek() {
  var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var today = 0;

  while (confirm("Today is ".concat(day[today], ". Want to see next?"))) {
    today = (today + 1) % day.length;
  }
}

function guessNumber() {
  var minNumber = 0;
  var maxNumber = 100;
  var check = 0;

  function getNumber(minNumber, maxNumber) {
    var middle = parseInt(minNumber - maxNumber) / 2 + maxNumber;
    var isSuccess = confirm("Is your number is ".concat(middle, " ?"));

    if (isSuccess) {
      alert("Thank you for a game!");
      return false;
    } else {
      check++;
      var isLarger = "Your number is larger than ".concat(middle, "?");
      isLarger ? getNumber(middle, maxNumber) : getNumber(minNumber, middle);
    }
  }

  getNumber(minNumber, maxNumber);
}