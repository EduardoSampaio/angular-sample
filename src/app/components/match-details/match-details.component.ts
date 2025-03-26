import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Match } from '../../shared/models/match.model';
import {MatButtonModule} from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-match-details',
  imports: [MatDialogTitle, MatButtonModule, MatDialogModule],
  templateUrl: './match-details.component.html',
  styleUrl: './match-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchDetailsComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  match!: Match;

  ngOnInit(): void {
    this.match = this.data.match;
  }

}
