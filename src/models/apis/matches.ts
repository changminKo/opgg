export interface IChampions {
  'imageUrl': string,
  'level': number
}

export interface IGames {
  'champion': IChampions,
  'createDate': number,
  'gameId': string,
  'gameLength': number,
  'gameType': string,
  'isWin': boolean,
  'items': { 'imageUrl': string }[],
  'mapInfo': {
    'imageUrl': string,
    'mapId': number
  },
  'mmr': number,
  'needRenew': true,
  'peak': string[],
  'spells': { 'imageUrl': string }[],
  'stats': {
    'general': {
      'assist': number,
      'contributionForKillRate': string,
      'cs': number,
      'csPerMin': number,
      'death': number,
      'goldEarned': number,
      'kdaString': string,
      'kill': number,
      'largestMultiKillString': string,
      'opScoreBadge': string,
      'totalDamageDealtToChampions': number
    },
    'ward': {
      'sightWardsBought': number,
      'visionWardsBought': number
    }
  },
  'summonerId': string,
  'summonerName': string,
  'tierRankShort': string
}

export interface ISummary {
  'assists': number,
  'deaths': number,
  'kills': number,
  'losses': number,
  'wins': number
}

export interface IMatches{
  'champions': {
    assists: number;
    deaths: number;
    games: number;
    id: number;
    imageUrl: string;
    key: string;
    kills: number;
    losses: number;
    name: string;
    wins: number;
  }[],
  'games': IGames[],
  'positions': {
    'games': number,
    'losses': number,
    'position': string,
    'positionName': string,
    'wins': number
  }[],
  'summary': ISummary
}
