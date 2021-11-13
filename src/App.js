import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/addProduct/AddProduct";
import AddReview from "./components/addReview/AddReview";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import LogIn from "./components/logIn/LogIn";
import MakeAdmin from "./components/makeAdmin/MakeAdmin";
import ManageAllOrder from "./components/manageAllOrder/ManageAllOrder";
import ManageProducts from "./components/manageProduct/ManageProducts";
import MyOrder from "./components/myOrder/MyOrder";
import Payment from "./components/payment/Payment";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AdminRoute from "./components/privateRoute/AdminRoute";
import Products from "./components/products/Products";
import SignUp from "./components/signUp/SignUp";
import AuthContext from "./context/authContext";
import useFirebase from "./hooks/useFirebase";
function App() {
  const { isAdmin } = useFirebase();
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<LogIn />} />

            <Route
              path="/placeorder/:id"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="addreview" element={<AddReview />} />
              {!isAdmin ? (
                <Route path="" element={<MyOrder />} />
              ) : (
                <Route path="" element={<ManageAllOrder />} />
              )}

              <Route
                path="addproduct"
                element={
                  <AdminRoute>
                    <AddProduct />
                  </AdminRoute>
                }
              />
              <Route path="myorder" element={<MyOrder />} />
              <Route path="Payment" element={<Payment />} />
              <Route
                path="makeadmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="manageallproduct"
                element={
                  <AdminRoute>
                    <ManageAllOrder />
                  </AdminRoute>
                }
              />
              <Route
                path="manageproduct"
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
