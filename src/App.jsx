import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Learning from "./components/Learning";
import HomePage from "./components/HomePage";
import UserDetail from "./components/date02/UserDetail";
import Blogs from "./components/date02/Blogs";
import BlogPost from "./components/date02/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/learning">Learning</Link>
        <Link to="/blogs">blogs</Link>
      </nav>

      <div className="hero">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="*" element={<p>No page found 404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
