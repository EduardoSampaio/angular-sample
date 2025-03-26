import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Match } from '../../shared/models/match.model';
import { MatchDetailsComponent } from '../match-details/match-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-match-card',
  imports: [MatCardModule],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchCardComponent {
  @Input() match!: Match;

  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(MatchDetailsComponent, {
      data: {
        match: this.match,
      },
      width: '60%',
      height: 'auto',
      minHeight: '500px',
    });
  }

}
