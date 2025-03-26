import { Match } from './match.model';

export type MatchStats = {
  ballPossession: number;
  shots: number;
  shotsOnTarget: number;
  corners: number;
  foulsCommitted: number;
  redCards: number;
  yellowCards: number;
  offsides: number
}
