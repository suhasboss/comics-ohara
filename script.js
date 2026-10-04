// ============================================
// COMICS OHARA
// Main JavaScript
// ============================================


// --------------------------------------------
// READ BUTTON
// --------------------------------------------

function startReading() {
    alert("The comic reader will be available soon!");
}


// --------------------------------------------
// SEARCH BUTTON
// --------------------------------------------

const searchButton = document.querySelector(".search-button");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const search = prompt(
            "🔎 What comic are you looking for?"
        );

        if (search) {

            alert(
                `Searching Comics Ohara for "${search}"...`
            );

        }

    });

}
