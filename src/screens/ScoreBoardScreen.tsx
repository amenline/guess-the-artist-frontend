import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader, ScoresTable } from '../components';
import { Scores } from '../utilities';

const SCORE_QUERY = `
{
  scores {
    id
    name
    score
  }
}
`;

const ScoreBoardScreen = () => {
  const [scores, setScores] = useState<Scores[]>([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    // set loading
    setIsLoading(true);
    fetch('https://album-guess.herokuapp.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: SCORE_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => {
        setScores(data.data.scores);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('An error occured whiles fetching data', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center dark:bg-neutral bg-gray-200 p-7'>
      <div className='max-w-5xl w-full mx-auto bg-white dark:bg-base-100 p-6 rounded-lg shadow-lg'>
        <Link to={'/'}>
          <button className='btn btn-outline btn-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
              />
            </svg>
            Back
          </button>
        </Link>
        <div>
          <h1 className='w-fit mx-auto font-bold text-2xl text-info text-center my-10'>
            Scoreboard
          </h1>
        </div>
        <div className='overflow-x-auto my-10'>
          {isloading ? <Loader /> : <ScoresTable scores={scores} />}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoardScreen;
