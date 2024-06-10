import { LocaleObject } from 'yup';
import React from 'react';
import Form from './Components/Form';
import { sampleJsonField } from './sampleData';
import { ButtonTemplateProps } from './Context/PropContext/type';

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ errors, values }) => {

  return (
    <React.Fragment>
      <button type='submit'>Submit</button>
      <button onClick={() => console.log(errors)}>Errors</button>
      <button onClick={() => console.log(values)}>Values</button>
    </React.Fragment>
  );
};

const App = () => {
  const uploadFile = async (file: File) => {
    const url = await URL.createObjectURL(file);
    return url;
  };

  const validationSampleFuntion = (type:string, data:any) => {
    console.log(data);

    if (type == 'notType' && data.type) {
      return `This field must be a valid ${data.type}`;
    }
    
    if (type === 'checkboxes' && data?.min) {
      return `at least ${data.min} should be selected`;
    }
    
    if (type === 'checkboxes' && data?.max) {
      return `at most ${data.max} should be selected`;
    }
    
    if (type === 'number' && data?.min) {
      return `less than ${data.min}`;
    }
    
    if (type === 'number' && data?.max) {
      return `more than ${data.max}`;
    }
    
    if (type === 'string' && data?.min) {
      return `should not be less than ${data.min} character`;
    }
    
    if (type === 'string' && data?.max) {
      return `should not be more than ${data.max} character`;
    }

    return 'asdf';
  };

  const validationMsgs:LocaleObject = {
    mixed: {
      notType: (data) => validationSampleFuntion('notType',data),
      required: 'This is a required field'
    },
    array: {
      min: (data) => validationSampleFuntion('checkboxes',data),
      max: (data) => validationSampleFuntion('checkboxes',data),
    },
    date: {
      min: 'Previous Date Should not be selected',
      max: 'Future Date Should not be selected'
    },
    number: {
      min: (data) => validationSampleFuntion('number',data),
      max: (data) => validationSampleFuntion('number',data),
    },
    string: {
      min: (data) => validationSampleFuntion('string',data),
      max: (data) => validationSampleFuntion('string',data),
      email: "This should be a valid email",
      url: "This should be a valid url"
    }
  };

  return (
    <div>
      <Form 
        schema={sampleJsonField}
        globalValidationMessages={validationMsgs}
        onSubmit={(d) => console.log(d)}
        onFileUpload={uploadFile}
        templates={{
          ButtonTemplates:ButtonTemplate
        }}
      />
    </div>
  );
};

export default App;
