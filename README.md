
## Welcome to javascript Utility for React.(js-utils-react)🖐

(js-utils-react). This is npm package made for who are react developer and don't have much time to create small and effective utility functions or components from scratch. Like, complete reusable button with all kinds of feature, or an input field with validations, or hooks like click outside to close a toggle section download features, etc. The main defference amongs other packages and this package is: the others don't provide you complete utility components or functions, you have to modify after download or installation. But our case it's not same. you can just use it as it is. just declare and provide apropreate props, your work will be done. You will get step by step guidence bellow, and remember mose of the case props are almost same. If you stuck then you can see source code for better understanding. Please check it out. Or you can contribute to make it so powerful and popular, contributers are always welcome.👍   


## Authors

- [Kunal Chandra Das](https://www.kunalchandradas.tech/)
- [Github](https://github.com/Kunal-Ch-Das-Official)
- [Linkedin](https://www.linkedin.com/in/kunal-chandra-das-470bab218/)

## Input Fields documentation.

### 1. LTCustomTypeInput Component

The `LTCustomTypeInput` (Label top custom type input) component is a reusable and customizable input field built using React and TypeScript. It provides a simple interface for developers to include labeled input fields in their forms with ease. This component supports features like placeholder text, default values, required fields, and dynamic value updates via state.

---

#### Features

- Customizable input container and field IDs for flexible integration.
- Support for default values and placeholder text.
- Labels that dynamically hide or appear based on the presence of a value.
- Real-time value update via a state setter function.
- Configurable input types (e.g., `text`, `number`, `email`, etc.).
- Support for required fields.

---

#### Installation
   ```bash
   npm install js-utils-react
```
#### Invocation
```javascript
import React, { useState } from "react";
import LTCustomTypeInput from "./components/LTCustomTypeInput";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div>
      <h1>Example Input</h1>
      <LTCustomTypeInput
        inputContainerId="username-container"
        inputFieldsId="username"
        fieldName="username"
        labelText="Username"
        placeholderText="Enter your username"
        isRequired={true}
        defaultVal=""
        targetCatcher={setInputValue}
        inputType="text"
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default App;

```




#### Props

The `LTCustomTypeInput` component accepts the following props:

| Prop Name         | Type                                      | Description                                                                 | Required |
|--------------------|-------------------------------------------|-----------------------------------------------------------------------------|----------|
| `inputContainerId` | `string`                                  | ID for the input container element.                                         | Yes      |
| `inputFieldsId`    | `string`                                  | ID for the input field element.                                             | Yes      |
| `fieldName`        | `string`                                  | Name attribute for the input field (used in forms).                         | Yes      |
| `labelText`        | `string`                                  | The text displayed as the input's label.                                    | Yes      |
| `placeholderText`  | `string | undefined`                      | Placeholder text displayed in the input field (optional).                   | No       |
| `defaultVal`       | `string | number | undefined`             | Default value for the input field (optional).                               | No       |
| `isRequired`       | `boolean`                                 | Whether the input field is required.                                        | Yes      |
| `targetCatcher`    | `Dispatch<SetStateAction<string>>`        | Function to catch and update the input field's value in the parent state.   | Yes      |
| `inputType`        | `string`                                  | The type of input (e.g., `text`, `number`, `email`, etc.).                  | Yes      |

### 2. LTEmailInput Component

The `LTEmailInput`(Label top email input) component is a React-based reusable email input field with real-time validation. It allows users to input an email address, validates the domain against a predefined list, and provides feedback on validity. This component is built using TypeScript for type safety.

---

#### Features

- **Real-Time Validation:** Validates the entered email's domain from a predefined list.
- **Dynamic Feedback:** Displays feedback messages based on the validity of the email.
- **Customizable:** Fully customizable props for labels, placeholders, and validation messages.
- **Styling Options:** Conditional styling for valid, invalid, and neutral states.
- **Default Email Support:** Supports default email values.

---

#### Installation
   ```bash
   npm install js-utils-react
```

#### Invocation


```javascript
import React, { useState } from "react";
import LTEmailInput from "./components/LTEmailInput";

const App: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <h1>Email Input Example</h1>
      <LTEmailInput
        inputContainerId="email-container"
        inputFieldsId="email"
        fieldName="email"
        labelText="Email Address"
        placeholderText="Enter your email"
        isRequired={true}
        defaultEmail=""
        targetCatcher={setEmail}
        targetValue={email}
      />
      <p>Current Email Value: {email}</p>
    </div>
  );
};

export default App;


```

| **Prop Name**       | **Type**                             | **Description**                                                               | **Required** |
|---------------------|--------------------------------------|-------------------------------------------------------------------------------|--------------|
| `inputContainerId`  | `string`                            | ID for the input container element.                                           | Yes          |
| `inputFieldsId`     | `string`                            | ID for the input field element.                                               | Yes          |
| `fieldName`         | `string`                            | Name attribute for the input field (used in forms).                           | Yes          |
| `labelText`         | `string`                            | The text displayed as the input's label.                                      | Yes          |
| `placeholderText`   | `string | undefined`                | Placeholder text displayed in the input field (optional).                     | No           |
| `defaultEmail`      | `string | undefined`                | Default email value for the input field (optional).                           | No           |
| `isRequired`        | `boolean`                           | Whether the input field is required.                                          | Yes          |
| `targetCatcher`     | `Dispatch<SetStateAction<string>>`  | Function to catch and update the input field's value in the parent state.     | Yes          |
| `targetValue`       | `string`                            | The value of the input field to validate against the predefined domain list.  | Yes          |






### 3. LTMobileNoInput Component

The `LTMobileNoInput`(Label top mobile number input) component is a React component designed to handle mobile number inputs with country code selection. It validates the mobile number length and updates the parent component with the complete mobile number, including the country code.

#### Installation

To use the `LTMobileNoInput` component, first install the necessary dependencies:

```bash
npm install js-utils-react
```

#### Invocation
```javascript
import LTMobileNoInput from './path-to-component/LTMobileNoInput';

function App() {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="App">
      <LTMobileNoInput
        inputContainerId="mobileInputContainer"
        inputFieldsId="mobileInputField"
        fieldName="mobileNumber"
        labelText="Mobile Number"
        placeholderText="Enter your mobile number"
        defaultMobileNo=""
        isRequired={true}
        targetCatcher={setMobileNumber}
      />
      <p>Mobile Number: {mobileNumber}</p>
    </div>
  );
}

export default App;

```

#### Props

The `LTMobileNoInput` component accepts the following props:

| Prop Name        | Type                                   | Description                                                                 | Required |
|------------------|----------------------------------------|-----------------------------------------------------------------------------|----------|
| inputContainerId | `string`                               | The ID for the input container element.                                     | Yes      |
| inputFieldsId    | `string`                               | The ID for the input field element.                                         | Yes      |
| fieldName        | `string`                               | The name attribute for the input field.                                     | Yes      |
| labelText        | `string`                               | The label text for the input field.                                         | Yes      |
| placeholderText  | `string`                               | The placeholder text for the input field.                                   | No       |
| defaultMobileNo  | `string`                               | The default value for the mobile number input.                              | No       |
| isRequired       | `boolean`                              | Indicates whether the input field is required.                              | Yes      |
| targetCatcher    | `Dispatch<SetStateAction<string>>`     | A callback function to catch the final mobile number value.                 | Yes      |


### 4. LTPasswordInput Component

The `LTPasswordInput` (Label top password inputs) component is a React component designed to handle password inputs with validation and a feature to show/hide the password. It provides feedback on the password strength and updates the parent component with the password value.

#### Installation

To use the `LTPasswordInput` component, first install the necessary dependencies:

```bash
npm install js-utils-react
```
#### Invocation

```javascript 

import LTPasswordInput from './path-to-component/LTPasswordInput';

function App() {
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <LTPasswordInput
        inputContainerId="passwordInputContainer"
        inputFieldsId="passwordInputField"
        fieldName="password"
        labelText="Password"
        placeholderText="Enter your password"
        isRequired={true}
        targetCatcher={setPassword}
        targetValue={password}
      />
      <p>Password: {password}</p>
    </div>
  );
}

export default App;

```

## Props

The `LTMobileNoInput` component accepts the following props:

| Prop Name           | Type                          | Description                                       | Required |
|---------------------|-------------------------------|-------------------------------------------------|----------|
| `inputContainerId`  | `string`                     | The ID for the input container element.         | Yes      |
| `inputFieldsId`     | `string`                     | The ID for the input field element.             | Yes      |
| `fieldName`         | `string`                     | The name attribute for the input field.         | Yes      |
| `labelText`         | `string`                     | The label text for the input field.             | Yes      |
| `placeholderText`   | `string`                     | The placeholder text for the input field.       | No       |
| `isRequired`        | `boolean`                    | Indicates whether the input field is required.  | Yes      |
| `targetCatcher`     | `Dispatch<SetStateAction<string>>` | A callback function to catch the mobile number value. | Yes      |
| `defaultMobileNo`   | `string`                     | The default value for the mobile number input.  | No       |


## Styling

The `Inputs` component uses `InputStyles.css` for styling. You can customize these styles to match your design requirements.

### Default Classes

| **Class Name**      | **Purpose**                                                       |
|---------------------|-------------------------------------------------------------------|
| `input_group`       | Styles the input container group.                                 |
| `input`             | Styles the email input field.                                     |
| `validBorder`       | Applied when the email is valid.                                  |
| `invalidBorder`     | Applied when the email is invalid.                                |
| `hiddenLabel`       | Hides the label when a default value is present.                   |
| `user_label`        | Styles the label for visible input fields.                        |
| `valid_message`     | Styles the success message.                                       |
| `not_valid_message` | Styles the error message.                                         |
| `initialStateStyle` | Styles applied when no validation occurs.                         |

---

You can modify the classes as design requirements.

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

Developed by Kunal Chandra Das under MIT license © 2024