import { renderBooks } from "./renderBooks.js";

export function searchBooks(books) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredBooks = books.filter(function (book) {
            if (book.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderBooks(filteredBooks);
    };
}