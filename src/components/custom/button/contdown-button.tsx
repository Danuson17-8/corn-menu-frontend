import { useState, useEffect } from "react";

export const CountdownButton = ({onClick}: {onClick: () => void}) => {
    const [countdown, setCountdown] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown((prev) => prev - 1);
            },1000);
        } else {
            setIsDisabled(false);
        }

        return () => clearTimeout(timer);
    }, [countdown]);

    const handleClick = () => {
        setIsDisabled(true);
        setCountdown(30);
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
            type="button"
            className={`mx-3 px-4 py-2 border-l-3 border-amber-600 text-amber-600
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
        >
            {isDisabled ? `${countdown}s` : "Send"}
        </button>
    );
}
