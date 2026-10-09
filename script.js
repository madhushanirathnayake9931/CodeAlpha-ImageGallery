
// DARK / LIGHT MODE
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "🌙 Dark Mode";
    } else {
        themeBtn.innerHTML = "☀️ Light Mode";
    }
});


// FILTER BUTTONS
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Remove active class
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(function (item) {
            const category = item.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



// SEARCH
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    galleryItems.forEach(function (item) {
        const title = item
            .getAttribute("data-title")
            .toLowerCase();

        if (title.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});


// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription =
    document.getElementById("lightboxDescription");
const closeBtn =
    document.getElementById("closeBtn");
const prevBtn =
    document.getElementById("prevBtn");
const nextBtn =
    document.getElementById("nextBtn");

let currentIndex = 0;


// Get all images
const itemsArray = Array.from(galleryItems);



// OPEN LIGHTBOX


galleryItems.forEach(function (item, index) {

    item.addEventListener("click", function () {

        currentIndex = index;

        showImage(currentIndex);

        lightbox.classList.add("show");

    });

});



// SHOW IMAGE


function showImage(index) {

    const item = itemsArray[index];

    const image = item.querySelector("img");

    const title = item.querySelector("h3");

    const description = item.querySelector("p");


    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightboxTitle.textContent = title.textContent;

    lightboxDescription.textContent =
        description.textContent;

}


// NEXT IMAGE

nextBtn.addEventListener("click", function () {

    currentIndex++;
    if (currentIndex >= itemsArray.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);

});


// PREVIOUS IMAGE

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = itemsArray.length - 1;
    }
    showImage(currentIndex);

});


// CLOSE LIGHTBOX

closeBtn.addEventListener("click", function () {
    lightbox.classList.remove("show");
});


// Click outside image to close

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("show");

    }

});


// KEYBOARD SUPPORT
document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "ArrowRight") {
        currentIndex++;
        if (currentIndex >= itemsArray.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }


    if (event.key === "ArrowLeft") {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = itemsArray.length - 1;
        }
        showImage(currentIndex);
    }


    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }

});