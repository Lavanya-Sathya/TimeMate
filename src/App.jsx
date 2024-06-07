import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import StopWatch from "./pages/StopWatch";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="dark  h-screen w-full bg-primary text-secondary  ">
      <div className="min-w-72">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/stopwatch" element={<StopWatch />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
