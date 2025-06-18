import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Booklist } from './components/booklist/booklist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Booklist],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LibraryFrontend';
}
