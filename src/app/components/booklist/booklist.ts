import { Component, inject, OnInit } from '@angular/core';
import { Bookcard } from "../bookcard/bookcard";
import { BookService } from '../../services/book-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booklist',
  imports: [Bookcard, CommonModule],
  templateUrl: './booklist.html',
  styleUrl: './booklist.scss'
})
export class Booklist implements OnInit {
  bookServ = inject(BookService);
  

  ngOnInit(): void {
    this.bookServ.getBooks()
    this.bookServ.getCategories()
  }


}
