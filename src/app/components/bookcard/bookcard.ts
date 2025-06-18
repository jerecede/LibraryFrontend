import { Component, Input } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-bookcard',
  imports: [],
  templateUrl: './bookcard.html',
  styleUrl: './bookcard.scss'
})
export class Bookcard {
@Input({required: true}) bookToDisplay!:Book;
}
