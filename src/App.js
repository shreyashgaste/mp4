import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddNewspaper from "./pages/AddNewspaper";
import AddVendor from "./pages/AddVendor";
import UpdateVendor from "./pages/UpdateVendor";
import UpdateNewspaper from "./pages/UpdateNewspaper";
import { getCurrenuser } from "./firebaseConfig";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { setUserState } from "./redux/action";
import AllNewspaper from "./pages/AllNewspaper";
import NavbarComp from "./components/NavbarComp";
const RoutingSystem = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-newspaper" element={<AddNewspaper />} />
        <Route path="/add-vendor" element={<AddVendor />} />
        <Route path="/update-vendor" element={<UpdateVendor />} />
        <Route path="/update-newspaper" element={<UpdateNewspaper />} />
        <Route path="/all-newspaper" element={<AllNewspaper />} />
      </Routes>
    </>
  );
};

function App() {
  const [busy, setBusy] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getCurrenuser().then((user) => {
      if (user) {
        dispatch(setUserState(user.email));
        // window.history.replaceState({}, '', '/dashboard');
        // navigate('/dashboard');
      } else {
        // window.history.replaceState({}, '', '/login');
        navigate("/login");
      }
      setBusy(false);
    });
  }, []);
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          {busy ? <p>Loading...</p> : <RoutingSystem />}
        </div>
      </div>
    </div>
  );
}
export default App;
