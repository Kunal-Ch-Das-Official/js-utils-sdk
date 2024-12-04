import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../styles/LTMobileNoInputStyle.css";

interface LTMobileNoInputProps {
  inputContainerId: string;
  inputFieldsId: string;
  fieldName: string;
  labelText: string;
  placeholderText?: string | undefined;
  defaultMobileNo?: string | undefined;
  isRequired: boolean;
  targetCatcher: Dispatch<SetStateAction<string>>;
}

const LTMobileNoInput: React.FC<LTMobileNoInputProps> = ({
  inputContainerId,
  inputFieldsId,
  labelText,
  placeholderText,
  isRequired,
  defaultMobileNo,
  targetCatcher,
  fieldName,
}) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [onlyNumber, setOnlyNumber] = useState<string | null>(null);
  const [countryCodeValue, setCountryCodeValue] = useState<string | number>();

  const countryCodes = [
    { code: "+1", country: "US" }, // United States
    { code: "+44", country: "GB" }, // United Kingdom
    { code: "+91", country: "IN" }, // India
    { code: "+61", country: "AU" }, // Australia
    { code: "+81", country: "JP" }, // Japan
    { code: "+86", country: "CN" }, // China
    { code: "+49", country: "DE" }, // Germany
    { code: "+33", country: "FR" }, // France
    { code: "+39", country: "IT" }, // Italy
    { code: "+7", country: "RU" }, // Russia
    { code: "+82", country: "KR" }, // South Korea
    { code: "+34", country: "ES" }, // Spain
    { code: "+55", country: "BR" }, // Brazil
    { code: "+27", country: "ZA" }, // South Africa
    { code: "+64", country: "NZ" }, // New Zealand
    { code: "+52", country: "MX" }, // Mexico
    { code: "+31", country: "NL" }, // Netherlands
    { code: "+47", country: "NO" }, // Norway
    { code: "+46", country: "SE" }, // Sweden
    { code: "+41", country: "CH" }, // Switzerland
    { code: "+65", country: "SG" }, // Singapore
    { code: "+60", country: "MY" }, // Malaysia
    { code: "+63", country: "PH" }, // Philippines
    { code: "+62", country: "ID" }, // Indonesia
    { code: "+98", country: "IR" }, // Iran
    { code: "+92", country: "PK" }, // Pakistan
    { code: "+880", country: "BD" }, // Bangladesh
    { code: "+971", country: "AE" }, // United Arab Emirates
    { code: "+20", country: "EG" }, // Egypt
    { code: "+212", country: "MA" }, // Morocco
    { code: "+234", country: "NG" }, // Nigeria
    { code: "+62", country: "ID" }, // Indonesia
    { code: "+32", country: "BE" }, // Belgium
    { code: "+351", country: "PT" }, // Portugal
    { code: "+48", country: "PL" }, // Poland
    { code: "+30", country: "GR" }, // Greece
    { code: "+90", country: "TR" }, // Turkey
    { code: "+94", country: "LK" }, // Sri Lanka
    { code: "+84", country: "VN" }, // Vietnam
    { code: "+66", country: "TH" }, // Thailand
    { code: "+351", country: "PT" }, // Portugal
    { code: "+43", country: "AT" }, // Austria
    { code: "+40", country: "RO" }, // Romania
    { code: "+36", country: "HU" }, // Hungary
    { code: "+372", country: "EE" }, // Estonia
    { code: "+358", country: "FI" }, // Finland
  ];
  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCodeValue(event.target.value);
  };
  useEffect(() => {
    if (!onlyNumber) {
      setIsValid(null);
    } else {
      const numberLength = onlyNumber ? onlyNumber.length : 0;
      if (numberLength < 10 || numberLength > 10) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  }, [onlyNumber]);

  useEffect(() => {
    const orginalNumber = onlyNumber ? onlyNumber : "";
    const countryCode = countryCodeValue ? countryCodeValue : "";
    const finalValue = countryCode + orginalNumber;

    targetCatcher(finalValue);
  }, [onlyNumber, targetCatcher, countryCodeValue]);
  return (
    <section
      className={`entire_input ${
        isValid === true
          ? "validBorder"
          : isValid === null
          ? ""
          : "invalidBorder"
      }`}
    >
      <select className="number_origin_selector" onChange={handleOption}>
        {countryCodes.map((data, index) => (
          <option
            className="select_country_option"
            key={index}
            value={data.code}
            id="option_value"
          >
            {data.country}
          </option>
        ))}
      </select>

      <div className="input_group" id={inputContainerId}>
        <input
          required={isRequired}
          id={inputFieldsId}
          type="number"
          name={fieldName}
          defaultValue={defaultMobileNo}
          autoComplete="off"
          className="mobile_input"
          placeholder={placeholderText}
          onChange={(event) => setOnlyNumber(event.target.value)}
        />
        <label
          htmlFor={inputFieldsId}
          className={`${defaultMobileNo ? "hiddenLabel" : "user_label"}`}
        >
          {labelText}
        </label>
        <span className={isValid === null ? "initialStateStyle" : ""}>
          {isValid === true ? (
            <span className="valid_message">Everything seems great!</span>
          ) : (
            <span className="not_valid_message">
              Seems mobile no is not valid!
            </span>
          )}
        </span>
      </div>
    </section>
  );
};

export default LTMobileNoInput;
