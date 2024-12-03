import React, { Dispatch, SetStateAction } from "react";
import "../../styles/inputs-style/charecterInput.css";

interface CharecterInputProps {
  inputContainerId: string;
  inputFieldsId: string;
  inputType: string;
  labelText: string;
  placeholderText: string;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string | number>>;
  errorMessage: string | undefined;
  isNotValid: boolean;
  customStyle: string | object;
  fieldName: string;
  defaultText?: string | number | undefined;
}

const CharecterInput: React.FC<CharecterInputProps> = ({
  inputContainerId,
  inputFieldsId,
  inputType,
  labelText,
  placeholderText,
  isRequired,
  defaultText,
  targetCatcher,
  errorMessage,
  isNotValid,
  customStyle,
  fieldName,
}) => {
  return (
    <div className="input_group" id={inputContainerId}>
      <input
        required={isRequired}
        id={inputFieldsId}
        type={inputType}
        name={fieldName}
        defaultValue={defaultText}
        autoComplete="off"
        className={`input ${isNotValid === true ? "errorHappen" : customStyle}`}
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

export default CharecterInput;
