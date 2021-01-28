function Book(title, author, readingStatus){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.readingStatus = readingStatus;

    this.readindStatusInfo = function(){
        if(this.readingStatus ){
            return `Already read "${this.bookTitle}" by ${this.bookAuthor}.`
            } if (this.readingStatus = "false") {
                return `You still need to read "${this.bookTitle}" by ${this.bookAuthor}.`
        }
    }
}

let book1 = new Book("A time to kill", "John Grisham", false);

let book2 = new Book("The house of mirth", "Edith Wharton", true);

let book3 = new Book("East of eden", "John Steinbeck", true);

let book4 = new Book("The sun also rises", "Ernest Hemingway", false);


console.log(book1.readindStatusInfo());

console.log(book2.readindStatusInfo());

console.log(book3.readindStatusInfo());

console.log(book4.readindStatusInfo());










