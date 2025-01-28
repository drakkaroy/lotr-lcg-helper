import "./progress-bar.css";
import Step from "../step/Step";
import { Step as StepType } from "./../../types";

interface ProgressBarProps {
    steps: StepType[];
    currentStep: number;
}

const ProgressBar = (props: ProgressBarProps) => {

    const { steps, currentStep } = props;

    const getStepStatus = (step: StepType) => {
        if (step.stepNumber === currentStep) {
            return "active";
        } else if (step.stepNumber < currentStep) {
            return "completed";
        } else {
            return "pending";
        }
    }

    return (
        <div className="progress-bar" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={steps.length}>
            {steps.map((step: StepType) => (
                <Step key={step.stepNumber} status={getStepStatus(step)} data={step} />
            ))}
        </div>
    )
}

export default ProgressBar;