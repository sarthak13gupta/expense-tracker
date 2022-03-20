import "./App.css";
import LandingPage from "./pages/landingPage";
import {BrowserRouter as Router ,  Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Reset from "./pages/Reset";
import Profile from "./Components/Users/Profile";
import Detail from "./pages/Detail";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<About />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
      <Route path="explore" element={<Explore />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/home/profile" element={<Profile/>}/>
      <Route path="signin/reset" element={<Reset/>}></Route>
      <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
      </Router>
        
    </div>
  );
}

export default App;
