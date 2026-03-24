const myLibrary = [];

function Book(title, author, pages, read) {
  if(!new.target){
    throw Error("You must use the 'new' operator to call the constructor");
  }
  // the constructor...
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  myLibrary.push(new Book(title, author, pages, read));
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
addBookToLibrary("Dune", "Frank Herbert", "780", "not read yet");
addBookToLibrary("Brave New World", "George Orwell", "298", "read");
addBookToLibrary("Ender's Game", "Orson Scott Card", "324", "not read yet");
addBookToLibrary("1984", "George Orwell", "328", "read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "281", "read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "279", "not read yet");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "180", "read");
addBookToLibrary("Jane Eyre", "Charlotte Brontë", "507", "read");
addBookToLibrary("Wuthering Heights", "Emily Brontë", "323", "not read yet");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1178", "not read yet");
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "309", "read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "273", "not read yet");
addBookToLibrary("Moby Dick", "Herman Melville", "585", "not read yet");

// console.log(myLibrary);
function viewBookLibrary(){
  for (const book in myLibrary) {
    if (!Object.hasOwn(myLibrary, book)) continue;

    const bookLibaryContainer = document.querySelector(".library");

    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const bookTitle = document.createElement("h2");
    bookCard.classList.add("card-title");
    bookTitle.textContent = myLibrary[book].title;

    bookID = document.createElement('p');
    bookID.textContent = myLibrary[book].id;

    bookAuthor = document.createElement('p');
    bookAuthor.textContent = myLibrary[book].author;

    bookPages = document.createElement('p');
    bookPages.textContent = myLibrary[book].pages;

    bookRead = document.createElement('p');
    bookRead.textContent = myLibrary[book].read;

    bookCard.append(bookTitle);
    bookCard.append(bookID);
    bookCard.append(bookAuthor);
    bookCard.append(bookPages);
    bookCard.append(bookRead);
    bookLibaryContainer.append(bookCard);
    // const element = myLibrary[book];
    // console.log(myLibrary[book].title);
  }
}

viewBookLibrary();
