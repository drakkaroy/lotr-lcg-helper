import classNames from 'classnames';
import "./step.css";
import { Step as StepType } from "../../types";

type StepStatus = "active" | "completed" | "pending";

interface StepProps {
    data: StepType;
    status: StepStatus;
}

const SvgDownArrow = () => {
    return (
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <rect fill="none" height="256" width="256"/>
            <polygon fill="none" points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
            <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="176" x2="80" y1="40" y2="40"/>
            <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="176" x2="80" y1="72" y2="72"/>
        </svg>
    )
}

const Step = (props: StepProps) => {

    const { status, data } = props;

    const stepClasses = classNames({
        'first': data.stepNumber === 1,
        'step': true,
        [`${status}`]: true
    });

    return (
        <div className={stepClasses}>
            <div className="step-circle">
                {status === "active" ? <span className="step-arrow"><SvgDownArrow /></span> : null}
            </div>
        </div>
    )
}

export default Step;