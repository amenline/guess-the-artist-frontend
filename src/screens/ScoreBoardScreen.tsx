import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: SCORE_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => {
        setScores(data.data.scores);
      })
      .catch((error) =>
        console.log('An error occured whiles fetching data', error)
      );
  }, []);
  return (
    <div className='min-h-screen flex items-center justify-center dark:bg-neutral bg-gray-200 p-5'>
      <div className='max-w-5xl w-full mx-auto bg-white dark:bg-base-100 p-6 rounded-lg shadow-lg'>
        <Link to={'/'}>
          <button className='btn btn-outline btn-primary'>
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
          <h1 className='w-fit mx-auto font-bold text-2xl text-primary text-center my-5'>
            Scoreboard
          </h1>
        </div>
        <div className='overflow-x-auto my-10'>
          {scores.length === 0 ? (
            <h2 className='text-2xl opacity-50 text-center w-fit mx-auto'>
              Hoops! no scores have been recorded yet
            </h2>
          ) : (
            <table className='table table-zebra w-full'>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr key={score.id}>
                    <th>{index}</th>
                    <td>{score.name}</td>
                    <td>{score.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoardScreen;
