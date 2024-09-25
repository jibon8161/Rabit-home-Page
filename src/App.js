import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  useEffect(() => {
    // Set a default theme when the component mounts
    document.documentElement.setAttribute("data-theme", "dark"); // Or "dark"

    // Clean up on unmount or when theme changes
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  return (
    <div className="App bg-black">
      <Home />
    </div>
  );
}

export default App;
