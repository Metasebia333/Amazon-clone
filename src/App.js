import './App.css';
import Header from './Header';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import Payment from './Payment';
import Orders from './Orders';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from './Footer';

const promise = loadStripe(
  "pk_live_51MibQcEZKppkVKvu5kRXcX7cfhwyusO30IaA2oOri4A46tUzbpyjNQ7xrR8SXUMXAPGJHRFkKxZZOjay1QUIF2lu00IQtP8xIT"
);

function App() {
  const [{user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">

      <Routes>
        <Route path="/orders" element={<><Header /><Orders /></>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/checkout" element={<><Header /><Checkout /></>}/>
        <Route path="/payment" element={<> <Header /><Elements stripe={promise}><Payment /></Elements></>}/>
        <Route path="/" element={<><Header /><Home /><Footer/></>}/>
      </Routes>
    </div>

  );
}

export default App;

// https://e-clone-2e8a0.web.app/
