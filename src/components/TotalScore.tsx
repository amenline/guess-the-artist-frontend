import { Link } from 'react-router-dom';
import { useGameContext } from '../context';

export const TotalScore = () => {
  const { totalScore } = useGameContext();
  return (
    <>
      <div>Your total score: {totalScore}</div>
      <button className='btn btn-sm btn-link normal-case'>
        <Link to={'/score-board'}>Scoreboard</Link>
      </button>
    </>
  );
};
