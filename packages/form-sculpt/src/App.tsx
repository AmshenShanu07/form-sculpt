import { LocaleObject } from 'yup';
import React from 'react';
import Form from './Components/Form';
import { validationSchema } from './sampleData';
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

  const validationSampleFuntion = (data:any) => {
    console.log(data);
    return { key: 'some_key', values: { ...data }, type:'email' };
  };

  const validationMsgs:LocaleObject = {
    mixed:{
      required: validationSampleFuntion,
      notType: validationSampleFuntion,

    },
    string: {
      email: validationSampleFuntion,
    },
    number: {
      integer: validationSampleFuntion,
    }
    
  };

  return (
    <div>
      <Form 
        schema={validationSchema}
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
