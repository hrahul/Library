let myLibrary = [];


function Book(title,author,pages,read) {
    this.title = title ;
    this.author = author;
    this.pages = pages;
    this.read = read ;
}

function addBookToLibrary(Book) {
    console.log(Book);
  myLibrary.push(Book);
}

btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    readStatus = document.querySelector('#read').value;
    let newBook = new Book(title,author,pages,read) ;
    addBookToLibrary(newBook);

    clear();


});

function clear()
{
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = " ";
}
myLibrary.forEach(i => {
    console.log(myLibrary[i]);
});

