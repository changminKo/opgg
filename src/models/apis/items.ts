export interface IItem {
  'name': string;
  'description': string;
  'plaintext': string;
  'into': string[],
  'image': {
    'full': string;
    'sprite': string;
    'group': string;
    'x': number;
    'y': number;
    'w': number;
    'h': number;
  },
  'gold': {
    'base': number;
    'purchasable': boolean;
    'total': number;
    'sell': number;
  },
  'tags': string[],
  'maps': {
    '11': boolean,
    '12': boolean,
    '21': boolean,
    '22': boolean
  },
  'stats': {
    'FlatCritChanceMod': number;
  }
}

export interface IItems {
  data: {
    [id: string] : IItem
  }
}
