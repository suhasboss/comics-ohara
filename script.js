// ============================================
// COMICS OHARA
// Website interactions
// ============================================


// --------------------------------------------
// READER
// --------------------------------------------

function openReader() {
    const overlay = document.getElementById("readerOverlay");

    if (overlay) {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}


function closeReader() {
    const overlay = document.getElementById("readerOverlay");

    if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}


// Close reader when clicking outside the reader box

const readerOverlay = document.getElementById("readerOverlay");

if (readerOverlay) {

    readerOverlay.addEventListener("click", function (event) {

        if (event.target === readerOverlay) {
            closeReader();
        }

    });

}


// Close reader with Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeReader();
    }

});


// --------------------------------------------
// SEARCH
// --------------------------------------------

const searchInput = document.getElementById("comicSearch");
const comicCards = document.querySelectorAll(".comic-card");


function filterComics() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    const selectedGenre =
        document
            .getElementById("genreFilter")
            .value;

    comicCards.forEach(function (card) {

        const title =
            card
                .dataset
                .title
                .toLowerCase();

        const genre =
            card
                .dataset
                .genre
                .toLowerCase();

        const matchesSearch =
            title.includes(searchText);

        const matchesGenre =
            selectedGenre === "all" ||
            genre === selectedGenre;

        if (matchesSearch && matchesGenre) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterComics
    );

}


// --------------------------------------------
// GENRE FILTER
// --------------------------------------------

const genreFilter =
    document.getElementById("genreFilter");

if (genreFilter) {

    genreFilter.addEventListener(
        "change",
        filterComics
    );

}


// --------------------------------------------
// NAVIGATION SEARCH BUTTON
// --------------------------------------------

const searchButton =
    document.getElementById("searchBtn");

if (searchButton) {

    searchButton.addEventListener(
        "click",
        function () {

            const library =
                document.getElementById("library");

            if (library) {

                library.scrollIntoView({
                    behavior: "smooth"
                });

            }

            setTimeout(function () {

                if (searchInput) {
                    searchInput.focus();
                }

            }, 500);

        }
    );

}


// --------------------------------------------
// CARD ENTRANCE ANIMATION
// --------------------------------------------

comicCards.forEach(function (card, index) {

    card.style.animationDelay =
        `${index * 0.08}s`;

});


// --------------------------------------------
// CONSOLE MESSAGE
// --------------------------------------------

console.log(
    "⚡ Comics Ohara loaded successfully!"
);
