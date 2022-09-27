import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLoader } from './components';
import { GameProvider } from './context';
import { Artist, artists } from './utilities';

// screens import
const IndexScreen = React.lazy(() => import('./screens/IndexScreen'));
const ScoreBoardScreen = React.lazy(() => import('./screens/ScoreBoardScreen'));

function App() {
  const [artist, setArtist] = useState([{ name: '', id: 0 }]);
  useEffect(() => {
    const allArtists: Artist[] = artists;
    setArtist(allArtists);
  }, [artist]);

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            index
            element={
              <GameProvider>
                <IndexScreen artistList={artists} />
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
