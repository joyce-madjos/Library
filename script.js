let bookTitle = document.getElementById("book-name");
let bookAuthor = document.getElementById("book-author");
let bookPages = document.getElementById("book-page");
let bookStatus = document.getElementById("book-status");
let switchBtn = document.getElementById("switch");
let emptyCard = document.getElementById("card");
let cardHolder = document.getElementById("card-holder");
let rightSide = document.getElementById("right-side");
let leftSide = document.getElementById("left-side");
let container = document.getElementById("container");
let circle = document.getElementById("circle");
let newTitle = document.getElementById("new-title");
let newAuthor = document.getElementById("new-author");
let newPages = document.getElementById("new-pages");
let newStatus = document.getElementById("new-status");
let modal = document.querySelector(".modal");
let addBookButton = document.getElementById("addBook");
var myLibrary = [];

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
function read(card, circle, bookStatus) {
  bookStatus.innerText = "Read";
  card.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
  circle.style.backgroundColor = "rgba(17, 234, 46, 0.5)";
}

// function to change the status of the book when unread
function unread(card, circle, bookStatus) {
  bookStatus.innerText = "Unread";
  card.style.backgroundColor = "rgba(222, 27, 27, 0.5)";
  circle.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
}

// add event listener to the add book button
addBookButton.addEventListener("click", function () {

  emptyCard.style.display = "none";

  myLibrary.push(
    new Book(newAuthor.value, newTitle.value, newPages.value, newStatus.value)
  );

  let index = myLibrary.length - 1;
  createCard(
    myLibrary[index].title,
    myLibrary[index].author,
    myLibrary[index].pages,
    myLibrary[index].status
  );

  createTitleCard(myLibrary[index].title);
});

var titleHolder = document.getElementById("title-holder");

function createTitleCard(title) {

  let titleCard = document.createElement("p");
  titleCard.classList.add("title");
  titleCard.textContent = title;

  // container.appendChild(leftSide);
  // leftSide.appendChild(titleHolder);
  titleHolder.appendChild(titleCard);

   document.body.appendChild(container);
  // container.appendChild(titleCard);
}

// function to create a card for the book
function createCard(title, author, page, status) {
  //  create the elements
  let card = document.createElement("div");
  card.classList.add("card");
  let circle = document.createElement("div");
  circle.classList.add("circle");
  let bookBody = document.createElement("div");
  bookBody.classList.add("book-body");
  let bookName = document.createElement("p");
  bookName.classList.add("book-name");
  let bookAuthor = document.createElement("p");
  bookAuthor.classList.add("author");
  let bookPages = document.createElement("p");
  bookPages.classList.add("pages");
  let bookStatus = document.createElement("p");
  bookStatus.classList.add("status");
  let switchLabel = document.createElement("label");
  switchLabel.classList.add("switch");
  let switchInput = document.createElement("input");
  switchInput.setAttribute("type", "checkbox");
  let switchSpan = document.createElement("span");
  switchSpan.classList.add("slider");

  // append the elements to the document
  container.appendChild(rightSide);
  rightSide.appendChild(cardHolder);
  cardHolder.appendChild(card);
  card.appendChild(circle);
  card.appendChild(bookBody);
  bookBody.appendChild(bookName);
  bookBody.appendChild(bookAuthor);
  bookBody.appendChild(bookPages);
  bookBody.appendChild(bookStatus);
  card.appendChild(switchLabel);
  switchLabel.appendChild(switchInput);
  switchLabel.appendChild(switchSpan);

  // set the text content of the book name, author, pages, and status elements
  bookName.textContent = title;
  bookAuthor.textContent = author;
  bookPages.textContent = page + " pages";

  // set the status of the book
  if (status == "1") {
    switchInput.checked = true;
    read(card, circle, bookStatus);
  } else if (status == "2") {
    switchInput.checked = false;
    unread(card, circle, bookStatus);
  }

  switchInput.addEventListener("click", function () {
    if (switchInput.checked == true) {
      read(card, circle, bookStatus);
    } else {
      unread(card, circle, bookStatus);
    }
  });

  // append the card to the document body
  document.body.appendChild(container);
}




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
