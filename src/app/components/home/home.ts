import { Component } from '@angular/core';
import { Booklist } from "../booklist/booklist";

@Component({
  selector: 'app-home',
  imports: [Booklist],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
