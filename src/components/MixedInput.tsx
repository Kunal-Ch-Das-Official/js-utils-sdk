import React, { Dispatch, SetStateAction } from "react";
import "../styles/MixedInput.css";

interface MixedInputProps {
  inputContainerId: string;
  inputFieldsId: string;
  inputType: string;
  labelText: string;
  placeholderText: string;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string | number>>;
  errorMessage: string | null;
  isNotValid: boolean;
  inputStyle: string | object;
  fieldName: string;
}

const MixedInput: React.FC<MixedInputProps> = ({
  inputContainerId,
  inputFieldsId,
  inputType,
  labelText,
  placeholderText,
  isRequired,
  targetCatcher,
  errorMessage,
  isNotValid,
  inputStyle,
  fieldName,
}) => {
  return (
    <div className="input_group" id={inputContainerId}>
      <input
        required={isRequired}
        id={inputFieldsId}
        type={inputType}
        name={fieldName}
        autoComplete="off"
        className={`input ${isNotValid === true ? "errorHappen" : inputStyle}`}
        placeholder={placeholderText}
        onChange={(event) => targetCatcher(event.target.value)}
      />
      <label htmlFor={inputFieldsId} className="user_label">
        {labelText}
      </label>
      <span className="errorMessageStyle">
        {isNotValid === true ? errorMessage : ""}
      </span>
    </div>
  );
};

export default MixedInput;
