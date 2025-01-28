import { useState, useEffect } from "react";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Button from "./components/button/Button";
import "./App.css";
import data from "./data.json";

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentStep]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === "Enter") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrevious();
    }
  } 

  const handleNext = () => {
    if (currentStep < data.steps.length) {
      setCurrentStep(currentStep + 1);
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div className="step-description">
          <h1>{data.steps[currentStep - 1].phaseLabel}</h1>
          <h2>{data.steps[currentStep - 1].label}</h2>
          <p>{data.steps[currentStep - 1].description}</p>
        </div>
        <ProgressBar steps={data.steps} currentStep={currentStep}></ProgressBar>
        <div className="button-container">
          <Button onClick={handlePrevious} children="Previous" />
          <Button onClick={handleNext} children="Next" />
        </div>
      </div>
    </div>
  );
}

export default App;
