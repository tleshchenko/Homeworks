


$(document).ready(function () {
    $('.header_slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
    });
});

$(document).ready(function () {
    $('.news_slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '.prev_arrow',
        nextArrow: '.next_arrow',
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});

lightGallery(document.querySelector('.grid_container'), {
    mode: 'lg-fade',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    licenseKey: 'your_license_key',
    speed: 500,
});

const customIcon = L.icon({
    iconUrl: './img/map_point.png',


    iconSize: [106, 106]
});

function clickToMap() {
    const map = L.map('map_section').setView([51.500019794284505, 31.290861442327618], 16);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);

    // L.marker([51.49997972114016, 31.290904357672385]).addTo(map)
    //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    //     .openPopup();

    L.marker([51.49997972114016, 31.290904357672385], {
        icon: customIcon
    }).addTo(map);
}

document.querySelector('.map_button').addEventListener('click', clickToMap)

window.onscroll = function () {
    headerBackground()
};

let _100vh = Math.round(window.innerHeight);

function headerBackground() {
    if (document.documentElement.scrollTop > _100vh) {
        document.querySelector('.header_wrapper').classList.add('active');
    } else {
        document.querySelector('.header_wrapper').classList.remove('active');
    }
}

// FORM VALIDATION 


const EMAIL_MIN_LENGHT = 8;


const regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

function useRegex(value) {
    return regex.test(value);
}

function checkEmailLenght() {
    const valueLenght = window.emailInput.value.length;
    const diff = valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;
    if (diff) {
        window.emailSymbolsDiffCount.textContent = diff;
        window.emailLenghtHelp.classList.remove('d-none');
    } else {
        window.emailLenghtHelp.classList.add('d-none');
    }
}

window.emailInput.addEventListener('input', checkEmailLenght);
document.addEventListener('DOMContentLoaded', checkEmailLenght);



const NAME_MIN_LENGHT = 5;

function checkNamelLenght() {
    const valueLenght = window.nameInput.value.length;
    const diff = valueLenght < NAME_MIN_LENGHT ? NAME_MIN_LENGHT - valueLenght : 0;
    if (diff) {
        window.symbolsDiffCount.textContent = diff;
        window.nameLenghtHelp.classList.remove('d-none');
    } else {
        window.nameLenghtHelp.classList.add('d-none');
    }
}

function resetValidation() {
    window.emailHelp.classList.add('d-none');
}

async function validateForm(event) {
    event.preventDefault();
    resetValidation();

    const name = window.nameInput.value;
    const email = window.emailInput.value;

    if (!email) {
        window.emailHelp.classList.remove('d-none');
        return false;
    }

    if (!useRegex(email)) {
        window.emailHelp.classList.remove('d-none');
    }


    let apiToken = "6913256741:AAEdx40lUoXtxJ0Pc7G9pqlltsj9nXbAb_U";
    let chatId = "-1002087541004";
    let text = `
        <b>Name </b> ${name}
        <b>Email: </b> ${email}
    `;



    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage`;

    const response = await fetch(urlString, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'HTML'
        })
    });

    const resp = await response.json();
}

window.nameInput.addEventListener('input', checkNamelLenght);
document.addEventListener('DOMContentLoaded', checkNamelLenght);
window.checkForm.addEventListener('submit', validateForm);