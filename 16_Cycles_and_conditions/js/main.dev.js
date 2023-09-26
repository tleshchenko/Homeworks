"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral([" "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
  var minValue = 0;
  var maxValue = 100;
  var steps = 0;

  function action(minValue, maxValue) {
    var middle = parseInt((minValue - maxValue) / 2 + maxValue);
    var isSuccess = confirm("Your number is ".concat(middle, " ?"));

    if (isSuccess) {
      alert("Thanks for a game! We spent ".concat(steps, " steps"));
      return false;
    } else {
      steps++;
      var isLarger = confirm("Your number is larger than ".concat(middle, " ?"));
      isLarger ? action(middle, maxValue) : action(minValue, middle);
    }
  }

  action(minValue, maxValue);
}

function calcNextDate() {
  var userDate = prompt("Add any date");
  var dateArray = userDate.split('.');
  var day = +dateArray[0];
  var month = +dateArray[1];
  var year = +dateArray[2];

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day === 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day >= 31) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        }
      } else {
        if (day >= 28) {
          nextDay = 1;
          nextMonth++;
        }
      }

      break;
  }

  if (nextMonth > 12) {
    nextMonth = 1;
    nextDay = 1;
    nextYear++;
  }

  var addZero = function addZero(n) {
    return n < 10 ? "0".concat(n) : n;
  };

  alert("Next date: ".concat(addZero(nextDay), ".").concat(addZero(nextMonth), ".").concat(nextYear));
} // Functions 


function compareNumbers() {
  var firstNumber = parseInt(prompt("Enter first number"));
  var secondNumber = parseInt(prompt("Enter second number"));

  if (!isNaN(firstNumber) || !isNaN(secondNumber)) {
    if (firstNumber < secondNumber) {
      return -1;
    }

    if (firstNumber > secondNumber) {
      return 1;
    }

    if (firstNumber == secondNumber) {
      return 0;
    }
  } else {
    console.log("Only numbers please");
  }
}

function factorial() {
  var inputNumber = parseInt(prompt("Enter any number to calculate factorial"));

  if (!isNaN(inputNumber)) {
    var result = inputNumber;

    for (var i = 1; i < inputNumber; i++) {
      result *= i;
    }

    alert("Factorial of ".concat(inputNumber, " will be ").concat(result));
  } else {
    alert("Only number please");
  }
}

function Area() {
  var width = parseInt(prompt("Add width"));
  var lenght = parseInt(prompt("Add lenght"));

  if (!isNaN(width) && !isNaN(lenght)) {
    if (isNaN(width)) {
      var squareArea = lenght * lenght;
      alert("Square area is ".concat(squareArea));
    }

    if (isNaN(lenght)) {
      var _squareArea = width * width;

      alert("Square area is ".concat(_squareArea));
    } else {
      var rectangleArea = width * lenght;
      alert("Rectangle area is ".concat(rectangleArea));
    }
  } else {
    alert("Numbers only");
    Area();
  }
}

function perfectNumber() {
  var number = parseInt(prompt("Add any number"));

  if (!isNaN(number)) {
    var sumOfDivisors = function sumOfDivisors(number) {
      var sum = 0;

      for (var i = 1; i <= number && number % i === 0; i++) {
        sum += i;
      }

      return sum === 0;
    };
  }
}

function splitNumbers() {
  var numbers = prompt("Enter numbers separated by space").split(_templateObject());
  alert(numbers.join(""));
}

function carInfo() {
  var car = {
    manufacturer: 'Audi',
    model: 'A7 Sportback',
    year: 2019,
    averageSpeed: 208,
    fuelConsuption: 6,
    drivers: ['Andriy'],
    showInfo: function showInfo() {
      for (var key in car) {
        if (typeof car[key] !== 'function') {
          console.log("".concat(key, ": ").concat(car[key]));
        }
      }
    },
    addDrivers: function addDrivers(driverName) {
      this.drivers.push(driverName);
    },
    checkDriverName: function checkDriverName(driverName) {
      if (this.drivers.includes(driverName)) {
        console.log("".concat(driverName, " is in the drivers list"));
      } else {
        console.log("".concat(driverName, " is not in the drivers list"));
      }
    },
    countTime: function countTime(km) {
      var drivingTime = (km / this.averageSpeed).toFixed(1);
      var fuel = km / 100 * this.fuelConsuption;
      var stops = Math.floor(Math.floor(drivingTime) / 4);
      var total = (+drivingTime + +stops).toFixed(1);
      console.log("You need ".concat(drivingTime, " h. and ").concat(fuel, " liters of fuel to drive ").concat(km, " km. You need to take ").concat(stops, " stops."));
    }
  };
  car.showInfo();
  car.addDrivers('Volodymur');
  console.log(car.checkDriverName('Viktor'));
  console.log(car.checkDriverName('Andriy'));
  console.log(car.countTime(1600));
}

function timeCheck() {
  var time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    addHours: function addHours() {
      if (this.seconds > 59) {
        var newMinute = Math.floor(this.seconds / 60);
        this.minutes += newMinute;
        this.seconds %= 60;
      }

      if (this.minutes > 59) {
        var newHour = Math.floor(this.minutes / 60);
        this.hours += newHour;
        this.minutes %= 60;
      }

      if (this.hours > 12) {
        this.hours %= 12;
      }
    },
    showTime: function showTime() {
      addZero = function addZero(n) {
        return n < 10 ? "0".concat(n) : n;
      };

      for (var key in time) {
        if (typeof time[key] !== 'function') {
          return console.log("time is ".concat(addZero(this.hours), ":").concat(addZero(this.minutes), ":").concat(addZero(this.seconds), " sec."));
        }
      }
    },
    plusHour: function plusHour(addHour) {
      this.hours += addHour;
      this.addHours();
    },
    plusMin: function plusMin(addMin) {
      this.minutes += addMin;
      this.addHours();
    },
    plusSec: function plusSec(addSec) {
      this.seconds += addSec;
      this.addHours();
    }
  };
  time.hours = 23;
  time.minutes = 57;
  time.seconds = 30;
  time.showTime();
  time.plusHour(3);
  time.plusMin(15);
  time.plusSec(150);
  time.showTime();
}