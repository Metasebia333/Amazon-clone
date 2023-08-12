import React from 'react'
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const promise = loadStripe(
  "pk_live_51MibQcEZKppkVKvu5kRXcX7cfhwyusO30IaA2oOri4A46tUzbpyjNQ7xrR8SXUMXAPGJHRFkKxZZOjay1QUIF2lu00IQtP8xIT"
);

function Pay() {
  return (
    <Elements stripe={promise}> <Payment /></Elements>
  )
}

export default Pay;