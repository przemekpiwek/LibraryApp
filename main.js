//All books stored in a simple array
let myLibrary = [];
let bookshelf = document.getElementById('bookshelf');


function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//event handler for 'Add New' button, which will create variables from input values and input them to a function that create the book object
function createBook(event){
    event.preventDefault();

    let bookTitle = document.getElementById("booktitle").value; 
    let bookAuthor = document.getElementById("bookauthor").value;
    let bookPages = document.getElementById("bookpages").value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages);

}
//creates new book object and pushes to library array, then renders
function addBookToLibrary(bookTitle, bookAuthor, bookPages){
    myLibrary.push(new Book(bookTitle,bookAuthor,bookPages));
    updateLocalStorage(); 
    render();  
}

// Hooking the array up to the HTML with a render() function that loops through the array and displays each book on the page
function render(){

    myLibrary = JSON.parse(localStorage["myLibrary"]); 
    bookshelf.textContent = '';
    console.log(myLibrary);

    for (let index in myLibrary){ //loop through every book in myLibrary array and post it in HTML
        let bookCard = document.createElement("div");
        bookCard.classList.add("card");

        let header = document.createElement("h1");
        let headerText = document.createTextNode(`${myLibrary[index]["title"]}`);
        header.appendChild(headerText);

        let subheader = document.createElement("h2");
        let subheaderText = document.createTextNode(`${myLibrary[index]["author"]}`);
        subheader.appendChild(subheaderText);

        let pages = document.createElement("h3");
        let pagesText = document.createTextNode(`${myLibrary[index]["pages"]}`);
        pages.appendChild(pagesText);

        bookCard.appendChild(header);
        bookCard.appendChild(subheader);
        bookCard.appendChild(pages);
    
        bookshelf.appendChild(bookCard);
    } 
}
function updateLocalStorage(){ 
    window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

let button = document.getElementById('button');
button.addEventListener('click', createBook);



