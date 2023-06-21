// import { CustomTemplateFieldProps } from './Context/PropContext/type';
import React from 'react';
import Form from './Components/Form';
import { sampleJsonField } from './sampleData';
import { ButtonTemplateProps, CustomFieldProps } from './Context/PropContext/type';
import { Button } from '@mui/material';

const defaultValue = {
  CheckBoxGroupCheck: ['sunday', 'thrusday', 'monday'],
  LeftFar: false,
  LeftNear: false,
  RightFar: false,
  RightNear: true,
  VisionRightNear: '20/20',
  Ishihara: 'Failed',
  RightEyeDetails: 'asdf',
  LeftEyeDetails: 'asdf',
};

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ errors, values }) => {
  return (
    <React.Fragment>
      <button type='submit'>Submit</button>
      <button onClick={() => console.log(errors)}>Errors</button>
      <button onClick={() => console.log(values)}>Values</button>
    </React.Fragment>
  );
};

const CalculateButton: React.FC<CustomFieldProps> = ({ context }) => {
  return <Button onClick={() => console.log(context.values)}>Test Button</Button>;
};

const App = () => {
  const uploadFile = async (file: File) => {
    const url = await URL.createObjectURL(file);
    return url;
  };

  return (
    <div>
      <Form
        schema={sampleJsonField}
        defaultValue={defaultValue}
        onSubmit={(d) => console.log(d)}
        onFileUpload={uploadFile}
        templates={{
          ButtonTemplates: ButtonTemplate,
        }}
        customFields={{
          customField: CalculateButton,
        }}
      />
    </div>
  );
};

export default App;
