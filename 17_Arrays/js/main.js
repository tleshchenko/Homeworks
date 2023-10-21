const shoppingList = [{
        artist: 'Gorillaz',
        album: 'Demon Days',
        year: 2005,
        isPurchased: true,
        price: 35,
        amount: 2,
        total: 70
    },
    {
        artist: 'Kanye West',
        album: 'My Dark Beautiful Twisted Fantasy',
        year: 2010,
        isPurchased: false,
        price: 20,
        amount: 1,
        total: 20
    },
    {
        artist: 'James Blake',
        album: 'Assume Form',
        year: 2021,
        isPurchased: true,
        price: 40,
        amount: 3,
        total: 120
    },
    {
        artist: 'Arctic Monkeys',
        album: 'The Car',
        year: 2023,
        isPurchased: false,
        price: 50,
        amount: 1,
        total: 50
    },
    {
        artist: 'Massive Attack',
        album: 'Helioland',
        year: 2010,
        isPurchased: true,
        price: 20,
        amount: 7,
        total: 140
    },
    {
        artist: 'Kendrick Lamar',
        album: 'DAMN.',
        year: 2017,
        isPurchased: true,
        price: 15,
        amount: 4,
        total: 60
    }

]

function showShoppingList() {
    console.log(shoppingList);
}

document.querySelectorAll('.button')[0].addEventListener('click', showShoppingList);

function sortedByPurchase () {
    shoppingList.sort((a, b) => {
        if (a.isPurchased && !b.isPurchased) {
            return 1;
        } else if (!a.isPurchased && b.isPurchased) {
            return -1;
        }
        return 0;
    });
    
    console.log(shoppingList);
}

document.querySelectorAll('.button')[1].addEventListener('click', sortedByPurchase)




