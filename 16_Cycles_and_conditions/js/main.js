function age() {

    const checkAge = parseInt(prompt('How old are you?'));

    if (!isNaN(checkAge)) {
        if (checkAge >= 0) {
            if (checkAge <= 11) {
                alert('wassup kid');
            }
            if ((checkAge >= 12) && (checkAge <= 17)) {
                alert('maturing period');
            }
            if ((checkAge >= 18) && (checkAge <= 59)) {
                alert('what a man');
            }
            if ((checkAge >= 60) && ((checkAge <= 100))) {
                alert('age means wisdom');
            }
        } else {
            alert('u are not borned yet');
            age()
        }
    } else {
        alert('number only');
        age()
    }
}

function numbersIntoSymbols() {

    const number = parseInt(prompt('Enter number from 0 to 9'));

    if (!isNaN(number)) {
        if ((number >= 0) && (number <= 9)) {
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
        alert('numbers only')
        numbersIntoSymbols();
    }

}

function sum() {
    const firstNumber = parseInt(prompt(`Enter first number`));
    const secondNumber = parseInt(prompt(`Enter second number`));
    let a = firstNumber;
    let b = secondNumber;
    if (!isNaN(a && b)) {
        for (let sum = 0; a <= b; a++) {
            sum += a;
            console.log(
                `sum of all numbers from ${firstNumber} to ${secondNumber} is ${sum}`
            );
        }
    } else {
        console.log(`numbers only`);
    }
}

function commonDivisor() {
    let comDiv
    const firstNumber = parseInt(prompt('Enter first number'));
    const secondNumber = parseInt(prompt('Enter second number'));

    for (let i = 0; i <= firstNumber, i <= secondNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            comDiv = 1
        }

    } alert(`common divisor of ${firstNumber} and ${secondNumber} is ${comDiv}`)
}

function divisors() {
    const userNumber = parseInt(prompt(`Enter a number, please`));

    for (let i = 0; i <= userNumber; i++) {
        userNumber / 1;
        if (userNumber % i === 0) {
            console.log(i);
        }
    }
}

function palindrom() {

    let number = prompt(`Add number`);
    if (number.length !== 0) {
        for (let i = 0; i < number.length; i++) {
            if (number[i] !== number[number.length - 1 - i]) {
                alert(`${number} is not a palindrom`);
                return false;
            } else {
                alert(`${number} is palindrom`);
                return false;
            }
        }
    } else {
        alert(`try again`);
        palindrom();
    }
}

function discount() {

    const purchaseAmount = parseInt(prompt('Enter purchase amount'));

    if (!isNaN(purchaseAmount)) {
        let discount = 0;
        if (purchaseAmount <= 200) {
            alert(`Discount of ${purchaseAmount} UAH will be ${discount} %`);
        } if (purchaseAmount >= 200 && purchaseAmount <= 300) {
            discount = 3
            let total = purchaseAmount - (purchaseAmount / 100) * discount;
            alert(`Discount of ${purchaseAmount} UAH will be ${discount} %.
            Total price = ${total} UAH`);
        }
        if (purchaseAmount >= 301 && purchaseAmount <= 500) {
            discount = 5;
            total = purchaseAmount - (purchaseAmount / 100) * discount;
            alert(`Discount of ${purchaseAmount} UAH will be ${discount} %.
            Total price = ${total} UAH`);
        }
        if (purchaseAmount >= 501 && purchaseAmount <= 1000) {
            discount = 7;
            total = purchaseAmount - (purchaseAmount / 100) * discount;
            alert(`Discount of ${purchaseAmount} UAH will be ${discount} %.
            Total price = ${total} UAH`);
        }
    } else {
        alert(`Buy something`)
        discount()
    }
}

function dayOfTheWeek() {

    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let today = 0;

    while (confirm(`Today is ${day[today]}. Want to see next?`)) {
        today = (today + 1) % day.length;
    }
}

function guessNumber() {
    const minValue = 0;
    const maxValue = 100;
    let steps = 0;

    function action(minValue, maxValue) {
        const middle = parseInt(((minValue - maxValue) / 2) + maxValue);
        const isSuccess = confirm(`Your number is ${middle} ?`);

        if (isSuccess) {
            alert(`Thanks for a game! We spent ${steps} steps`);
            return false;
        } else {
            steps++;
            const isLarger = confirm(`Your number is larger than ${middle} ?`);
            isLarger ? action(middle, maxValue) : action(minValue, middle);
        }
    }
    action(minValue, maxValue);
}


