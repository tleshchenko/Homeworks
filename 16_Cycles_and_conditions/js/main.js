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

    const minNumber = 0;
    const maxNumber = 100;
    let check = 0;

    function getNumber(minNumber, maxNumber) {
        const middle = parseInt(minNumber - maxNumber) / 2 + maxNumber;
        const isSuccess = confirm(`Is your number is ${middle} ?`);

        if (isSuccess) {
            alert(`Thank you for a game!`);
            return false;
        } else {
            check++;
            const isLarger = (`Your number is larger than ${middle}?`);
            isLarger
                ? getNumber(middle, maxNumber)
                : getNumber(minNumber, middle);
        }
    }
    getNumber(minNumber, maxNumber);
}

