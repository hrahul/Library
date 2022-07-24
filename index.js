let myLibrary = [];

//Book Object
function Book(title,author,pages) {
    this.title = title ;
    this.author = author;
    this.pages = pages;
   // this.read = read ;
}
//Add Book Object to array
function addBookToLibrary(Book) {
    myLibrary.push(Book);
    myLibrary.forEach(obj=>{  
        const right = document.querySelector('.right');
        const card = document.createElement('div');
        const title =  document.createElement('p');
        const author =  document.createElement('p');
        const pages =  document.createElement('p');
        card.classList.add('card');
        title.textContent = obj.title;
        author.textContent = obj.author;
        pages.textContent = obj.pages;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        right.appendChild(card);

    });

}

btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    let newBook = new Book(title,author,pages) ;
    addBookToLibrary(newBook);

});


function clear()
{
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = " ";
}



