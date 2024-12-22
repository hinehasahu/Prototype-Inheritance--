import {Books} from './books.js'

// Creating an array of book summaries using array.prototype.map{} 
const bookSummaries = Books.map((book) => book.getSummaries());
console.log(bookSummaries)