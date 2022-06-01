const sing = document.querySelector(".icon");
const logo = document.querySelector(".logo");
const navBook = document.querySelector(".navOne");
const navLibrary = document.querySelector(".navTwo");
const singBox = document.querySelector(".singPopUp");
const sideBar = document.querySelector(".sidebar");
const searchO = document.querySelector(".searchO");
const searchT = document.querySelector(".searchT");
const creatBook = document.querySelector(".creatBook");
const creatLibrary = document.querySelector(".creatLibrary");
const library = document.querySelector(".library");
const mainCont = document.querySelector('.mainContent');
const addBook = document.querySelector('.addBook');
const bookCont = document.querySelector('.bookContent');
const actualBook = document.querySelector('.actualBook');
const libraryCont = document.querySelector('.libraryContetn');

//form const
const bookForm = document.querySelector(".bookForm");
const libraryForm = document.querySelector(".libraryForm");
const SubmitL = document.getElementById("submL");
const closer = document.querySelector(".closer");
const closerL = document.querySelector(".closerL");
const Submit = document.getElementById("subm");

// import info
let nam;
let creator;
let sagaAmount = 0;
let sSAmount = 0;
let bookCount =0;

let singBoxOn = true;
let searchOn =true;

let generalLibrary =[];
let allLibraries = [];
let myLibary = [];

// book&library enter function

function Book (name, author, year, pageNumber, gender,  saga, read){
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.year = year;
    this.saga = saga;
    this.read = read;
    this.gender = gender;
    this.favorite
    this.on = false;
}

function Libraries (name, user, books, favorite){
    this.name = name;
    this.user = user;
    this.book = books;
    this.favorite = favorite;
}

function addBookToLibery(book){
    generalLibrary.push = book;
}

function addLibraryToColl(lib){
    allLibraries.push = lib;
}

//events for entering books&libraries

creatBook.addEventListener('click', e => {
    bookForm.classList.remove('hidden');
    bookForm.classList.remove('selectorClose');
});

creatLibrary.addEventListener('click', e => {
    libraryForm.classList.remove('hidden');
    libraryForm.classList.remove('selectorClose');
});

addBook.addEventListener('click', e => {
    bookForm.classList.remove('hidden');
    bookForm.classList.remove('selectorClose');
});

bookForm.addEventListener('click', e => {
    if (e.target === bookForm) {
        bookForm.classList.add('selectorClose');
    };  
});

libraryForm.addEventListener('click', e => {
    if (e.target === libraryForm) {
        libraryForm.classList.add('selectorClose');
    };  
});

closer.addEventListener('click', e => {
    if (e.target === closer) {
        bookForm.classList.add('selectorClose');
    };  
});

closerL.addEventListener('click', e => {
    if (e.target === closerL) {
        libraryForm.classList.add('selectorClose');
    };  
});

// functions for forms 

Submit.addEventListener('click', e => { //book form
    bookForm.classList.add('selectorClose');
    const Title = document.getElementById("Title");
    const Author = document.getElementById("Author");
    const Pages = document.getElementById("Pages");
    const Year = document.getElementById("Year");
    const Gender = document.getElementById("Gender");
    const Saga = document.getElementById("Saga");
    const Read = document.getElementById("Read");
    if (Saga.checked){
        Saga.value = 'Yes';
    }
    if (Read.checked){
        Read.value = 'Yes';
    }
    if (Title.value === "" || Author.value === "") {
        return;
    } else {
        const book = new Book(Title.value, Author.value, Year.value, Pages.value, Gender.value, Saga.value, Read.value);
        addBookToLibery(book);
        checkForGroups(book);
        addBookToCont(book);
        console.log(book);
        Title.value = '';
        Author.value = '';
        Pages.value ='';
        Year.value = '';
        Gender.value = '';
        Read.checked = false;
        Saga.checked = false;
    }
});

