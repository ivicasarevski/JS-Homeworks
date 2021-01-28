function Book(title, author, readingStatus){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.readingStatus = readingStatus;

    this.readindStatusInfo = function(){
        if(readingStatus === "true"){
            return `Already read "${this.bookTitle}" by ${this.bookAuthor}.`
            } else {
                return `You still need to read "${this.bookTitle}" by ${this.bookAuthor}.`
        }
    }
}

title = prompt("Please enter a book title");
author = prompt("Please enter a book author");
readingStatus = prompt("Raed this book? true/false");

let yourBook = new Book(title, author, readingStatus);

console.log(yourBook.readindStatusInfo());