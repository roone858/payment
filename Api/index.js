const express = require("express");
const cors = require("cors");
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")(
  "sk_test_51OM8bHDLQcvajEnucHWx2eB0vlLJhksfadJAf44q23DUYnRuMwK42mK0HXcAwvYxCR6FiDmbCfCKZZRLJKH4BPys00H6r1sCuM"
);

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let total = 0;
  items.forEach((item) => {
    total += item.amount;
  });
  return total;
};
app.get("/", (req, res) => {
  res.send("welcome in server 🎉🎉");
});
app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  const amountInUSD = amount; // Example: Charging $0.25

  // Convert amount to cents
  const amountInCents = Math.round(amountInUSD * 100);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents, //calculateOrderAmount(items),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
