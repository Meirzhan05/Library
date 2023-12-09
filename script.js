const anchor = document.querySelector("a");
const dialog = document.querySelector("dialog");
const button = document.querySelector("#add-btn");
let removeButton;

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}  

anchor.addEventListener('click', () => {
    dialog.showModal();
});

button.addEventListener("click", () => {

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");

    const book = new Book(title.value, author.value, pages.value);
 

    addBookToLibrary(book); 
    dialog.close();
    
    title.value = "";
    author.value = "";
    pages.value = "";
});



function addBookToLibrary(book) {
    const booksDiv = document.querySelector("#books");
    const newDiv = document.createElement("div");
    removeButton = document.createElement("button");

    removeButton.innerText = "Remove"; 
    removeButton.id = "remove-btn";

    removeButton.addEventListener("click", function() {
        this.parentNode.remove()

    });

    newDiv.id = "book";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = `Name: ${book.title}`;
    p2.innerText = `Author: ${book.author}`;
    p3.innerText = `Pages: ${book.pages}`;
    
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
    newDiv.appendChild(removeButton);

    booksDiv.appendChild(newDiv);
    
    title.value = "";
    author.value = "";
    pages.value = "";
}
