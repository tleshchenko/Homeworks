"use strict";function _templateObject(){var e=_taggedTemplateLiteral([" "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,a){return a=a||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}function age(){var e=parseInt(prompt("How old are you?"));isNaN(e)?(alert("number only"),age()):0<=e?(e<=11&&alert("wassup kid"),12<=e&&e<=17&&alert("maturing period"),18<=e&&e<=59&&alert("what a man"),60<=e&&e<=100&&alert("age means wisdom")):(alert("u are not borned yet"),age())}function numbersIntoSymbols(){var e=parseInt(prompt("Enter number from 0 to 9"));if(isNaN(e))alert("numbers only"),numbersIntoSymbols();else if(0<=e&&e<=9)switch(e){case 0:alert(")");break;case 1:alert("!");break;case 2:alert("@");break;case 3:alert("#");break;case 4:alert("$");break;case 5:alert("%");break;case 6:alert("^");break;case 7:alert("&");break;case 8:alert("*");break;case 9:alert("(")}else alert("only numbers from 0 to 9"),numbersIntoSymbols()}function sum(){var e=parseInt(prompt("Enter first number")),a=parseInt(prompt("Enter second number")),t=e,r=a;if(isNaN(t&&r))console.log("numbers only");else for(var n=0;t<=r;t++)n+=t,console.log("sum of all numbers from ".concat(e," to ").concat(a," is ").concat(n))}function commonDivisor(){for(var e,a=parseInt(prompt("Enter first number")),t=parseInt(prompt("Enter second number")),r=0;r<=t;r++)a%r==0&&t%r==0&&(e=1);alert("common divisor of ".concat(a," and ").concat(t," is ").concat(e))}function divisors(){for(var e=parseInt(prompt("Enter a number, please")),a=0;a<=e;a++)e%a==0&&console.log(a)}function palindrom(){var e=prompt("Add number");if(0!==e.length){var a=0;if(a<e.length)return e[a]!==e[e.length-1-a]?alert("".concat(e," is not a palindrom")):alert("".concat(e," is palindrom")),!1}else alert("try again"),palindrom()}function discount(){var e,a,t=parseInt(prompt("Enter purchase amount"));isNaN(t)?(alert("Buy something"),discount()):(e=0,t<=200&&alert("Discount of ".concat(t," UAH will be ").concat(e," %")),200<=t&&t<=300&&(a=t-t/100*(e=3),alert("Discount of ".concat(t," UAH will be ").concat(e," %.\n            Total price = ").concat(a," UAH"))),301<=t&&t<=500&&(total=t-t/100*(e=5),alert("Discount of ".concat(t," UAH will be ").concat(e," %.\n            Total price = ").concat(total," UAH"))),501<=t&&t<=1e3&&(total=t-t/100*(e=7),alert("Discount of ".concat(t," UAH will be ").concat(e," %.\n            Total price = ").concat(total," UAH"))))}function dayOfTheWeek(){for(var e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a=0;confirm("Today is ".concat(e[a],". Want to see next?"));)a=(a+1)%e.length}function guessNumber(){var n=0;!function e(a,t){var r=parseInt((a-t)/2+t);confirm("Your number is ".concat(r," ?"))?alert("Thanks for a game! We spent ".concat(n," steps")):(n++,confirm("Your number is larger than ".concat(r," ?"))?e(r,t):e(a,r))}(0,100)}function calcNextDate(){var e=prompt("Add any date").split("."),a=+e[0],t=+e[1],r=+e[2];if(isNaN(a)||isNaN(t)||isNaN(r))return!1;var n=1+a,o=t,c=r;switch(t){case 4:case 6:case 9:case 11:30==a&&(n=1,o++);break;case 1:case 3:case 5:case 7:case 8:case 10:case 12:31<=a&&(n=1,o++);break;case 2:r%4==0&&r%100!=0||r%400==0?29==a&&(n=1,o++):28<=a&&(n=1,o++)}12<o&&(n=o=1,c++);function s(e){return e<10?"0".concat(e):e}alert("Next date: ".concat(s(n),".").concat(s(o),".").concat(c))}function compareNumbers(){var e=parseInt(prompt("Enter first number")),a=parseInt(prompt("Enter second number"));if(isNaN(e)&&isNaN(a))console.log("Only numbers please");else{if(e<a)return-1;if(a<e)return 1;if(e==a)return 0}}function factorial(){var e=parseInt(prompt("Enter any number to calculate factorial"));if(isNaN(e))alert("Only number please");else{for(var a=e,t=1;t<e;t++)a*=t;alert("Factorial of ".concat(e," will be ").concat(a))}}function Area(){var e=parseInt(prompt("Add width")),a=parseInt(prompt("Add lenght"));isNaN(e)||isNaN(a)?(alert("Numbers only"),Area()):(isNaN(e)&&alert("Square area is ".concat(a*a)),isNaN(a)?alert("Square area is ".concat(e*e)):alert("Rectangle area is ".concat(e*a)))}function perfectNumber(){var e=parseInt(prompt("Add any number"));isNaN(e)}function splitNumbers(){var e=prompt("Enter numbers separated by space").split(_templateObject());alert(e.join(""))}