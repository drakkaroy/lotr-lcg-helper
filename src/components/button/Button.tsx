import "./button.css";
interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const { onClick, children } = props;

    const handleClick = () => {
        onClick ? onClick() : null;
    }

    return (
        <button className="button" onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;