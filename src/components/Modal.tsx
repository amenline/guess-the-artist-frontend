import { useEffect, useState } from 'react';
import { useGameContext } from '../context';
import { StoreItem } from '../utilities';
import { useNavigate } from 'react-router-dom';

const saveScoreQuery = (name: string, score: number) => `
mutation {
  saveScore(score: ${score}, name: "${name}")
}
`;

export const Modal = () => {
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const { gameOver, totalScore, editStore } = useGameContext();
  const navigate = useNavigate();

  const toggle = (value: boolean) => {
    return !value;
  };

  useEffect(() => {
    if (gameOver) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [gameOver]);

  const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(_event.target.value);
  };

  const resetGame = () => {
    editStore(StoreItem.tries, 1);
    editStore(StoreItem.totalScore, 0);
    editStore(StoreItem.round, 1);
    editStore(StoreItem.pointsTobeAwarded, 5);
    editStore(StoreItem.hint, false);
  };

  const handleSubmit = (_event: React.FormEvent<HTMLFormElement>) => {
    _event.preventDefault();

    if (username.trim() !== '') {
      editStore(StoreItem.gameOver, false);
      setChecked(false);

      fetch('https://album-guess.herokuapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: saveScoreQuery(username, totalScore) }),
      })
        .then((response) => response.json())
        .then(() => {
          setUsername('');
          resetGame();
          navigate('score-board');
        })
        .catch((error) =>
          console.log('An error occured whiles fetching data', error)
        );
    }
  };

  return (
    <>
      <input
        type='checkbox'
        id='my-modal'
        checked={checked}
        onChange={() => setChecked(toggle)}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Game Over</h3>
          <p className='py-4'>Your total score is : {totalScore}</p>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Your name'
              className='input input-bordered w-full max-w-xs'
              onChange={handleChange}
              value={username}
            />
            <div className='modal-action'>
              <button className='btn' type='submit'>
                Save Score
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
