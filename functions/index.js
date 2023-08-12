const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "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"
);

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/e-clone-2e8a0/us-central1/api
// http://127.0.0.1:4000/functions