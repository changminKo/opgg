export interface ISummoner {
  summoner: {
    'name': string;
    'level': number;
    'profileImageUrl': string;
    'profileBorderImageUrl': string;
    'url': string;
    'leagues': ILeagues[];
    'previousTiers': IPreviousTiers[];
    'ladderRank': {
      'rank': number;
      'rankPercentOfTop': number;
    };
    profileBackgroundImageUrl: string;
  }
}

export interface ILeagues {
  'hasResults': boolean;
  'wins': number;
  'losses': number;
  'tierRank': ITierRank;
}

export interface ITierRank {
  'name': string;
  'tier': string;
  'tierDivision': string;
  'string': string;
  'shortString': string;
  'division': string;
  'imageUrl': string;
  'lp': number;
  'tierRankPoint': number;
}

export interface IPreviousTiers extends ITierRank{
  season: number;
}
