import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar";
import Personal from "./personal";
import { TaskProvider } from "./taskcontest";
import Landing from "./landing";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <TaskProvider>
      <Router>
        {location.pathname !== "/" && (
          <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        )}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/personal"
            key={window.location.pathname}
            element={<Personal showSidebar={showSidebar} />}
          />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
