import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TutorialSection from "./pages/TutorialSection";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tutorial" element={<TutorialSection />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
