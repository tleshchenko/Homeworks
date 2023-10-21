"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  $('.header_slider').slick({
    dots: true,
    arrows: false,
    vertical: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000
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
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
});
lightGallery(document.querySelector('.grid_container'), _defineProperty({
  mode: 'lg-fade',
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  licenseKey: 'your_license_key'
}, "speed", 500));
var customIcon = L.icon({
  iconUrl: './img/map_point.png',
  iconSize: [106, 106]
});

function clickToMap() {
  var map = L.map('map_section').setView([51.500019794284505, 31.290861442327618], 16);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: ''
  }).addTo(map); // L.marker([51.49997972114016, 31.290904357672385]).addTo(map)
  //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  //     .openPopup();

  L.marker([51.49997972114016, 31.290904357672385], {
    icon: customIcon
  }).addTo(map);
}

document.querySelector('.map_button').addEventListener('click', clickToMap);

window.onscroll = function () {
  headerBackground();
};

var _100vh = Math.round(window.innerHeight);

function headerBackground() {
  if (document.documentElement.scrollTop > _100vh) {
    document.querySelector('.header_wrapper').classList.add('active');
  } else {
    document.querySelector('.header_wrapper').classList.remove('active');
  }
} // FORM VALIDATION 


var EMAIL_MIN_LENGHT = 8;
var regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

function useRegex(value) {
  return regex.test(value);
}

function checkEmailLenght() {
  var valueLenght = window.emailInput.value.length;
  var diff = valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;

  if (diff) {
    window.emailSymbolsDiffCount.textContent = diff;
    window.emailLenghtHelp.classList.remove('d-none');
  } else {
    window.emailLenghtHelp.classList.add('d-none');
  }
}

window.emailInput.addEventListener('input', checkEmailLenght);
document.addEventListener('DOMContentLoaded', checkEmailLenght);
var NAME_MIN_LENGHT = 5;

function checkNamelLenght() {
  var valueLenght = window.nameInput.value.length;
  var diff = valueLenght < NAME_MIN_LENGHT ? NAME_MIN_LENGHT - valueLenght : 0;

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

function validateForm(event) {
  var name, email, apiToken, chatId, text, urlString, response, resp;
  return regeneratorRuntime.async(function validateForm$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          resetValidation();
          name = window.nameInput.value;
          email = window.emailInput.value;

          if (email) {
            _context.next = 7;
            break;
          }

          window.emailHelp.classList.remove('d-none');
          return _context.abrupt("return", false);

        case 7:
          if (!useRegex(email)) {
            window.emailHelp.classList.remove('d-none');
          }

          apiToken = "6913256741:AAEdx40lUoXtxJ0Pc7G9pqlltsj9nXbAb_U";
          chatId = "-1002087541004";
          text = "\n        <b>Name </b> ".concat(name, "\n        <b>Email: </b> ").concat(email, "\n    ");
          urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage");
          _context.next = 14;
          return regeneratorRuntime.awrap(fetch(urlString, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: text,
              parse_mode: 'HTML'
            })
          }));

        case 14:
          response = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(response.json());

        case 17:
          resp = _context.sent;

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.nameInput.addEventListener('input', checkNamelLenght);
document.addEventListener('DOMContentLoaded', checkNamelLenght);
window.checkForm.addEventListener('submit', validateForm);