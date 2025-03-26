import { MatchStats } from "./match-stats.model";
import { Team } from "./team.model";
export type Match = {
  teamA: Team;
  teamB: Team;
  teamAScore: number;
  teamBScore: number;
  statsA: MatchStats;
  statsB: MatchStats;
};
