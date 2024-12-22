

export function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// Adding the getSummaries method to Book's prototype
Book.prototype.getSummaries = function(){
    console.log(`${this.title} by ${this.author}, published in ${this.year}`);
}