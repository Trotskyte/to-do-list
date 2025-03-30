import { Link } from "react-router-dom";
import "./css/navbar.css";

function Navbar({ toggleSidebar, showSidebar }) {
  return (
    <>
      {/* Mobile Menu Button */}
      <nav className="mobile-nav">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? "show" : "hide"}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <h3>Rayyan Firmansyah</h3>
        <h1>TaskMate</h1>
        <p>To Do List App</p>
        <nav>
          <ul>
            <li>
              <Link to="/projects" onClick={toggleSidebar}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/personal" onClick={toggleSidebar}>
                Personal
              </Link>
            </li>
            <li>
              <Link to="/upcoming" onClick={toggleSidebar}>
                Upcoming
              </Link>
            </li>
            <li>
              <Link to="/completed" onClick={toggleSidebar}>
                Completed
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
