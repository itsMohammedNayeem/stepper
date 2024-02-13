import React, { useState } from "react";

const StepperApp = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  if (stepsConfig.length === 0) {
    return (
      <div>
        <h2>No steps found</h2>
      </div>
    );
  }

  const handleNext = () => {};

  return (
    <>
      <div className="stepper p-4 relative flex items-center mb-[20px] justify-between">
        {stepsConfig.map((step, index) => {
          return (
            <div
              className="step flex flex-col relative items-center"
              key={step.name}
            >
              <div className="step-number size-[30px] rounded-full bg-[#ccc] mb-[5px] flex items-center justify-center z-2">
                {index + 1}
              </div>
              <div className="step-name text-[14px]">{step.name}</div>
            </div>
          );
        })}
      </div>
      {!isComplete && (
        <button className="rounded-md bg-blue-500 p-2" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default StepperApp;
