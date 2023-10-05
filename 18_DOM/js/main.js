var playList = [

    {
        author: "Led Zeppelin",
        song: "Stairway to Heaven"
    },
    {
        author: "Queen",
        song: "Bohemian Rapsody"
    },
    {
        author: "Lynyrd Skyryd",
        song: "Free Bird"
    },
    {
        author: "Deep Purple",
        song: "Smoke on the Water"
    },
    {
        author: "Jimi Hendrix",
        song: "All Along The Watchover"
    },
    {
        author: "AC/DC",
        song: "Back in Black"
    },
    {
        author: "QUEEN",
        song: "We Will Rock You"
    },
    {
        author: "Metallica",
        song: "Enter Sandman"
    }
];

function createPlaylist() {

    const list = document.querySelector('.song_list');

    let htmlToInsert = '<ul class="list_items">';
    for (let i = 0; i < playList.length; i++) {
        htmlToInsert += `<li><div class="author"><span>Author:</span> ${playList[i].author}</div><div class="song"><span>Song:</span> ${playList[i].song}</div></li>`;
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

const text = document.querySelector('.light_button').innerHTML = "Switch to green";

function switchLight() {
    document.querySelector('.light').classList.toggle('green')
}

function switchToYellow() {
    document.querySelector('.light').classList.toggle('yellow') 
}

function switchToRed() {
    document.querySelector('.light').classList.toggle('red')
}



function trafficLight() {


    let currentText = document.querySelector('.light_button').innerHTML;

    if (currentText === "Switch to green") {
        buttonText = "Switch to red"
    } else if (currentText === "Switch to red") {
        buttonText = "Switch to yellow"
        switchToRed()
    } else {
        buttonText = "Switch to green"
        switchToYellow()
    } 

    document.querySelector('.light_button').innerHTML = buttonText;
}

document.querySelector('.light_button').addEventListener("click", trafficLight)
document.querySelector('.light_button').addEventListener("click", switchLight)














// document.querySelector('.light_button').addEventListener("click", );