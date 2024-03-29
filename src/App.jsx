import StepperApp from "./components/StepperApp";
import { CHECKOUT_STEPS } from "./lib/api";

function App() {
  return (
    <>
      <div className="font-mono items-center justify-center text-center">
        <h2 className="text-2xl">Stepper App</h2>
        <StepperApp stepsConfig={CHECKOUT_STEPS} />
      </div>
    </>
  );
}

export default App;
