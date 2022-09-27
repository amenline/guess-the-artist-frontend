export interface Artist {
  name: string;
  id: number;
}

export enum StoreItem {
  artistName = 'artistName',
  artistId = 'artistId',
  round = 'round',
  tries = 'tries',
  albums = 'albums',
  albumArt = 'albumArt',
  pointsTobeAwarded = 'pointsTobeAwarded',
  hint = 'hint',
  gameOver = 'gameOver',
  totalScore = 'totalScore',
}

export interface GameContextType {
  artistName: string;
  artistId: null | number;
  round: number;
  tries: number;
  albums: any[];
  albumArt: string;
  pointsTobeAwarded: number;
  hint: boolean;
  gameOver: boolean;
  totalScore: number;
  editStore: (
    key: StoreItem,
    payload: string | null | number | any[] | boolean
  ) => void;
}

export interface Scores {
  id: string;
  name: string;
  score: number;
}
