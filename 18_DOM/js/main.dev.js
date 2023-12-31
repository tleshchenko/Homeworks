"use strict";

var playList = [{
  author: "Led Zeppelin",
  song: "Stairway to Heaven"
}, {
  author: "Queen",
  song: "Bohemian Rapsody"
}, {
  author: "Lynyrd Skyryd",
  song: "Free Bird"
}, {
  author: "Deep Purple",
  song: "Smoke on the Water"
}, {
  author: "Jimi Hendrix",
  song: "All Along The Watchover"
}, {
  author: "AC/DC",
  song: "Back in Black"
}, {
  author: "QUEEN",
  song: "We Will Rock You"
}, {
  author: "Metallica",
  song: "Enter Sandman"
}];

function createPlaylist() {
  var list = document.querySelector('.song_list');
  var htmlToInsert = '<ul class="list_items">';

  for (var i = 0; i < playList.length; i++) {
    htmlToInsert += "<li><div class=\"author\"><span>Author:</span> ".concat(playList[i].author, "</div><div class=\"song\"><span>Song:</span> ").concat(playList[i].song, "</div></li>");
  }

  htmlToInsert += '</ul>';
  list.innerHTML = htmlToInsert;
}

function showModal() {
  document.querySelector('.modal_wrapper').classList.add('active');
  document.querySelector('.container').classList.add('active');
}

function closeModal() {
  document.querySelector('.modal_wrapper').classList.remove('active');
  document.querySelector('.container').classList.remove('active');
}

var activeIndex = 0;
var circleCollection = document.querySelectorAll('.circle');

function colorSwitch() {
  document.querySelector('.circle.active').classList.remove('active');
  circleCollection[activeIndex].classList.add('active');
  activeIndex < circleCollection.length - 1 ? activeIndex++ : activeIndex = 0;
}