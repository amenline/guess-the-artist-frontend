import { GameContextType, getFromLocatStorage, StoreItem } from '../utilities';

export const gameContextDefaultValues: GameContextType = {
  artistName: getFromLocatStorage(StoreItem.artistName, ''),
  artistId: getFromLocatStorage(StoreItem.artistId, null),
  round: getFromLocatStorage(StoreItem.round, 1),
  tries: getFromLocatStorage(StoreItem.tries, 1),
  albums: getFromLocatStorage(StoreItem.albums, []),
  albumArt: getFromLocatStorage(StoreItem.albumArt, ''),
  pointsTobeAwarded: getFromLocatStorage(StoreItem.pointsTobeAwarded, 5),
  hint: getFromLocatStorage(StoreItem.hint, false),
  gameOver: getFromLocatStorage(StoreItem.gameOver, false),
  totalScore: getFromLocatStorage(StoreItem.totalScore, 0),
  fetchNewArtist: getFromLocatStorage(StoreItem.fetchNewArtist, false),
  editStore: (key, payload) => {},
};
