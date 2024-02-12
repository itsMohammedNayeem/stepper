import React, { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const apiSteps = [
  { name: "Ordered", status: "completed" },
  { name: "Shipped", status: "not-started" },
  { name: "Out for delivery", status: "not-started" },
  { name: "Delivered", status: "not-started" },
];

const Stepper = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setSteps(apiSteps);
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => {
      const newStep = Math.min(prev + 1, steps.length - 1);
      const updatedSteps = steps.map((step, index) => {
        if (index < newStep) {
          return { ...step, status: "completed" };
        } else if (index === newStep) {
          return { ...step, status: "in-progress" };
        } else {
          return { ...step };
        }
      });
      setSteps(updatedSteps);
      return newStep;
    });
  };

  // Calculate progress bar width as a percentage
  const progressWidth = (currentStep / (steps.length - 1)) * 100 + "%";

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full flex justify-between items-center relative">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 w-full">
          <div className="h-1.5 bg-gray-300 rounded-full">
            <div
              className="h-1.5 bg-blue-600"
              style={{ width: progressWidth }}
            ></div>
          </div>
        </div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index === 0 ? "flex-grow-0" : "flex-grow"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                currentStep === index
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-300 text-gray-600"
              } ${
                currentStep > index
                  ? "bg-green-500 border-green-500 text-white"
                  : ""
              }`}
            >
              {currentStep > index ? (
                <CheckIcon className="w-6 h-6" />
              ) : (
                index + 1
              )}
            </div>
            <div
              className={`text-xs mt-2 ${
                currentStep >= index ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {step.name}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextStep}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
        disabled={currentStep === steps.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Stepper;
