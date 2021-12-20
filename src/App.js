import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Backlog from "./pages/Backlog";
import Board from "./pages/Board";

const App = () => {
  return (
    <>
      <h1>My App</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/backlog">Backlog</Link>
              </li>
              <li>
                <Link to="/board">Board</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/backlog" element={<Backlog />} />
          <Route path="/board" element={<Board />} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
