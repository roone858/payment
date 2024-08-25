// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StripeCheckout from "./component/StripeCheckout";
import "./App.css";
import PaymentConfirmation from "./component/PaymentConfirmation";
import Home from "./component/Home";
import Plans from "./component/Plans";
const App = () => {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route
            path="/plans"
            element={<Plans />}
          />
          <Route
            path="plans/checkout"
            element={<StripeCheckout  />}
          />
          <Route
            path="/payment-confirmation"
            element={<PaymentConfirmation />}
          />

          {/* Other routes can go here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
