import { useEffect, useState } from 'react';
import { useGameContext } from '../context';
import { StoreItem } from '../utilities';

export const TextField = () => {
  const [userAnswer, setUserAnswer] = useState('');

  const {
    artistName,
    round,
    totalScore,
    pointsTobeAwarded,
    tries,
    hint,
    editStore,
  } = useGameContext();

  useEffect(() => {
    // set points to be awarded
    switch (tries) {
      case 1:
        editStore(StoreItem.pointsTobeAwarded, 5);
        break;
      case 2:
        editStore(StoreItem.pointsTobeAwarded, 3);
        break;
      case 3:
        editStore(StoreItem.pointsTobeAwarded, 1);
        break;
      default:
        break;
    }
  }, [tries]);

  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(_event.target.value);
  };

  const handleSubmit = (_event: React.FormEvent<HTMLFormElement>) => {
    _event.preventDefault();
    if (userAnswer.trim() === '') return;

    if (userAnswer.trim().toLowerCase() === artistName.toLowerCase()) {
      console.log('correct');
      editStore(StoreItem.round, round + 1);
      editStore(StoreItem.totalScore, totalScore + pointsTobeAwarded);
      editStore(StoreItem.tries, 1);
      editStore(StoreItem.hint, false);
      setUserAnswer('');
    } else {
      if (tries < 3) {
        editStore(StoreItem.tries, tries + 1);
        tries === 2 && editStore(StoreItem.hint, true);
      } else {
        editStore(StoreItem.tries, 1);
        if (hint) {
          editStore(StoreItem.hint, false);
          editStore(StoreItem.gameOver, true);
        }
      }
      console.log(tries);
    }
  };

  return (
    <div className='my-5'>
      <form
        className='relative mt-1 rounded-md shadow-sm'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='artist'
          className='input block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          onChange={handleChange}
          value={userAnswer}
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
