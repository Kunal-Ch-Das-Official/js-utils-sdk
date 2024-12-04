import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../styles/LTPasswordInputStyle.css";

interface LTPasswordInputProps {
  inputContainerId: string;
  inputFieldsId: string;
  fieldName: string;
  labelText: string;
  placeholderText?: string | undefined;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string>>;
  targetValue: string;
}

const LTPasswordInput: React.FC<LTPasswordInputProps> = ({
  inputContainerId,
  inputFieldsId,
  fieldName,
  labelText,
  placeholderText,
  isRequired,
  targetCatcher,
  targetValue,
}) => {
  const [eyesOpen, setEyesOpen] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  const handlePasswordShowAndHide = () => {
    const fieldsId = document.getElementById(inputFieldsId) as HTMLInputElement;
    setEyesOpen((prev) => !prev);
    if (fieldsId.type === "password") {
      fieldsId.type = "text";
    } else {
      fieldsId.type = "password";
    }
  };

  useEffect(() => {
    console.log("Target Value:", targetValue); // Debugging line
    if (targetValue.length > 0) {
      const trimmedValue = targetValue.trim(); // Remove leading/trailing spaces

      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setPasswordValid(passwordRegex.test(trimmedValue));
    } else {
      setPasswordValid(null);
    }
  }, [targetValue]);

  return (
    <main>
      <section className="input_group" id={inputContainerId}>
        <input
          required={isRequired}
          id={inputFieldsId}
          type="password"
          name={fieldName}
          autoComplete="off"
          className={`input`}
          placeholder={placeholderText}
          onChange={(event) => targetCatcher(event.target.value)}
        />
        <label htmlFor={inputFieldsId} className={`user_label`}>
          {labelText}
        </label>
        <span className={passwordValid === null ? "initialStateStyle" : ""}>
          {passwordValid === true ? (
            <span className="valid_message">Password seems strong!</span>
          ) : (
            <span className="not_valid_message">
              Must contain at least a number and special character. And
              min-length of 8
            </span>
          )}
        </span>
      </section>
      <span className="eye_icon_container" onClick={handlePasswordShowAndHide}>
        {eyesOpen ? (
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#636363"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <title>eye-close-solid</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <g>
                    <path d="M45.3,22.1C43.2,19.5,35.4,11,24,11a23.4,23.4,0,0,0-3.8.3L39.9,31.1a30.1,30.1,0,0,0,5.4-5.2A3,3,0,0,0,45.3,22.1Z" />
                    <path d="M41.1,38.3,29.4,26.6A5.9,5.9,0,0,1,24,30a6,6,0,0,1-6-6,5.9,5.9,0,0,1,3.4-5.4L9.7,6.9A2,2,0,0,0,6.9,9.7l4.8,4.8a31.4,31.4,0,0,0-9,7.6,3,3,0,0,0,0,3.8C4.8,28.5,12.6,37,24,37a25.2,25.2,0,0,0,8.5-1.6l5.8,5.7a2,2,0,1,0,2.8-2.8Z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="#6e6e6e"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <title>eye-open-solid</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <path d="M45.3,22.1C43.2,19.5,35.4,11,24,11S4.8,19.5,2.7,22.1a3,3,0,0,0,0,3.8C4.8,28.5,12.6,37,24,37s19.2-8.5,21.3-11.1A3,3,0,0,0,45.3,22.1ZM24,30a6,6,0,1,1,6-6A6,6,0,0,1,24,30Z" />
                </g>
              </g>
            </g>
          </svg>
        )}
      </span>
    </main>
  );
};

export default LTPasswordInput;
