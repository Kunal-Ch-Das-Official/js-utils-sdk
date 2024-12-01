import React, { HTMLInputTypeAttribute, useState } from "react";

interface InputGroupProps {
  isRequired: boolean;
  inputType: HTMLInputTypeAttribute;
  inputFieldName: string;
  defaultText?: string | number;
  inputLabel: string | number;
  placeholderText?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  isRequired,
  inputType,
  inputFieldName,
  defaultText,
  inputLabel,
  placeholderText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <input
        required={isRequired}
        type={inputType}
        name={inputFieldName}
        defaultValue={defaultText}
        placeholder={placeholderText}
        autoComplete="off"
        style={{
          border:
            isFocused || isFilled
              ? "1.5px solid #ffaa2a"
              : "1.5px solid #9e9e9e",
          borderRadius: "0.5rem",
          background: "none",
          padding: "5px",
          fontSize: "1rem",
          color: "#000000",
          transition: "border 150ms cubic-bezier(0.4, 0, 0.2, 1)",
          outline: "none",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setIsFilled(!!e.target.value); // Check if the input has content
        }}
      />
      <label
        style={{
          position: "absolute",
          left: "10px",
          color: isFocused || isFilled ? "#ff951c" : "#000000",
          pointerEvents: "none",
          transform:
            isFocused || isFilled
              ? "translateY(-50%) scale(0.8)"
              : "translateY(5px)",
          transition: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: isFocused || isFilled ? "#212121" : "transparent",
          padding: isFocused || isFilled ? "0px 15px" : "0",
          borderRadius: isFocused || isFilled ? "50px" : "0",
        }}
      >
        {inputLabel}
      </label>
    </div>
  );
};

export default InputGroup;