function addBookToCont(book){ //book function
    //other var
    let title = book.name;
    let author = book.author;
    let pageNumber = book.pageNumber;
    let year = book.year;
    let gender = book.gender;
    let saga = book.saga;
    let read = book.read;

    //cont to add 
    const HTML = `
    <div class="collections">
        <h2 class="title">${title}</h2>
        <p class="author">${author}</p>
        <p class="gender">${gender}</p>
        <p class="year">${year}</p>
        <p class="pages">${pageNumber}</p>
        <p class="saga">${saga}</p>
        <p class="read">${read}</p>
        <div class="edit">
            <button class="ed">Edit Book</button>
            <button class="rm">Remove Book</button>
        </div>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = HTML;
    const tCollections = template.content.querySelector('.collections');
    actualBook.appendChild(tCollections)
};

SubmitL.addEventListener('click', e => { //library form
    libraryForm.classList.add('selectorClose');
    const Name = document.getElementById("Name");
    const Creator = document.getElementById("Creator");

    if (Name.value === "" || Creator.value === "") {
        return;
    } else {
        const lib = new Libraries(Name.value, Creator.value);
        addLibraryToColl(lib)
        console.log(lib);
        Name.value = '';
        Creator.value = '';
    }
});

function addLibraryToCont(lib){ //book function
    nam = lib.name;
    creator = lib.user;
    libraryCont.appendChild(template)
};

// Cont Management Functions

function bMessCont (){
    const message = document.querySelector('.bContMess');
    if (bookCount === 0){
        message.textContent = 'No Books Found';
    } else {
        message.classList.add('hidden');
    }
    console.log(generalLibrary);
};

function lMessCont (){
    const message = document.querySelector('.lContMess');
    if (allLibraries.length === 0){
        message.textContent = 'No Libraries Found';
    } else {
        message.classList.add('hidden');
    }
    console.log(generalLibrary);
};

function checkForGroups(variable){
    const sagaBooks = document.querySelector('.allS');
    const allBooks = document.querySelector('.allB');
    const ssBooks = document.querySelector('.allSS');
    for (let i = 0; i <= generalLibrary.length; i++){
        bookCount++
        allBooks.textContent = `${bookCount}`;
    }
    if (variable.saga === 'Yes'){
        sagaAmount++;
        sagaBooks.textContent = `${sagaAmount}`;
    }
    if (parseInt(variable.pageNumber) < 150){
       sSAmount++;
       ssBooks.textContent = `${sSAmount}`;
    }
    bMessCont();
};

// other page functions 

sing.addEventListener('click', e => {
    if (singBoxOn === true) {
        singBox.classList.remove('hidden');
        exitAll();
        singBoxOn = false;
    } else {
        exitAll();
    }
});
searchT.addEventListener('click', e => {
    if (searchOn === true) {
        searchO.classList.remove('hidden');
        searchT.classList.add('hidden');
        searchOn = false;
    } else if (searchOn === false) {
        searchO.classList.add('hidden');
        searchT.classList.remove('hidden');
        searchOn = true;
    }
});

navBook.addEventListener('click', e => {
    mainCont.classList.add('hidden');
    library.classList.remove('hidden');
    sideBar.classList.remove('hidden');
    bookCont.classList.remove('hidden');
    libraryCont.classList.add('hidden');
    bMessCont();
});

navLibrary.addEventListener('click', e => {
    mainCont.classList.add('hidden');
    library.classList.remove('hidden');
    sideBar.classList.remove('hidden');
    libraryCont.classList.remove('hidden');
    bookCont.classList.add('hidden');
    lMessCont();
});

logo.addEventListener('click', e => {
    mainCont.classList.remove('hidden');
    sideBar.classList.add('hidden');
    library.classList.add('hidden');
});

function exitAll() {
    if (searchOn === false) {
        searchO.classList.add('hidden');
        searchT.classList.remove('hidden');
        searchOn = true;
    }
    if (singBoxOn === false) {
        singBox.classList.add('hidden');
        singBoxOn = true;
    }
};
