import "./App.css";
import Dashboard from "./Components/Dashboard";
import React, { useEffect } from "react";
import useCurrentCity from "./Hooks/useCurrentCity";
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
