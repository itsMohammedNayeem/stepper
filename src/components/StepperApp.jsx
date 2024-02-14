import React, { useState, useRef, useEffect } from "react";
import cx from "classnames";

const StepperApp = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    const marginLeft = stepRef.current[0].offsetWidth / 2;
    const marginRight = stepRef.current[stepsConfig.length - 1].offsetWidth / 2;
    setMargins({ marginLeft, marginRight });
  }, [stepRef, stepsConfig.length]);

  if (stepsConfig.length === 0) {
    return (
      <div>
        <h2>No steps found</h2>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (currentStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper relative flex items-center mb-[20px] justify-between">
        {stepsConfig.map((step, index) => {
          return (
            <div
              className={cx("step flex flex-col relative items-center")}
              ref={(el) => (stepRef.current[index] = el)}
              key={step.name}
            >
              <div
                className={cx(
                  "step-number size-[30px] rounded-full bg-[#ccc] mb-[5px] flex items-center justify-center z-10",
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

      <div
        className="progress-bar absolute top-[25%] left-0 h-1 bg-[#ccc]"
        style={{
          width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
          marginLeft: margins.marginLeft,
          marginRight: margins.marginRight,
        }}
      >
        <div
          className="progress h-full bg-[#28a745] transition ease-in duration-200"
          style={{ width: `${calculateProgressBarWidth()}%` }}
        ></div>
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
