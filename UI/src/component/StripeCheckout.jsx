// PaymentComponent.js
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51OM8bHDLQcvajEnuuNf6qIKGtgejp1tBjhQzN5NlcjErrePK9prFIVrJNiSuJ39RhrFtZo1EU1gy1WLqLL9TORWT00hoBBBcZ5"
);

// eslint-disable-next-line react/prop-types
const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = searchParams.get("amount");
  useEffect(() => {
    // Create PaymentIntent as soon as the component loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default StripeCheckout;
