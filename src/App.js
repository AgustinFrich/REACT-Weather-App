import "./App.css";
import Dashboard from "./Components/Dashboard";
import React from "react";
import CityContextProvider from "./Providers/CityProvider";

function App() {
  return (
    <CityContextProvider>
      <div className="App">
        <Dashboard />
      </div>
    </CityContextProvider>
  );
}

export default App;
