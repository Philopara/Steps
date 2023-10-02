import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(true);
  const handlePrev = () => {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  };
  const handleClose = () => {
    setClose((current) => !current); //another way to write this one-liner: setClose((current) => (current ? false : true));
  };
  return (
    <div>
      <button className="close" onClick={handleClose}>
      &times;
      </button>
      {close && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// State allows us to update components view by re-rendering it
// Persists data between multiple re-renders
// steps in creating state: 1) create state variable 2) use it in the code 3) update state variable in an event handler
// useState() returns an Array
