import "./Button.css"; 

function Button({
    variant = "primary",
    size = "medium",
    disabled = false,
    children,
    onClick
}) {
    
    const className = `button button-${variant} button-${size}`;

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}    
        >
            {children}
        </button>
    );
}

export default Button; 