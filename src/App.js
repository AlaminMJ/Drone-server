import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/addProduct/AddProduct";
import AddReview from "./components/addReview/AddReview";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import LogIn from "./components/logIn/LogIn";
import SignUp from "./components/signUp/SignUp";
import AuthContext from "./context/authContext";
function App() {
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addreview" element={<AddReview />} />
              <Route path="addproduct" element={<AddProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
