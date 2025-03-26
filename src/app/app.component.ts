import { Component } from '@angular/core';
import { MatchListComponent } from "./components/match-list/match-list.component";

@Component({
  selector: 'app-root',
  imports: [MatchListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'score-game';
}
