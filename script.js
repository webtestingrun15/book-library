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

    const removeBook = document.createElement('button');
    removeBook.textContent = 'Remove';
    removeBook.classList = 'remove-card';
    removeBook.setAttribute('data-id', myLibrary[book].id);

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
    bookCard.append(removeBook);
    bookLibaryContainer.append(bookCard);
    // const element = myLibrary[book];
    // console.log(myLibrary[book].title);
  }
}

function addNewBook(){
  const modal = document.querySelector("#book-modal");
  const bookForm = document.forms[0];
  const submitForm = document.querySelector("#submit-form");
  submitForm.addEventListener("click", (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const read = bookForm.elements["read-the-book"].value;
    addBookToLibrary(title, author, pages, read);
    modal.close();
    viewBookLibrary();
  })
}
addNewBook();
viewBookLibrary();

function removeBook() {
  for (const book of myLibrary) {
  const btns = document.querySelectorAll('.remove-card');
  btns.forEach((btn) => {
    btn.addEventListener("click", () =>{
      if (book.id === btn.dataset.id){
        const bookList = myLibrary.find(set => set.id !== book.id);
        const bookIndex = myLibrary.indexOf(bookList);
        myLibrary.splice(bookIndex, 1); // 2nd parameter removes one item only
        if (btn.parentElement) {
          btn.parentElement.remove();
        }
      }
    })
  })
}
}
removeBook();
