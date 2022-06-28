import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Birthday from "./birthday/App";
import Tours from "./tours/App";
import Review from "./review/App";
import Question from "./question/App";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/review" element={<Review />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
