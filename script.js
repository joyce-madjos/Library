let bookTitle = document.getElementById("book-title");




// Get the modal
let modal = document.getElementById("the-modal");

// Get the button that opens the modal
let btn = document.getElementById("new-book");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






// An object named Book with author, title, page and status properties and methods to read and not read
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  };
}

// An array of several books
let books = [
    new Book("J.K. Rowling", "Harry Potter", 400, "not read"),
    new Book("J.R.R. Tolkien", "Lord of the Rings", 700, "read"),
    new Book("George R.R. Martin", "A Song of Ice and Fire", 1000, "not read"),
    new Book("Stephen King", "The Shining", 500, "read"),
    new Book("J.R.R. Tolkien", "The Hobbit", 300, "read"),
    new Book("J.K. Rowling", "Harry Potter and the Chamber of Secrets", 500, "not read"),
    new Book("J.K. Rowling", "Harry Potter and the Prisoner of Azkaban", 600, "read"),
];

// Display the books on the page using console.log
books.forEach(book => console.log(book.info()));
