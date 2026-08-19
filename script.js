const myLibrary = [];

class Book {

  constructor(title, author, pages, read) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    };
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeStatus() {
    if (this.read === 'read') {
      return this.read = 'not read yet';
    } else {
      return this.read = 'read';
    }
  }
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const addBook = new Book(title, author, pages, read);
  myLibrary.push(addBook);
};

function viewBookLibrary(){
  const bookLibraryContainer = document.querySelector(".library");
  bookLibraryContainer.textContent = "";
  for (const book in myLibrary) {
    if (!Object.hasOwn(myLibrary, book)) continue;

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
    bookRead.classList.add("card-read");
    bookRead.textContent = myLibrary[book].read;

    bookStatus = document.createElement('button');
    bookStatus.classList.add("card-status");
    bookStatus.textContent = "Change Read Status";
    bookStatus.setAttribute('data-id', myLibrary[book].id);

    bookButtons = document.createElement('div');
    bookButtons.classList.add("card-buttons");

    bookCard.append(bookTitle);
    bookCard.append(bookID);
    bookCard.append(bookAuthor);
    bookCard.append(bookPages);
    bookCard.append(bookRead);
    bookCard.append(bookStatus);
    bookCard.append(removeBook);
    bookLibraryContainer.append(bookCard);
  }
}


function addNewBook(){
  const modal = document.querySelector("#book-modal");
  const bookForm = document.forms[0];
  const submitForm = document.querySelector("#submit-form");
  const addButton = document.querySelector("#add-button");
  const closeButton = document.querySelector("#modal-close");
  addButton.addEventListener("click", ()=>{
    modal.showModal();
  });
  closeButton.addEventListener("click", () => {
      modal.close();
  });
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const read = bookForm.elements["read-the-book"].value;
    if (title && author && pages && read) {
      const addBook = new Book(title, author, pages, read);

      myLibrary.push(addBook);

      modal.close();
      bookForm.reset();
      viewBookLibrary();
    }
  });
}
addNewBook();


function removeBook() {

    const library = document.querySelector('.library');

    library.addEventListener('click', (e) => {
      const removeButton = e.target.closest('.remove-card');
      if(removeButton){
        const btn = removeButton.dataset.id;
        const bookList = myLibrary.findIndex(set => set.id !== btn);

        myLibrary.splice(bookList, 1);
        removeButton.closest('.card').remove();
      }
    });

}
removeBook();

function changeBookStatus() {

  const library = document.querySelector('.library');
  library.addEventListener('click', (e) => {

    const changeButton = e.target.closest('.card-status');
    if (changeButton) {
      const btn = changeButton.dataset.id;
      const bookList = myLibrary.find(set => set.id === btn);

      bookList.changeStatus();

      const card = changeButton.closest('.card');
      const cardRead = card.querySelector('.card-read');

      if (cardRead.textContent === 'read') {
        cardRead.textContent = 'not read yet';
      } else {
        cardRead.textContent = 'read';
      }
    }
  });

}
changeBookStatus();


