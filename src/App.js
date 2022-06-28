import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Birthday from "./birthday/App";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </>
  );
}

export default App;
