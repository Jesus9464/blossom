import React from "react";

type Props = {
  onClick: () => void;
  text: string;
  className?: string;
  id?: string;
  isDisabled?: boolean;
};

const Button: React.FC<Props> = ({
  onClick,
  text,
  className,
  id,
  isDisabled,
}) => {
  return (
    <button
      id={id}
      disabled={isDisabled}
      className={
        className
          ? className
          : "px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
