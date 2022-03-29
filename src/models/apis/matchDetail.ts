export interface IMatchDetailPlayer {
  'champion': {
    'imageUrl': string;
    'level': number;
  },
  'summonerId': string;
  'summonerName': string;
}

export interface IMatchDetailTeams {
  'players': IMatchDetailPlayer[];
  'teamId': number;
}

export interface IMatchDetail {
  'gameId': string,
  'teams': IMatchDetailTeams[];
}
