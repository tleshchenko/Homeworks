function userName() {
    const heroName = prompt(`Add user name`);

    if (heroName === null) {
        console.log(`Try again, please`);
    }

    if (heroName && heroName.length >= 2) {
        console.log(`Hello, ${heroName}`);
    }

    if (heroName.length < 2) {
        console.log(`Name is too short`);
    }
}

function ageCheck() {
    const userBirthday = parseInt(prompt(`Add you birthday year`));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userAge = currentYear - userBirthday;


    if (!isNaN(userBirthday)) {
        if (currentYear < userBirthday) {
            console.log(`you are not borned yet!`);
        } else {
            const userAge = currentYear - userBirthday;
            console.log(userAge);
        }
    } else {
        console.log(`Add valid Year`);
        ageCheck()
    }
}

function squarePerimeter() {

    const squareSideLenght = parseInt(prompt('Input square lenght'));
    if (!isNaN(squareSideLenght)) {
        if (squareSideLenght <= 0) {
            console.log(`try again please`);
            squarePerimeter()
        }
        else {
            const squarePerimeter = squareSideLenght * 4;
            console.log(`square perimeter is ${squarePerimeter}`);
        }

    } else {
        console.log(`NUMBERS, OK?!`);
        squarePerimeter()
    }
}

function circleArea() {

    const circleRadius = parseInt(prompt(`input circle radius`));

    if (!isNaN(circleRadius)) {
        if (circleRadius <= 0) {
            console.log(`try again please`);
            circleArea()

        } else {
            const circleArea = (Math.PI * Math.pow(circleRadius, 2));
            console.log(`Circle Area is ${circleArea}`);
        }
    } else {
        console.log(`And again, NUMBERS ONLY!`);
        circleArea()
    }
}

function movementSpeed() {

    const kilometers = parseInt(prompt(`how much kilometers between two cities`));
    const movementTime = parseInt(prompt(`in what time you want arrive`));

    if (!isNaN(kilometers) || !isNaN(movementTime)) {
        if (kilometers <= 0 || movementTime <= 0) {
            console.log(`you should stay at home i guess`);
        } else {
            (kilometers <= 0 || movementTime <= 0)
            const movementSpeed = (kilometers / movementTime);
            console.log(`your speed should be ${movementSpeed} km/h`);
        }
    } else {
        console.log(`we cant count letters`);
        movementSpeed()
    }
}


function currencyConverter() {

    const eur = 0.93;
    const usd = parseInt(prompt(`how much usd you want to exchange?`));
    const convert = eur * usd;

    if (!isNaN(usd)) {
        if (usd <= 0) {
            console.log(`nothing to exchange, soory m8`);
            currencyConverter()
        }
        else {
            console.log(`it will be ${convert.toFixed(2)} €`);
        }
    } else {
        console.log(`try again mb`);
        currencyConverter()
    }

}

function hardDrive() {

    const fileSize = 820;
    const hardDriveSize = parseInt(prompt(`add hard drive size in MB`));

    if (hardDriveSize >=820) {
        const files = (`${Math.floor(hardDriveSize / fileSize)}`)
        console.log(`it will be ${files} files`);

    } else {
        console.log(`so what?`);
        hardDrive()
    }
}


function chocolate() {
    const startMoney = parseInt(prompt(`how much money you have&`));
    const chocolatePrice = parseInt(prompt(`how much chocolate cost?`));
    const pieces = (Math.floor(startMoney / chocolatePrice))
    const moneyLeft = (startMoney - (chocolatePrice * pieces)).toFixed(2);

    if (!isNaN(chocolatePrice) && !isNaN(startMoney)) {
        console.log(`you can buy ${pieces} chocolates`);
        console.log((`you have ${moneyLeft} uah left`));
    }else {
        console.log(`only numbers please`);
    }


}



