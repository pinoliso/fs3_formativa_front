// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';


export const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/update/:id', component: BookFormComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [BookListComponent, BookFormComponent];
