class Book {
  constructor(title, author, ISBN, availability = true) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availability = availability;
  }
}


class Library {
  constructor() {
    this.books = [];
  }
  addbook(book) {
    this.books.push(book);
  }

  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  displayAvailableBooks() {
    console.log("Available Books:");
    this.books.forEach((book, index) => {
      if (book.availability) {
        console.log(`${index + 1}. ${book.title} by ${book.author}`);
      }
    });
  }
}

class ReferenceBook extends Book {
    constructor (title, author, ISBN, category, availability = true) {
        super(title, author, ISBN, availability);
        this.category = category;
    }
}

// Create instances of the Library, Book, and ReferenceBook classes
const library = new Library();

//Add books to the library
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780060935467");
const book3 = new Book("1984", "George Orwell", "9780451524935", "Dystopian Fiction");

library.addbook(book1);
library.addbook(book2);
library.addbook(book3);

//Display available books
library.displayAvailableBooks();

console.log("\nremoving book...");

//Remove a book from the library
library.removeBook("9780743273565");

//Display Available Books Again
library.displayAvailableBooks();
