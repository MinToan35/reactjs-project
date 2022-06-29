import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Birthday from "./birthday/App";
import Tours from "./tours/App";
import Review from "./review/App";
import Question from "./question/App";
import Menu from "./menu/App";
import Tabs from "./tabs/App";
import Lorem from "./lorem/App";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/birthday" element={<Birthday />} />
        <Route exact path="/" element={<Tours />} />
        <Route path="/review" element={<Review />} />
        <Route path="/question" element={<Question />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/lorem" element={<Lorem />} />
      </Routes>
    </>
  );
}

export default App;
