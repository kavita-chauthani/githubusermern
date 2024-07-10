import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reposit } from "./pages/Reposit";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reposit" element={<Reposit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
