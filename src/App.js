import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import LogIn from "./components/logIn/LogIn";
import SignUp from "./components/signUp/SignUp";

import authContext from "./context/authContext";
function App() {
  return (
    <div className="App">
      <authContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </authContext>
    </div>
  );
}

export default App;
