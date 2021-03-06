import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contribute from "./components/Contribute";
import Home from "./pages/Home";
import TutorialSection from "./pages/TutorialSection";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import darkModeReducer from "./features/DarkMode";
import ReactButtonTutorial from "./pages/Tutorials/ReactButtonTutorial";
import BlogSection from "./pages/BlogSection";
import PracticeSection from "./pages/PracticeSection";

export default function App() {
  const store = configureStore({
    reducer: {
      darkMode: darkModeReducer,
    },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/tutorial" element={<TutorialSection />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/blogs" element={<BlogSection/>}></Route>
            <Route path="/practice" element={<PracticeSection/>}/>
            <Route path="/react-button" element={<ReactButtonTutorial />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
