import { Scores } from '../utilities';

interface Props {
  scores: Scores[];
}

export const ScoresTable = ({ scores }: Props) => {
  return (
    <>
      {scores.length === 0 ? (
        <h2 className='text-2xl opacity-50 text-center w-fit mx-auto mt-7'>
          Hoops! no scores have been recorded yet
        </h2>
      ) : (
        <table className='table table-zebra w-full mt-7'>
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
                <th>{index + 1}</th>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
