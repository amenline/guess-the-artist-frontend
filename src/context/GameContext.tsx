import { createContext, ReactNode, useContext, useState } from 'react';
import { GameContextType } from '../utilities';

type Props = {
  children: ReactNode;
};

const gameContextDefaultValues: GameContextType = {
  artistName: '',
  artistId: null,
  round: 1,
  tries: 1,
  albums: [],
  albumArt: '',
  pointsTobeAwarded: 5,
  hint: false,
  gameOver: false,
  totalScore: 0,
  editStore: (key, payload) => {},
};

const GameContext = createContext<GameContextType>(gameContextDefaultValues);

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }: Props) => {
  const [artistName, setArtistName] = useState('');
  const [artistId, setArtistId] = useState<null | number>(null);
  const [round, setRound] = useState(1);
  const [tries, setTries] = useState(1);
  const [albums, setAlbums] = useState<any[]>([]);
  const [albumArt, setAlbumArt] = useState('');
  const [pointsTobeAwarded, setPointsTobeAwarded] = useState(5);
  const [hint, setHint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const editStore: GameContextType['editStore'] = (key, payload) => {
    switch (key) {
      case 'artistName':
        setArtistName(payload as string);
        break;
      case 'artistId':
        setArtistId(payload as number);
        break;
      case 'round':
        setRound(payload as number);
        break;
      case 'tries':
        setTries(payload as number);
        break;
      case 'albums':
        setAlbums(payload as any[]);
        break;
      case 'albumArt':
        setAlbumArt(payload as string);
        break;
      case 'pointsTobeAwarded':
        setPointsTobeAwarded(payload as number);
        break;
      case 'hint':
        setHint(payload as boolean);
        break;
      case 'gameOver':
        setGameOver(payload as boolean);
        break;
      case 'totalScore':
        setTotalScore(payload as number);
        break;

      default:
        return;
    }
  };

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
    editStore,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
