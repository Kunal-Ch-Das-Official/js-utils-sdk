# js-utils-sdk

## Author: Kunal Chandra Das.

# 1.CharecterInput

A customizable and reusable React character input component built with TypeScript. `CharecterInput` provides flexibility to handle various input scenarios with built-in validation, error handling, and styling options.

---

## Installation

Install the component using npm or yarn:

```bash
npm install js-utils-sdk
# or
yarn add js-utils-sdk
```

```
import React, { useState } from "react";
import CharecterInput from "charecter-input";
import "charecter-input/styles/inputs-style/charecterInput.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <CharecterInput
      inputContainerId="custom-input-container"
      inputFieldsId="custom-input-field"
      inputType="text or number "
      labelText="Enter your name"
      placeholderText="Type here..."
      isRequired={true}
      defaultText=""
      targetCatcher={setInputValue}
      errorMessage="This field is required"
      isNotValid={inputValue.length === 0}
      customStyle=""
      fieldName="name"
    />
  );
};

export default App;

```

## Props

The `CharecterInput` component accepts the following props:

| Prop Name          | Type                            | Required  | Default     | Description                                                      |
| ------------------ | ------------------------------- | --------- | ----------- | ---------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------- |
| `inputContainerId` | `string`                        | Yes       | `""`        | The ID of the input container for styling and accessibility.     |
| `inputFieldsId`    | `string`                        | Yes       | `""`        | The ID of the input field.                                       |
| `inputType`        | `string`                        | Yes       | `"text"`    | The type of the input (e.g., `text`, `password`, `email`, etc.). |
| `labelText`        | `string`                        | Yes       | `""`        | The label text displayed for the input field.                    |
| `placeholderText`  | `string`                        | Yes       | `""`        | The placeholder text for the input field.                        |
| `isRequired`       | `boolean`                       | Yes       | `false`     | Determines whether the field is required.                        |
| `targetCatcher`    | `Dispatch<SetStateAction<string | number>>` | Yes         | `undefined`                                                      | A callback function to handle the input value. |
| `errorMessage`     | `string`                        | No        | `undefined` | The error message to display when validation fails.              |
| `isNotValid`       | `boolean`                       | Yes       | `false`     | Indicates whether the field's value is valid or not.             |
| `customStyle`      | `string                         | object`   | No          | `""`                                                             | Custom CSS class or style for the input field. |
| `fieldName`        | `string`                        | Yes       | `""`        | The name attribute of the input field.                           |
| `defaultText`      | `string                         | number    | undefined`  | No                                                               | `undefined`                                    | The default value of the input field. |

# 2.EmailInput

A customizable and reusable React email input component built with TypeScript. `EmailInput` provides built-in validation for common email domains, error handling, and styling options.

---

## Installation

Install the component using npm or yarn:

```bash
npm install js-sdk-react
# or
yarn add js-sdk-react
```

```
import React, { useState } from "react";
import EmailInput from "email-input";
import "email-input/styles/inputs-style/emailInput.css";

const App = () => {
  const [email, setEmail] = useState("");

  return (
    <EmailInput
      inputContainerId="custom-email-container"
      inputFieldsId="custom-email-field"
      labelText="Enter your email"
      placeholderText="Type your email..."
      isRequired={true}
      defaultEmail=""
      targetCatcher={setEmail}
      targetValue={email}
      errorMessage="Please enter a valid email address"
      isNotValid={email.split("@")[1] !== "gmail.com"}
      customStyle=""
      fieldName="email"
    />
  );
};

export default App;

```

## Props

| Prop Name          | Type                            | Required   | Default     | Description                                                  |
| ------------------ | ------------------------------- | ---------- | ----------- | ------------------------------------------------------------ | ---------------------------------------------- |
| `inputContainerId` | `string`                        | Yes        | `""`        | The ID of the input container for styling and accessibility. |
| `inputFieldsId`    | `string`                        | Yes        | `""`        | The ID of the input field.                                   |
| `labelText`        | `string`                        | Yes        | `""`        | The label text displayed for the input field.                |
| `placeholderText`  | `string`                        | Yes        | `""`        | The placeholder text for the input field.                    |
| `isRequired`       | `boolean`                       | Yes        | `false`     | Determines whether the field is required.                    |
| `targetCatcher`    | `Dispatch<SetStateAction<string | number>>`  | Yes         | `undefined`                                                  | A callback function to handle the input value. |
| `errorMessage`     | `string`                        | No         | `undefined` | The error message to display when validation fails.          |
| `isNotValid`       | `boolean`                       | Yes        | `false`     | Indicates whether the field's value is valid or not.         |
| `customStyle`      | `string                         | object`    | No          | `""`                                                         | Custom CSS class or style for the input field. |
| `fieldName`        | `string`                        | Yes        | `""`        | The name attribute of the input field.                       |
| `defaultEmail`     | `string                         | undefined` | No          | `undefined`                                                  | The default email value for the input field.   |
