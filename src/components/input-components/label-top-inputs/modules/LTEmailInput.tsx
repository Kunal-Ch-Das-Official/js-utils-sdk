import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../styles/labelTop_email_style.css";

interface EmailInputProps {
  inputContainerId: string;
  inputFieldsId: string;
  fieldName: string;
  labelText: string;
  placeholderText?: string | undefined;
  defaultEmail?: string | undefined;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string>>;
  targetValue: string;
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
  fieldName,
}) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
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
    if (targetValue.length === 0) {
      setIsValid(null);
    } else {
      const getDomain = targetValue?.split("@")[1];
      if (!domainArray.includes(getDomain)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  }, [targetValue]);
  return (
    <>
      <div className="input_group" id={inputContainerId}>
        <input
          required={isRequired}
          id={inputFieldsId}
          type="email"
          name={fieldName}
          defaultValue={defaultEmail}
          autoComplete="off"
          className={`input ${
            isValid === true
              ? "validBorder"
              : isValid === null
              ? ""
              : "invalidBorder"
          }`}
          placeholder={placeholderText}
          onChange={(event) => targetCatcher(event.target.value)}
        />
        <label
          htmlFor={inputFieldsId}
          className={`${defaultEmail ? "hiddenLabel" : "user_label"}`}
        >
          {labelText}
        </label>
        <span className={isValid === null ? "initialStateStyle" : ""}>
          {isValid === true ? (
            <span className="valid_message">Everything seems great!</span>
          ) : (
            <span className="not_valid_message">Seems email is not valid!</span>
          )}
        </span>
      </div>
    </>
  );
};

export default EmailInput;