function calcNextDate() {
    const userDate = prompt(`Add any date`);
    const dateArray = userDate.split('.');
    const day = +dateArray[0];
    const month = +dateArray[1];
    const year = +dateArray[2];

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;

    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:

            if (day === 30) {
                nextDay = 1
                nextMonth++
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
                nextMonth++
            }
            break;
        case 2:
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                if (day === 29) {
                    nextDay = 1;
                    nextMonth++
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

    const addZero = (n) => (n < 10 ? `0${n}` : n);

    alert(`Next date: ${addZero(nextDay)}.${addZero(nextMonth)}.${nextYear}`)
}


// Functions 

function compareNumbers() {

    const firstNumber = parseInt(prompt(`Enter first number`));
    const secondNumber = parseInt(prompt(`Enter second number`));

    if (!isNaN(firstNumber) || !isNaN(secondNumber)) {
        if (firstNumber < secondNumber) {
            return -1;
        } if (firstNumber > secondNumber) {
            return 1;
        } if (firstNumber == secondNumber) {
            return 0;
        }
    } else {
        console.log(`Only numbers please`);
    }
}

function factorial() {

    const inputNumber = parseInt(prompt(`Enter any number to calculate factorial`));

    if (!isNaN(inputNumber)) {
        let result = inputNumber;
        for (let i = 1; i < inputNumber; i++) {
            result *= i;
        } alert(`Factorial of ${inputNumber} will be ${result}`);
    }
    else {
        alert(`Only number please`);
    }
}

function Area() {

    const width = parseInt(prompt(`Add width`));
    const lenght = parseInt(prompt(`Add lenght`));


    if (!isNaN(width) && !isNaN(lenght)) {
        if (isNaN(width)) {
            let squareArea = lenght * lenght;
            alert(`Square area is ${squareArea}`);
        } if (isNaN(lenght)) {
            let squareArea = width * width;
            alert(`Square area is ${squareArea}`);
        } else {
            let rectangleArea = width * lenght;
            alert(`Rectangle area is ${rectangleArea}`)
        }
    } else {
        alert(`Numbers only`)
        Area()
    }
}

function perfectNumber() {

    const number = parseInt(prompt(`Add any number`));

    if (!isNaN(number)) {
        const sumOfDivisors = number => {
            let sum = 0;
            for (let i = 1; i <= number && number % i === 0; i++) {
                sum += i;
            } return sum === 0
        }
    }
}

function splitNumbers() {

    const numbers = prompt(`Enter numbers separated by space`).split` `;
    alert(numbers.join(""));
}

function carInfo() {

    const car = {
        manufacturer: 'Audi',
        model: 'A7 Sportback',
        year: 2019,
        averageSpeed: 208,
        fuelConsuption: 6,
        drivers: ['Andriy'],
        showInfo() {
            for (const key in car) {
                if (typeof car[key] !== 'function') {
                    console.log(`${key}: ${car[key]}`);
                }
            }
        },
        addDrivers(driverName) {
            this.drivers.push(driverName);
        },
        checkDriverName(driverName) {
            if (this.drivers.includes(driverName)) {
                console.log(`${driverName} is in the drivers list`);
            } else {
                console.log(`${driverName} is not in the drivers list`);
            }
        },
        countTime(km) {
            const drivingTime = (km / this.averageSpeed).toFixed(1);
            const fuel = (km / 100) * this.fuelConsuption;
            const stops = Math.floor(Math.floor(drivingTime) / 4);
            const total = (+drivingTime + +stops).toFixed(1);
            console.log(`You need ${drivingTime} h. and ${fuel} liters of fuel to drive ${km} km. You need to take ${stops} stops.`
            );
        }
    }
    car.showInfo();
    car.addDrivers('Volodymur');
    console.log(car.checkDriverName('Viktor'));
    console.log(car.checkDriverName('Andriy'));
    console.log(car.countTime(1600));
}

function timeCheck() {

    const time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        addHours() {
            if (this.seconds > 59) {
                const newMinute = Math.floor(this.seconds / 60);
                this.minutes += newMinute;
                this.seconds %= 60;
            }
            if (this.minutes > 59) {
                const newHour = Math.floor(this.minutes / 60);
                this.hours += newHour;
                this.minutes %= 60;
            }
            if (this.hours > 12) {
                this.hours %= 12;
            }
        },
        showTime() {
            addZero = (n) => (n < 10) ? (`0${n}`) : n;
            for (const key in time) {
                if (typeof time[key] !== 'function') {
                    return console.log(`time is ${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)} sec.`);
                }
            }
        },
        plusHour(addHour) {
            this.hours += addHour;
            this.addHours();
        },
        plusMin(addMin) {
            this.minutes += addMin;
            this.addHours();
        },
        plusSec(addSec) {
            this.seconds += addSec;
            this.addHours();
        },
    }
    time.hours = 23;
    time.minutes = 57;
    time.seconds = 30;
    time.showTime()
    time.plusHour(3)
    time.plusMin(15)
    time.plusSec(150)
    time.showTime()
}   
