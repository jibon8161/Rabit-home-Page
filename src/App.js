import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  useEffect(() => {
    // Set theme dynamically when the component mounts
    document.documentElement.setAttribute("data-theme", "cupcake");

    // Clean up on unmount or when theme changes
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
