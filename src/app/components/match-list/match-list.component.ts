import { Component, type OnInit } from '@angular/core';
import { Match } from '../../shared/models/match.model';
import { matchesMock } from '../../mocks/data';
import { MatchCardComponent } from '../match-card/match-card.component';

@Component({
  selector: 'app-match-list',
  imports: [MatchCardComponent],
  templateUrl: './match-list.component.html',
  styleUrl: './match-list.component.scss',
})
export class MatchListComponent implements OnInit {
  matches: Match[] = matchesMock;

  ngOnInit(): void { }

}
