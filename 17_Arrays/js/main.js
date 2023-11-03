const shoppingList = [{
        name: 'Gorillaz - Demon Days',
        artist: 'Gorillaz',
        album: 'Demon Days',
        year: 2005,
        isPurchased: true,
        price: 35,
        amount: 2,
        total: 70
    },
    {
        name: 'Kanye West - My Dark Beautiful Twidted Fantasy',
        artist: 'Kanye West',
        album: 'My Dark Beautiful Twisted Fantasy',
        year: 2010,
        isPurchased: false,
        price: 20,
        amount: 1,
        total: 20
    },
    {
        name: 'James Blake - Assume Form',
        artist: 'James Blake',
        album: 'Assume Form',
        year: 2021,
        isPurchased: true,
        price: 40,
        amount: 3,
        total: 120
    },
    {
        name: 'Arctic Monkeys - The Car',
        artist: 'Massive Attack',
        album: 'Helioland',
        year: 2010,
        isPurchased: true,
        price: 20,
        amount: 7,
        total: 140
    },
    {
        name: 'Kendrick Lamar - DAMN',
        artist: 'Kendrick Lamar',
        album: 'DAMN.',
        year: 2017,
        isPurchased: false,
        price: 15,
        amount: 4,
        total: 60
    }

]

function showShoppingList() {
    console.log(shoppingList);
}

document.querySelectorAll('.button')[0].addEventListener('click', showShoppingList);

function sortedByPurchase() {
    shoppingList.sort((a, b) => (a.isPurchased === b.isPurchased) ? 0 : a.isPurchased ? -1 : 1);
    console.log(shoppingList);
}

document.querySelectorAll('.button')[1].addEventListener('click', sortedByPurchase)


function productIsPurchased() {
        for (let i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].name === name) {
                shoppingList[i].isPurchased = true;
                console.log(`Продукт "${name}" було позначено як придбаний.`);
                return;
            }
        }
        console.log(`Продукт "${name}" не знайдено у списку покупок.`);
    }


document.querySelectorAll('.button')[2].addEventListener('.click', productIsPurchased)