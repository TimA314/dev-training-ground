import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TutorialSection from "./pages/TutorialSection";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import darkModeReducer from "./features/DarkMode";

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
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
