import "./App.css";
import LandingPage from "./pages/landingPage";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="explore" element={<Explore />} />

      </Routes>
        
    </div>
  );
}

export default App;
