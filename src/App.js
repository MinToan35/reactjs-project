import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Birthday from "./birthday/App";
import Tours from "./tours/App";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </>
  );
}

export default App;
