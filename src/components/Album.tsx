interface Props {
  name: string;
}

export const Album = ({ name }: Props) => {
  return (
    <div className='card bg-transparent text-neutral dark:text-slate-200 border-primary border border-solid my-2 rounded-lg'>
      <div className='card-body'>
        <p>{name}</p>
      </div>
    </div>
  );
};
