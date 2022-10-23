export function renderBooks(booksToRender) {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = "";

    booksToRender.forEach(function (book) {
        bookContainer.innerHTML += `<div class="book">
                                        <h4>${book.title}</h4>
                                    </div>`;
    });
}