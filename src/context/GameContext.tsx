import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import {
  GameContextType,
  getFromLocatStorage,
  saveToLocatStorage,
  StoreItem,
} from '../utilities';
import { gameContextDefaultValues } from './DefaultValues';

type Props = {
  children: ReactNode;
};

// Set context default value
const GameContext = createContext<GameContextType>(gameContextDefaultValues);

// Export context for use
export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }: Props) => {
  // Setstate to values from the localstorage if exists
  const [artistName, setArtistName] = useState(
    getFromLocatStorage(StoreItem.artistName, '')
  );
  const [artistId, setArtistId] = useState<null | number>(
    getFromLocatStorage(StoreItem.artistId, null)
  );
  const [round, setRound] = useState(getFromLocatStorage(StoreItem.round, 1));
  const [tries, setTries] = useState(getFromLocatStorage(StoreItem.tries, 1));
  const [albums, setAlbums] = useState<any[]>(
    getFromLocatStorage(StoreItem.albums, [])
  );
  const [albumArt, setAlbumArt] = useState(
    getFromLocatStorage(StoreItem.albumArt, '')
  );
  const [pointsTobeAwarded, setPointsTobeAwarded] = useState(
    getFromLocatStorage(StoreItem.pointsTobeAwarded, 5)
  );
  const [hint, setHint] = useState(getFromLocatStorage(StoreItem.hint, false));
  const [gameOver, setGameOver] = useState(
    getFromLocatStorage(StoreItem.gameOver, false)
  );
  const [totalScore, setTotalScore] = useState(
    getFromLocatStorage(StoreItem.totalScore, 0)
  );
  const [fetchNewArtist, setFetchNewArtist] = useState(
    getFromLocatStorage(StoreItem.fetchNewArtist, false)
  );

  // a function to edit items in the context store and localstorage
  const editStore: GameContextType['editStore'] = useCallback(
    (key, payload) => {
      switch (key) {
        case 'artistName':
          setArtistName(payload as string);
          saveToLocatStorage(key, payload);
          break;
        case 'artistId':
          setArtistId(payload as number);
          saveToLocatStorage(key, payload);
          break;
        case 'round':
          setRound(payload as number);
          saveToLocatStorage(key, payload);
          break;
        case 'tries':
          setTries(payload as number);
          saveToLocatStorage(key, payload);
          break;
        case 'albums':
          setAlbums(payload as any[]);
          saveToLocatStorage(key, payload);
          break;
        case 'albumArt':
          setAlbumArt(payload as string);
          saveToLocatStorage(key, payload);
          break;
        case 'pointsTobeAwarded':
          setPointsTobeAwarded(payload as number);
          saveToLocatStorage(key, payload);
          break;
        case 'hint':
          setHint(payload as boolean);
          saveToLocatStorage(key, payload);
          break;
        case 'gameOver':
          setGameOver(payload as boolean);
          saveToLocatStorage(key, payload);
          break;
        case 'totalScore':
          setTotalScore(payload as number);
          saveToLocatStorage(key, payload);
          break;
        case 'fetchNewArtist':
          setFetchNewArtist(payload as boolean);
          saveToLocatStorage(key, payload);
          break;

        default:
          return;
      }
    },
    []
  );

  const value = {
    artistName,
    artistId,
    round,
    tries,
    albums,
    albumArt,
    pointsTobeAwarded,
    hint,
    gameOver,
    totalScore,
    fetchNewArtist,
    editStore,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
