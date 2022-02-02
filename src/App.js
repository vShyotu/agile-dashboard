import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Backlog from './pages/Backlog';
import Board from './pages/Board';
import Story from './pages/Story';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/backlog" element={<Backlog />} />
            <Route path="/board" element={<Board />} />
            <Route path="/story/create" element={<Story />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
