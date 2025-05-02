import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Learning from "./components/Learning";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/learning">Learning</Link>
      </nav>

      <div className="hero">

        
        <Routes>
          <Route path="/learning" element={<Learning />} />
          <Route path="*" element={<p>No page found 404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
