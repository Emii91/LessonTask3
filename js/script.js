import { renderBooks } from "./ui/renderBooks.js";
import { searchBooks } from "./ui/searchBooks.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://noroff.herokuapp.com/v1/books";

async function getBooks() {
    try {
        const response = await fetch(url);
        const book = await response.json();

        console.log(book);

        renderBooks(book);
        searchBooks(book);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".book-container");
    }
}

getBooks();