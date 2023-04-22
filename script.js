// Create an object named Book with author, title, page and status properties and methods to read and not read
// Create a function that will return a string depending on the status of the book
// Create an array of several books
// Loop through the array and display the books on the page

// Create an object named Book with author, title, page and status properties and methods to read and not read
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
  };
}

// Create an array of several books
let books = [
    new Book("J.K. Rowling", "Harry Potter", 400, "not read"),
    new Book("J.R.R. Tolkien", "Lord of the Rings", 700, "read"),
    new Book("George R.R. Martin", "A Song of Ice and Fire", 1000, "not read"),
    new Book("Stephen King", "The Shining", 500, "read"),
    new Book("J.R.R. Tolkien", "The Hobbit", 300, "read"),
    new Book("J.K. Rowling", "Harry Potter and the Chamber of Secrets", 500, "not read"),
    new Book("J.K. Rowling", "Harry Potter and the Prisoner of Azkaban", 600, "read"),
];

// display the books on the page using console.log
books.forEach(book => console.log(book.info()));
