# Form Sculpt
A React package to generate dynamic forms


## Installation

Please Install These packages before moving to form-sculpt


```bash
npm i @emotion/react @emotion/styled @hookform/resolvers @mui/material moment react-hook-form yup
```

or

```bash
yarn add @emotion/react @emotion/styled @hookform/resolvers @mui/material moment react-hook-form yup
```

Then install our package 

```bash
npm i form-sculpt
```

or

```bash
yarn add form-sculpt
```


## Example

### Generate Json Schema

Create a Json Schema for your form
```js
  const schema = [
    {
      fieldWidth: 1 / 3,
      key: "PersonalDetails",
      fieldLabel: {
        label: "Personal Details",
        placeholderText: "Personal Details",
        description: "some description about the field",
      },
      fieldType: "title",
      isRequired: true,
    },
    {
      fieldWidth: 1 / 2,
      key: "Des",
      fieldLabel: {
        label: "Enter Your Personal Details for data collection",
        placeholderText: "Enter Your Personal Details for data collection",
        description: "Enter Your Personal Details for data collection",
      },
      fieldType: "description",
      isRequired: true,
    },
    {
      fieldWidth: 1 / 2,
      key: "firstName",
      fieldLabel: {
        label: "First Name",
        placeholderText: "Enter First Name",
        description: "some description about the field",
      },
      fieldType: "textField",
      isRequired: true,
    },
    {
      fieldWidth: 1 / 2,
      key: "lastName",
      fieldLabel: {
        label: "Last Name",
        placeholderText: "Enter Last Name",
        description: "some description about the field",
      },
      fieldType: "textField",
      isRequired: true,
    },
    {
      fieldWidth: 1,
      key: "address",
      fieldLabel: {
        label: "Personal Address",
        placeholderText: "Enter Personal Address",
        description: "some description about the field",
      },
      fieldType: "textArea",
      isRequired: true,
    },
  ];
```

### Generating Form From Json Schema

pass the schema you made and the onSubmit funtion for generating the form
```jsx
import Form from "./Form";

const App = () => {

  return (
    <div>
      <Form schema={schema} onSubmit={(d) => console.log(d)} />
    </div>
  );
};

export default App;

```