import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book'; 
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'] 
})

export class BookListComponent implements OnInit{
  
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router, private matSnackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  openBookForm() {
    this.router.navigate(['books/new'])
  }

  editBook(book: Book) {
    this.router.navigate([`/books/update/${book.id}`]);
  }

  deleteBook(book: Book) {

    this.bookService.deleteBook(book.id).subscribe(
      () => {
        const index = this.books.indexOf(book);
        if (index > -1) {
          this.books.splice(index, 1);
        }
        this.matSnackBar.open('Libro eliminado exitosamente', 'Cerrar', { duration: 5000 });
      },
      (error) => console.error('Error deleting book:', error)
    );
  }


}
