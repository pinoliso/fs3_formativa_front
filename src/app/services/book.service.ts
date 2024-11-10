import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../models/book'; 

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = `${environment.apiEndpoint}/books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${book.id}`, book);
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${bookId}`);
  }
}

