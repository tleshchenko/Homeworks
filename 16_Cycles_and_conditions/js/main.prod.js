"use strict";function age(){var a=parseInt(prompt("How old are you?"));isNaN(a)?(alert("number only"),age()):0<=a?(a<=11&&alert("wassup kid"),12<=a&&a<=17&&alert("maturing period"),18<=a&&a<=59&&alert("what a man"),60<=a&&a<=100&&alert("age means wisdom")):(alert("u are not borned yet"),age())}function numbersIntoSymbols(){var a=parseInt(prompt("Enter number from 0 to 9"));if(isNaN(a))alert("numbers only"),numbersIntoSymbols();else if(0<=a&&a<=9)switch(a){case 0:alert(")");break;case 1:alert("!");break;case 2:alert("@");break;case 3:alert("#");break;case 4:alert("$");break;case 5:alert("%");break;case 6:alert("^");break;case 7:alert("&");break;case 8:alert("*");break;case 9:alert("(")}else alert("only numbers from 0 to 9"),numbersIntoSymbols()}function sum(){var a=parseInt(prompt("Enter first number")),e=parseInt(prompt("Enter second number")),t=a,r=e;if(isNaN(t&&r))console.log("numbers only");else for(var n=0;t<=r;t++)n+=t,console.log("sum of all numbers from ".concat(a," to ").concat(e," is ").concat(n))}function commonDivisor(){for(var a,e=parseInt(prompt("Enter first number")),t=parseInt(prompt("Enter second number")),r=0;r<=t;r++)e%r==0&&t%r==0&&(a=1);alert("common divisor of ".concat(e," and ").concat(t," is ").concat(a))}function divisors(){for(var a=parseInt(prompt("Enter a number, please")),e=0;e<=a;e++)a%e==0&&console.log(e)}function palindrom(){var a=prompt("Add number");if(0!==a.length){var e=0;if(e<a.length)return a[e]!==a[a.length-1-e]?alert("".concat(a," is not a palindrom")):alert("".concat(a," is palindrom")),!1}else alert("try again"),palindrom()}function discount(){var a,e,t=parseInt(prompt("Enter purchase amount"));isNaN(t)?(alert("Buy something"),discount()):(a=0,t<=200&&alert("Discount of ".concat(t," UAH will be ").concat(a," %")),200<=t&&t<=300&&(e=t-t/100*(a=3),alert("Discount of ".concat(t," UAH will be ").concat(a," %.\n            Total price = ").concat(e," UAH"))),301<=t&&t<=500&&(total=t-t/100*(a=5),alert("Discount of ".concat(t," UAH will be ").concat(a," %.\n            Total price = ").concat(total," UAH"))),501<=t&&t<=1e3&&(total=t-t/100*(a=7),alert("Discount of ".concat(t," UAH will be ").concat(a," %.\n            Total price = ").concat(total," UAH"))))}function dayOfTheWeek(){for(var a=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],e=0;confirm("Today is ".concat(a[e],". Want to see next?"));)e=(e+1)%a.length}function guessNumber(){var n=0;!function a(e,t){var r=parseInt((e-t)/2+t);confirm("Your number is ".concat(r," ?"))?alert("Thanks for a game! We spent ".concat(n," steps")):(n++,confirm("Your number is larger than ".concat(r," ?"))?a(r,t):a(e,r))}(0,100)}function calcNextDate(){var a=prompt("Add any date").split("."),e=+a[0],t=+a[1],r=+a[2];if(isNaN(e)||isNaN(t)||isNaN(r))return!1;var n=1+e,o=t,c=r;switch(t){case 4:case 6:case 9:case 11:30==e&&(n=1,o++);break;case 1:case 3:case 5:case 7:case 8:case 10:case 12:31<=e&&(n=1,o++);break;case 2:r%4==0&&r%100!=0||r%400==0?29==e&&(n=1,o++):28<=e&&(n=1,o++)}12<o&&(n=o=1,c++);function s(a){return a<10?"0".concat(a):a}alert("Next date: ".concat(s(n),".").concat(s(o),".").concat(c))}