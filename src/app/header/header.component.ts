import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    // this.filteredBooks = this.books.filter(book => book.title.toLowerCase().includes(filterValue) || book.author.toLowerCase().includes(filterValue));
  }

  openBookForm() {
    // Abrir formulario para agregar un libro nuevo
  }
}
