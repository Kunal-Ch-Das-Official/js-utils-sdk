import React, { Dispatch, SetStateAction } from "react";
import "../../styles/inputs-style/emailInput.css";

interface EmailInputProps {
  inputContainerId: string;
  inputFieldsId: string;
  labelText: string;
  placeholderText: string;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string | number>>;
  targetValue: string;
  errorMessage: string | undefined;
  isNotValid: boolean;
  customStyle: string | object;
  fieldName: string;
  defaultEmail?: string | undefined;
}

const EmailInput: React.FC<EmailInputProps> = ({
  inputContainerId,
  inputFieldsId,
  labelText,
  placeholderText,
  isRequired,
  defaultEmail,
  targetCatcher,
  targetValue,
  errorMessage,
  isNotValid,
  customStyle,
  fieldName,
}) => {
  const domainArray = [
    " aol.com",
    "att.net",
    "bellsouth.net",
    "centurylink.com",
    "centurytel.net",
    "comcast.net",
    "cox.net",
    "charter.net",
    "earthlink.net",
    "frontiernet.net",
    "gvtc.com",
    "outlook.com",
    "hotmail.com",
    "msn.com",
    "live.com",
    "icloud",
    "netzero.net",
    "optonline.net",
    "rcn.com",
    "roadrunner.com",
    "rocketmail.com",
    "sbcglobal.net",
    "verizon.net",
    "windstream.net",
    "blackplanet.com",
    "usa.net",
    "pacbell.net",
    "cs.com",
    "chartermi.net",
    "bellsouth.com",
    "centurytel.com",
    "comcast.com",
    "cox.com",
    "charter.com",
    "earthlink.com",
    "me.com",
    "netzero.com",
    "optonline.com",
    "sbcglobal.com",
    "yahoo.com",
    "gmail.com",
  ];
  const getDomain = targetValue?.split("@")[1];
  domainArray.includes(getDomain) ? (isNotValid = false) : (isNotValid = true);
  return (
    <div className="input_group" id={inputContainerId}>
      <input
        required={isRequired}
        id={inputFieldsId}
        type="email"
        name={fieldName}
        defaultValue={defaultEmail}
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

export default EmailInput;
