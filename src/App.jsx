import { TopBar } from "./components/topbar/TopBar";
import { Login } from "./pages/login/Login";
import { Settings } from "./pages/settings/Settings";
import { Signup } from "./pages/signup/Signup";
import { Write } from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {Single} from "./pages/single/Single";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/write" element={<Write />}/>
        <Route exact path="/" element={<Home />}/>
        <Route path="/post/:postid" element={<Single />}/>
       
      </Routes>
    </Router>
  );
}

export default App;
