import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Learning from "./components/Learning";
import HomePage from "./components/HomePage";
import UserDetail from "./components/date02/UserDetail";
import Blogs from "./components/date02/Blogs";
import BlogPost from "./components/date02/BlogPost";
import Projects from "./components/projects/Projects";
import Dashboard from "./components/Dashboard";

import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/learning">Learning</Link>
          <Link to="/blogs">blogs</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/theme-toggle">Toggle Theme</Link>
        </nav>
        <div className="hero app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/theme-toggle" element={<ThemeToggle />} />
            <Route path="/blogs/" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="projects" element={<Projects />} />
              <Route path="blogs" element={<UserDetail />} />
            </Route>

            <Route path="*" element={<p>No page found 404</p>} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
