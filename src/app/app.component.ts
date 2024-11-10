import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksModule } from './books/books.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BooksModule,
    HeaderComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bibioteca';
}
