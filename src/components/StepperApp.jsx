import React, { useState } from "react";

function Step({ title, completed }) {
  return (
    <div style={{ color: completed ? "green" : "grey" }}>
      {completed ? "✔️" : ""} {title}
    </div>
  );
}

function StepperApp() {
  const steps = ["Ordered", "Shipped", "Out for delivery", "Delivered"];
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  return (
    <div>
      <div
        style={{
          width: `${(currentStep / (steps.length - 1)) * 100}%`,
          height: "20px",
          backgroundColor: "blue",
        }}
      />
      {steps.map((step, index) => (
        <Step key={index} title={step} completed={index <= currentStep} />
      ))}
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default StepperApp;
