import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AddSentences from './pages/AddSentences';
import ListSentences from './pages/ListSentences';
import HomeLayout from './components/Layout/HomeLayout';
import EditSentences from './pages/EditSentences';
import RandomSentences from './components/games/RandomSentences';
import SentencesBuilder from './components/games/SentencesBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/sentences/add' element={<AddSentences />} />
          <Route path='/sentences/edit/:id' element={<EditSentences />} />
          <Route path='/sentences' element={<ListSentences />} />
          <Route path='/games/random-sentences' element={<RandomSentences />} />
          <Route
            path='/games/sentences-builder'
            element={<SentencesBuilder />}
          />
        </Route>

        {/* Route mac dinh */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
