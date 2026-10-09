// ===============================
// TOPIC DATA
// ===============================

const topicData = {

    kingdoms: {

        title: "Ancient Kingdoms",

        description:
            "Discover the ancient cities, kingdoms and historical places of Sri Lanka.",

        images: [

            {
                image: "images/anuradhapura.jpg",
                title: "Anuradhapura",
                description:
                    "One of the most important ancient capitals of Sri Lanka."
            },

            {
                image: "images/polonnaruwa.jpg",
                title: "Polonnaruwa",
                description:
                    "An ancient city filled with historical monuments and ruins."
            },

            {
                image: "images/dambadeniya.jpg",
                title: "Dambadeniya",
                description:
                    "A historic royal capital of medieval Sri Lanka."
            },

            {
                image: "images/yapahuwa.jpg",
                title: "Yapahuwa",
                description:
                    "An ancient rock fortress with a famous stone staircase."
            },

            {
                image: "images/kurunegala.jpg",
                title: "Kurunegala",
                description:
                    "An important ancient capital surrounded by beautiful hills."
            },

            {
                image: "images/gampola.jpg",
                title: "Gampola",
                description:
                    "The medieval Sinhalese royal capital in the central highlands of Sri Lanka"
            },

            {
                image: "images/kotte.jpg",
                title: "Kotte",
                description:
                    "Powerful medieval Sinhalese kingdom that flourished from 1415 to 1597 CE"
            },

        ]

    },

    elephants: {
        title: "Elephants & Tuskers",
        description: "Discover the majestic elephants of Sri Lanka.",
        images: [
            {
                image: "images/elephant.jpg",
                title: "Sri Lankan Elephant",
                description: "The majestic giant of Sri Lanka."
            },
            {
                image: "images/tusker.jpg",
                title: "The Majestic Tusker",
                description: "A symbol of Sri Lankan heritage."
            },
            {
                image: "images/elephant1.jpg",
                title: "Power of Elephant",
                description: "A symbol of Sri Lankan heritage."
            },
            {
                image: "images/elephant2.jpg",
                title: "Sri Lankan Family of Elephant",
                description: "A family of Sri Lankan heritage."
            },
            {
                image: "images/elephant3.jpg",
                title: "Sri Lankan Elephant Babies",
                description: "A baby symbol of Sri Lankan heritage."
            }
        ]
    }

};



// ===============================
// GET TOPIC FROM URL
// ===============================

const params =
    new URLSearchParams(window.location.search);

const topicName =
    params.get("topic") || "kingdoms";

const topic =
    topicData[topicName];



// ===============================
// DISPLAY TOPIC
// ===============================

document.getElementById("topicTitle").textContent =
    topic.title;

document.getElementById("topicDescription").textContent =
    topic.description;



// ===============================
// CREATE IMAGES
// ===============================

const topicGallery =
    document.getElementById("topicGallery");


topic.images.forEach(function(item, index) {

    const card =
        document.createElement("div");

    card.className = "topic-card";
    topicGallery.appendChild(card);

    card.innerHTML = `

        <img src="${item.image}"
             alt="${item.title}">

        <div class="topic-card-info">

            <span>ANCIENT KINGDOMS</span>

            <h3>${item.title}</h3>

            <p>${item.description}</p>

        </div>

    `;


    card.addEventListener("click", function() {

        openLightbox(index);

    });


    topicGallery.appendChild(card);

});



// ===============================
// LIGHTBOX
// ===============================

const lightbox =
    document.getElementById("topicLightbox");

const lightboxImage =
    document.getElementById("topicLightboxImage");

const lightboxTitle =
    document.getElementById("topicLightboxTitle");

const lightboxDescription =
    document.getElementById("topicLightboxDescription");

let currentIndex = 0;



function openLightbox(index) {

    currentIndex = index;

    showImage();

    lightbox.classList.add("show");

}



function showImage() {

    const item =
        topic.images[currentIndex];


    lightboxImage.src =
        item.image;

    lightboxImage.alt =
        item.title;

    lightboxTitle.textContent =
        item.title;

    lightboxDescription.textContent =
        item.description;

}



// ===============================
// NEXT
// ===============================

document.getElementById("topicNext")
    .addEventListener("click", function() {

        currentIndex++;

        if (currentIndex >= topic.images.length) {

            currentIndex = 0;

        }

        showImage();

    });



// ===============================
// PREVIOUS
// ===============================

document.getElementById("topicPrev")
    .addEventListener("click", function() {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex =
                topic.images.length - 1;

        }

        showImage();

    });



// ===============================
// CLOSE
// ===============================

document.getElementById("topicClose")
    .addEventListener("click", function() {

        lightbox.classList.remove("show");

    });



lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});



// ===============================
// KEYBOARD
// ===============================

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("show")) {

        return;

    }


    if (event.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= topic.images.length) {

            currentIndex = 0;

        }

        showImage();

    }


    if (event.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex =
                topic.images.length - 1;

        }

        showImage();

    }


    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }

});



// ===============================
// BACK BUTTON
// ===============================

function goBack() {

    window.location.href = "index.html";

}

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML =
            "🌙 Dark Mode";

    } else {

        themeBtn.innerHTML =
            "☀️ Light Mode";

    }

});