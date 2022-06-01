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

/*
What is WAI-ARIA?
WAI-ARIA stands for - deep breath - the Web Accessibility Initiative’s 
Accessible Rich Internet Applications specification. The purpose of WAI-ARIA 
(often referred to as just ARIA) is to define a way to make web content 
more accessible when native HTML is unable to do so. Think of ARIA as 
something that fills in the accessible gaps left by native HTML.

It’s important to note that ARIA can only modify the semantics or 
context of an element. ARIA can’t:

modify an element’s appearance,
modify an element’s behavior,
add focusability, or
add keyboard event handling.
When you use ARIA, you will usually have to take additional steps 
to add in any missing semantics or functionality. Remember the Keyboard 
Navigation lesson and how we had to add in functionality to <div> “buttons”?

The Five Rules of ARIA
ARIA can be extremely powerful when used correctly, but it can be 
equally as dangerous when used incorrectly. Because of this, you 
should keep in mind that no ARIA is better than bad ARIA, even when 
you have the best intentions. The WCAG have something called “The five 
rules of ARIA,” which as you may have guessed are rules you should follow 
when using ARIA. Although we don’t cover all of the terms mentioned below, 
it’s still important to understand the rules themselves, especially if you 
decide to dive deeper into ARIA on your own.

Always use native HTML elements and attributes over ARIA when possible.

Never change native semantics, unless you have no other choice.

All interactive ARIA controls must be usable with a keyboard.

Never use role='presentation' or aria-hidden='true' on focusable elements.

All interactive elements must have an accessible name.

he Accessibility Tree
Before we get into a couple of the ARIA attributes available to us, it’s 
important to know some basics of what the accessibility tree is, as it will 
help you understand just what those attributes are actually doing.

The accessibility tree is based on the DOM, something you should be very 
familiar with by now. While the DOM represents nodes and objects that make 
up a web page, the accessibility tree contains only the accessibility related 
information that will be used by assistive technologies. The way ARIA works 
is by modifying properties of the objects that make up this accessibility
tree. For this lesson, we’re only going to focus on two of these properties:

Name: Also known as the “accessible name”, this is what assistive technologies 
announce to a user and what separates elements of the same type from one 
another. The name may be set by one or more native labels, including the 
text contents of an element, the <label> element, or the alt attribute, to 
name a few.
Description: This is what assistive technologies announce in addition to its 
accessible name.

ARIA Labels
ARIA labels help users of assistive technologies better understand the content 
on a web page by overriding native labels or providing additional descriptive 
text. Unlike the <label> element, ARIA labels aren’t limited to being used on 
only a select few elements, though they still have their own limitations.

You may remember being warned against using the id attribute earlier in the 
curriculum. To briefly recap, normally you want to avoid overusing id 
attributes or even using it when it isn’t necessary (which more often than 
not, it isn’t, and you should stick with using classes). There are several 
ARIA attributes, however, that actually require another element to have an 
id.

When using such ARIA attributes, you would provide an id to one element, and 
you would then pass in that id value as another element’s ARIA attribute value. 
This creates a link between the elements, similar to how a <label> element’s 
for attribute creates a link to an input’s id. Of the three types of ARIA 
labels mentioned below, both aria-labelledby and aria-describedby are two of 
the ARIA attributes that require another element to be given an id.

aria-label
The aria-label attribute overrides any native label and modifies the name 
property in the accessibility tree, though it’s best used when an element 
doesn’t already have a native label. When you add aria-label to an element, 
you pass in a string as the value, which will become that elements accessible 
name. aria-label doesn’t work on every HTML element, though. Adding the 
attribute to a plain <div> or a <span> will have no effect, for example.

A common use for this attribute can be for the “close” button often seen in 
menus or modals:

<button type='button' aria-label='Close menu'>X</button>
Instead of a screen reader announcing, “X, button”, which wouldn’t make any 
sense to the user, it would announce, “Close menu, button”. Another way you 
could use aria-label is on landmark elements (our Semantic HTML lesson gets 
another shoutout… again!):

<nav aria-label='main navigation'>...</nav>
Once a screen reader reaches the above HTML, it would announce “Main 
navigation, navigation landmark”. If you had multiple navigation elements 
on a page, you could give each a different aria-label value in order to 
separate them from one another, making them more understandable for screen 
reader users. Pretty neat, huh?

One thing you should avoid using aria-label for is trying to change how a word 
is phonetically announced. Certain words may not get announced correctly by a 
screen reader, and you may have a temptation to try and fix this. To put it 
simply: don’t. You may end up fixing how a word is announced by a screen 
reader, but that “fix” could end up making no sense when announced by other 
assistive technologies like a braille reader.

aria-labelledby
The aria-labelledby attribute overrides both native labels as well as the 
aria-label attribute. When you use this attribute, the accessible name of the 
labeled element (the one with the aria-labelledby attribute) has its 
accessible name changed to a concatenated string of the text contents or 
alt attributes of the labeling elements (the ones whose id are passed in).

What’s great about aria-labelledby is that you can pass in any number of id 
references, and you can even have an element reference itself. One thing to 
keep in mind, though, is that you can’t pass in the same reference multiple 
times, as any subsequent references after the first will be ignored.

<!-- Here's the labelling element -->
<h2 id='label'>Shirts</h2>

<!-- And here's the labelled element. Note the order of the ID references 
passed in -->
<button type='button' id='shop-btn' aria-labelledby='label shop-btn'>Shop 
Now</button>
The HTML above would be announced by a screen reader as, “Shirts, shop now, 
button”. This can make multiple “shop now” buttons on a page unique from one 
another and thus provide additional context, making the page more 
understandable.

Another great thing about aria-labelledby is that even if a labeling element 
is visually hidden, either by the hidden HTML attribute or with CSS, it will 
still modify the accessible name of the labeled element. This can be useful 
if you want to label an element for users of assistive technologies, but you 
don’t want that element’s label (or labels) to be visible to sighted users.

Although it may work somewhat similarly to the native <label> element, 
aria-labelledby does not have the same event handling by default. This is 
functionality you would have to add in yourself via JavaScript.

<!-- Clicking the <label> element gives focus to the input element -->
<label for='name'>Name:</label>
<input id='name' type='text' />

<!-- Clicking the <div> element won't give focus to the input element -->
<div id='label'>Name:</div>
<input type='text' aria-labelledby='label' />
aria-describedby
The aria-describedby attribute modifies the description property in the 
accessibility tree. Similar to the aria-labelledby attribute, when you use 
this attribute you pass in the id values of other elements as the 
aria-describedby value, and the elements whose id value are passed in can 
also be visually hidden.

<label>Password:
  <input type='password' aria-describedby='password-requirements' />
</label>

<!-- Meaningful text + ARIA! -->
<span id='password-requirements'>Password must be at least 10 characters 
long.</span>
When the <input> element receives focus, a screen reader would announce, 
“Password, edit protected, password must be at least ten characters long.” 
This immediately notifies a screen reader user of any requirements for the 
password they want to choose, any time the input receives focus.

Hiding Content from the Accessibility Tree
Similar to how you can visually hide elements with the hidden HTML attribute 
or the displayand visibility CSS properties, you can use the aria-hidden 
attribute to hide certain elements, such as decorative images and icons, 
from the accessibility tree. The difference with aria-hidden, however, is 
that the element will remain visible for sighted users. This can be especially 
useful when you want to add an icon inside of another element. For example, 
if we were to use Material Icons inside of a button:

<!-- Example 1 -->
<button type='button'>
  <span class='material-icons'>add</span>
  Add Book
</button>

<!-- Example 2 -->
<button type='button'>
  <span class='material-icons' aria-hidden='true'>add</span>
  Add Book
</button>
While both of the above examples would look visually identical, the button in 
Example 1 would be announced by a screen reader as, “Add add book, button”. 
The text content of the <span> and the text content of the button itself are 
concatenated as the accessible name of the button. The button in Example 2, 
however, hides the <span> from the accessibility tree so its text content 
isn’t added to the button’s accessible name, meaning a screen reader would 
correctly announce “Add book, button”.

Be careful when using this attribute, though. When you give an element 
aria-hidden='true', all children of that element will also become hidden 
to the accessibility tree. Adding aria-hidden='false' to a child element 
won’t have any effect if one of its parents still has aria-hidden='true', 
either.

You should also be careful not to give an element aria-hidden='true' if it 
is focusable. Doing so would cause nothing to be announced when the element 
receives focus, which would confuse users that use both a screen reader and 
navigate the page via a keyboard.
*/