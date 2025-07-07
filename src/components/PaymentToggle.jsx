import React from "react";
import { Button } from "react-bootstrap";

const PaymentToggle = ({ paymentMethod, onPaymentChange }) => {
  return (
    <div className="payment-toggle">
      <Button
        variant={paymentMethod === "online" ? "success" : "light"}
        className={paymentMethod === "online" ? "active" : ""}
        onClick={() => onPaymentChange("online")}
        size="sm"
      >
        Online Payment
      </Button>
      <Button
        variant={paymentMethod === "cod" ? "success" : "light"}
        className={paymentMethod === "cod" ? "active" : ""}
        onClick={() => onPaymentChange("cod")}
        size="sm"
      >
        Cash on Delivery
      </Button>
    </div>
  );
};

export default PaymentToggle;
