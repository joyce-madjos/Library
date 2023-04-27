let bookTitle = document.getElementById("book-name");
let bookAuthor = document.getElementById("book-author");
let bookPages = document.getElementById("book-page");
let bookStatus = document.getElementById("book-status");
let switchBtn = document.getElementById("switch");
let card = document.getElementById("card");
let circle = document.getElementById("circle");
let newTitle = document.getElementById("new-title");
let newAuthor = document.getElementById("new-author");
let newPages = document.getElementById("new-pages");
let newStatus = document.getElementById("new-status");
let modal = document.querySelector(".modal");
let addBookButton = document.getElementById("addBook");

// function constructor for the Book object
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  };
}

// function to change the status of the book when read
function read() {
  bookStatus.innerText = "Read";
  card.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
  circle.style.backgroundColor = "rgba(17, 234, 46, 0.5)";
}

// function to change the status of the book when unread
function unread() {
  bookStatus.innerText = "Unread";
  card.style.backgroundColor = "rgba(222, 27, 27, 0.5)";
  circle.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
}

// add event listener to the add book button
addBookButton.addEventListener("click", function () {

  // create a new element for the new book
  let newBookCard = document.createElement("div");
  newBookCard.classList.add("card");
  let newBookTitle = document.createElement("h2");
  newBookTitle.classList.add("book-name");
  let newBookAuthor = document.createElement("h3");
  newBookAuthor.classList.add("book-author");
  let newBookPages = document.createElement("h3");
  newBookPages.classList.add("book-page");
  let newBookStatus = document.createElement("h3");
  newBookStatus.classList.add("book-status");
  let newBookSwitch = document.createElement("label");
  newBookSwitch.classList.add("switch");
  let newBookInput = document.createElement("input");
  newBookInput.setAttribute("type", "checkbox");
  newBookInput.setAttribute("id", "switch");
  let newBookSpan = document.createElement("span");
  newBookSpan.classList.add("slider");
  newBookSpan.classList.add("round");
  let newBookDelete = document.createElement("button");
  newBookDelete.classList.add("delete");
  newBookDelete.innerText = "Delete";

  // append the new book to the page
  newBookSwitch.appendChild(newBookInput);
  newBookSwitch.appendChild(newBookSpan);
  newBookCard.appendChild(newBookTitle);
  newBookCard.appendChild(newBookAuthor);
  newBookCard.appendChild(newBookPages);
  newBookCard.appendChild(newBookStatus);
  newBookCard.appendChild(newBookSwitch);
  newBookCard.appendChild(newBookDelete);
  document.body.appendChild(newBookCard);

  // get the values from the input fields
  let newAuthor = document.getElementById("new-author");  
  let newTitle = document.getElementById("new-title");
  let newPages = document.getElementById("new-pages");
  let newStatus = document.getElementById("new-status");

  // LEGIT UNG MGA NASA BABA |
  //                         V

  // create a new book object
  let newBook = new Book(
    newAuthor.value,
    newTitle.value,
    newPages.value,
    newStatus.value
  );
  // display the new book on the page
  bookTitle.innerText = newBook.title;
  bookAuthor.innerText = newBook.author;
  bookPages.innerText = newBook.pages;
  // get the status of the new book from dropdown
  if (newStatus.value == "1") {
    switchBtn.checked = true;
    read();
  } else if (newStatus.value == "2") {
    switchBtn.checked = false;
    unread();
  }
  // clear the input fields after adding a new book
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newStatus.value = "";

});

// change the status of the book when the switch is clicked
switchBtn.addEventListener("click", function () {
  if (switchBtn.checked == true) {
    read();
  } else {
    unread();
  }
});

// ------------------------------

// An array of several books
// let books = [
//   new Book("J.K. Rowling", "Harry Potter", 400, "not read"),
//   new Book("J.R.R. Tolkien", "Lord of the Rings", 700, "read"),
//   new Book("George R.R. Martin", "A Song of Ice and Fire", 1000, "not read"),
//   new Book("Stephen King", "The Shining", 500, "read"),
//   new Book("J.R.R. Tolkien", "The Hobbit", 300, "read"),
//   new Book("J.K. Rowling", "Harry Potter and the Chamber of Secrets", 500, "not read"),
//   new Book("J.K. Rowling", "Harry Potter and the Prisoner of Azkaban", 600, "read"),
// ];

// Display the books on the page using console.log
// books.forEach(book => console.log(book.info()));

// let bookOne = new Book("J.K. Rowling", "Harry Potter", 400, "Read");
// bookTitle.innerText = bookOne.title;
// bookAuthor.innerText = bookOne.author;
// bookPages.innerText = bookOne.pages;
// bookStatus.innerText = bookOne.status;

// if (bookOne.status === "Read") {
//   switchBtn.checked = true;
// }
