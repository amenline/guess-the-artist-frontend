import { useGameContext } from '../context';

export const Hint = () => {
  const { albumArt } = useGameContext();

  return (
    <div className='flex'>
      <div className='mr-5'>Hint:</div>
      <div className='avatar'>
        <div className='w-32 rounded'>
          <img src={albumArt} alt='album artwork' />
        </div>
      </div>
    </div>
  );
};
