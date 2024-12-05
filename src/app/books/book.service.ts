import { Injectable } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = [
    new Book(1, "Atomic Habits", "James Clear", 35),
    new Book(2, "The 7 Habits of Highly Effective People", "Stephen Covey", 30),
    new Book(3, "The 4-Hour Work Week", "Tim Ferriss", 25),
  ];
  constructor() { }
  getBooks() {
    return this.books;
  }
  bookAdd(title: string, author: string, price: number) {
    this.books.push(new Book(this.books.length + 1, title, author, price));
  }
}
