export function renderBooks(booksToRender) {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = "";

    booksToRender.forEach(function (book) {
        bookContainer.innerHTML += `<div class="book">
                                        <h2>${book.title}</h2>
                                        <h3>${book.author}</h3>
                                        <h4>${book.publisher}</h4>
                                    </div>`;
    });
}