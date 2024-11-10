import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() book: Book = { id: 0, title: '', author: '', publisherYear: '', genre: '' };
  @Input() editing = false;
  @Output() save = new EventEmitter<Book>();
  @Output() cancelAction = new EventEmitter<void>();

  constructor(private bookService: BookService, private router: Router, private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    const url = this.router.url.split('/');
    const id = +url[3];

    if (id) {
      this.bookService.getBookById(id).subscribe(
        (book: Book) => {
          this.book = book;
          this.book.publisherYear = this.book.publisherYear.toString();
          this.editing = true;
        },
        (error: any) => console.error('Error fetching book:', error)
      );
    }
  }


  onSubmit() {
    if (this.book.title.trim() === '' || this.book.author.trim() === '' || this.book.publisherYear.trim() === '' || this.book.genre.trim() === '') {
      alert('Debes llenar todos los campos');
      return;
    }

    if (this.editing) {
      this.bookService.updateBook(this.book).subscribe(
        () => {
          this.save.emit(this.book);
          this.matSnackBar.open('Libro actualizado exitosamente', 'Cerrar', { duration: 5000, panelClass: ['success'] });
        },
        (error) => console.error(error)
      );
    } else {
      this.bookService.addBook(this.book).subscribe(
        (book) => {
          this.save.emit(book);
          this.book = { id: 0, title: '', author: '', publisherYear: '', genre: '' };
          this.matSnackBar.open('Libro agregado exitosamente', 'Cerrar', { duration: 5000, panelClass: ['success'] });
        },
        (error) => console.error(error)
      );
    }
  }

  cancel() {
    this.router.navigate(['books']);
  }
}
