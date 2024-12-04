import React, { Dispatch, SetStateAction } from "react";
import "../styles/LTCustomTypeInputStyle.css";

interface LTCustomTypeInputProps {
  inputContainerId: string;
  inputFieldsId: string;
  fieldName: string;
  labelText: string;
  placeholderText?: string | undefined;
  defaultVal?: string | number | undefined;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string>>;
  inputType: string;
}

const LTCustomTypeInput: React.FC<LTCustomTypeInputProps> = ({
  inputContainerId,
  inputFieldsId,
  fieldName,
  labelText,
  placeholderText,
  isRequired,
  defaultVal,
  targetCatcher,
  inputType,
}) => {
  return (
    <>
      <section className="input_group" id={inputContainerId}>
        <input
          required={isRequired}
          id={inputFieldsId}
          type={inputType}
          name={fieldName}
          defaultValue={defaultVal}
          autoComplete="off"
          className={`input`}
          placeholder={placeholderText}
          onChange={(event) => targetCatcher(event.target.value)}
        />
        <label
          htmlFor={inputFieldsId}
          className={`${defaultVal ? "hiddenLabel" : "user_label"}`}
        >
          {labelText}
        </label>
      </section>
    </>
  );
};

export default LTCustomTypeInput;
