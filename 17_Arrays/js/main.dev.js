"use strict";

var shoppingList = [{
  name: 'Gorillaz - Demon Days',
  artist: 'Gorillaz',
  album: 'Demon Days',
  year: 2005,
  isPurchased: true,
  price: 35,
  amount: 2,
  total: 70
}, {
  name: 'Kanye West - My Dark Beautiful Twidted Fantasy',
  artist: 'Kanye West',
  album: 'My Dark Beautiful Twisted Fantasy',
  year: 2010,
  isPurchased: false,
  price: 20,
  amount: 1,
  total: 20
}, {
  name: 'James Blake - Assume Form',
  artist: 'James Blake',
  album: 'Assume Form',
  year: 2021,
  isPurchased: true,
  price: 40,
  amount: 3,
  total: 120
}, {
  name: 'Arctic Monkeys - The Car',
  artist: 'Massive Attack',
  album: 'Helioland',
  year: 2010,
  isPurchased: true,
  price: 20,
  amount: 7,
  total: 140
}, {
  name: 'Kendrick Lamar - DAMN',
  artist: 'Kendrick Lamar',
  album: 'DAMN.',
  year: 2017,
  isPurchased: false,
  price: 15,
  amount: 4,
  total: 60
}];

function showShoppingList() {
  console.log(shoppingList);
}

document.querySelectorAll('.button')[0].addEventListener('click', showShoppingList);

function sortedByPurchase() {
  shoppingList.sort(function (a, b) {
    return a.isPurchased === b.isPurchased ? 0 : a.isPurchased ? -1 : 1;
  });
  console.log(shoppingList);
}

document.querySelectorAll('.button')[1].addEventListener('click', sortedByPurchase);

function productIsPurchased() {
  for (var i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name === name) {
      shoppingList[i].isPurchased = true;
      console.log("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \"".concat(name, "\" \u0431\u0443\u043B\u043E \u043F\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u044F\u043A \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0439."));
      return;
    }
  }

  console.log("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \"".concat(name, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u043F\u043E\u043A\u0443\u043F\u043E\u043A."));
}

document.querySelectorAll('.button')[2].addEventListener('.click', productIsPurchased);