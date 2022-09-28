import { useEffect, useState } from 'react';
import {
  Album,
  Hint,
  Loader,
  Modal,
  TextField,
  TotalScore,
} from '../components';
import {
  Artist,
  filterResults,
  get3RandomNumbers,
  getRandomNumber,
  StoreItem,
} from '../utilities';
import { useGameContext } from '../context';

interface Props {
  artistList: Artist[];
}

const IndexScreen = ({ artistList }: Props) => {
  const {
    albums,
    artistId,
    artistName,
    editStore,
    fetchNewArtist,
    hint,
    pointsTobeAwarded,
    round,
    tries,
  } = useGameContext();

  const [slicedAlbum, setSlicedAlbum] = useState(albums.slice(0, tries));

  // Set a new artist
  useEffect(() => {
    if (artistId === null || fetchNewArtist) {
      let randomNum = getRandomNumber(0, artistList.length - 1);
      editStore(StoreItem.artistName, artistList[randomNum].name);
      editStore(StoreItem.artistId, artistList[randomNum].id);
    }
  }, [round, fetchNewArtist]);

  useEffect(() => {
    // Get Albums
    if (albums.length === 0 || fetchNewArtist) {
      fetch(`/lookup?id=${artistId}&entity=album`, {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (artistId !== null) {
            const filteredAlbums = filterResults(data.results, artistId);
            const albumNum = get3RandomNumbers(0, filteredAlbums.length - 1);
            const newAlbum = [
              filteredAlbums[albumNum[0]],
              filteredAlbums[albumNum[1]],
              filteredAlbums[albumNum[2]],
            ];

            editStore(StoreItem.albums, newAlbum);

            editStore(
              StoreItem.albumArt,
              filteredAlbums[albumNum[2]].artworkUrl60
            );
            editStore(StoreItem.fetchNewArtist, false);
          }
        })
        .catch((error) =>
          console.log('An error occured while fetching album', error)
        );
    }
  }, [artistId]);

  useEffect(() => {
    if (albums.length === 0) editStore(StoreItem.fetchNewArtist, true);
  }, []);

  // set sliced ablums for number of tries
  useEffect(() => {
    setSlicedAlbum(albums.slice(0, tries));
  }, [albums, tries]);

  console.log('*****Aritst Name*****', artistName);

  return (
    <>
      <div className='min-h-screen flex items-center justify-center dark:bg-neutral bg-gray-200 p-7'>
        <div className='max-w-5xl w-full mx-auto bg-white dark:bg-base-100 p-6 rounded-lg shadow-lg'>
          <h1 className='w-fit mx-auto font-bold text-2xl text-info text-center mt-10'>
            Guess The Artist
          </h1>
          <main>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10'>
              <section>
                <h2 className='text-xl font-bold mb-10'>Round {round}</h2>
                {albums.length > 0 ? (
                  slicedAlbum.map((album: any, index) => (
                    <Album name={album.collectionName} key={index} />
                  ))
                ) : (
                  <Loader />
                )}
              </section>
              <section className='place-self-center w-fit'>
                <h2 className='my-10'>
                  For {pointsTobeAwarded} points <br />
                  Who's the artist? (enter full name)
                </h2>
                <TextField />
                {hint && <Hint />}
              </section>
            </div>
            <section className='w-fit mx-auto text-center'>
              <TotalScore />
            </section>
          </main>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default IndexScreen;
