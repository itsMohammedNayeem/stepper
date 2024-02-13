import React, { useState } from "react";
import cx from "classnames";

const StepperApp = ({ stepsConfig = [] }) => {
  console.log("🚀 ~ StepperApp ~ stepsConfig:", stepsConfig);
  const [currentStep, setCurrentStep] = useState(2);
  const [isComplete, setIsComplete] = useState(false);

  if (stepsConfig.length === 0) {
    return (
      <div>
        <h2>No steps found</h2>
      </div>
    );
  }

  const handleNext = () => {};

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper p-4 relative flex items-center mb-[20px] justify-between">
        {stepsConfig.map((step, index) => {
          return (
            <div
              className={cx("step flex flex-col relative items-center")}
              key={step.name}
            >
              <div
                className={cx(
                  "step-number size-[30px] rounded-full bg-[#ccc] mb-[5px] flex items-center justify-center z-2",
                  {
                    "bg-[#007bff] text-[#fff]": currentStep === index + 1,
                    "bg-[#28a745] text-[#fff]":
                      currentStep > index + 1 || isComplete,
                  }
                )}
              >
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name text-[14px]">{step.name}</div>
            </div>
          );
        })}
      </div>

      <div className="step-content text-center">
        <ActiveComponent />
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
