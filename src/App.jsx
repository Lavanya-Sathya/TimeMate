import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import StopWatch from "./pages/StopWatch";
import Setting from "./pages/Setting";
import Footer from "./components/Footer";
import { useContext } from "react";
import { StateContext } from "./context/StateProvider";

function App() {
  const { theme } = useContext(StateContext);
  return (
    <div
      className={`${theme} min-h-screen h-auto w-full bg-primary text-secondary`}
    >
      <div className="min-w-72">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/stopwatch" element={<StopWatch />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
