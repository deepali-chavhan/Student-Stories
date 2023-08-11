import React, { Suspense } from "react";
import SplashScreen from "./SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import Homepage from "./Homepage";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<Homepage />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
