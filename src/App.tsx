import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLoader } from './components';
import { GameProvider } from './context';
import {
  Artist,
  artists,
  getFromLocatStorage,
  initalizeLocalStorage,
  StoreItem,
} from './utilities';

// screens import
const IndexScreen = React.lazy(() => import('./screens/IndexScreen'));
const ScoreBoardScreen = React.lazy(() => import('./screens/ScoreBoardScreen'));

function App() {
  const [artistList, setArtistList] = useState<Artist[]>([{ name: '', id: 0 }]);

  useEffect(() => {
    const allArtists: Artist[] = artists;
    setArtistList(allArtists);

    if (getFromLocatStorage(StoreItem.round, null) === null) {
      // setup new values for local storage
      initalizeLocalStorage();
    }
  }, [artistList]);

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            index
            element={
              <GameProvider>
                <IndexScreen artistList={artistList} />
              </GameProvider>
            }
          />
          <Route path='score-board' element={<ScoreBoardScreen />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
