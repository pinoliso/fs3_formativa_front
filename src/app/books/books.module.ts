import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    FormsModule, 
    MatCardModule,
    MatIconModule,
  ]
})
export class BooksModule { }
