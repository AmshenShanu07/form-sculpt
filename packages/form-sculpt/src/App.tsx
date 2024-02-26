import { LocaleObject } from 'yup';
import React from 'react';
import Form from './Components/Form';
import { validationSchema } from './sampleData';
import { ButtonTemplateProps } from './Context/PropContext/type';

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ errors, values }) => {

  return (
    <React.Fragment>
      <button type='submit'>Submit</button>
      <button onClick={() => console.log(errors)}>Err  ors</button>
      <button onClick={() => console.log(values)}>Values</button>
    </React.Fragment>
  );
};

const App = () => {
  const uploadFile = async (file: File) => {
    const url = await URL.createObjectURL(file);
    return url;
  };

  const validationSampleFuntion = (data:any, otherData?: any) => {
    console.log(data);
    return JSON.stringify({ key: 'some_key', values: { ...data }, type:'email',  ...otherData });
  };

  const validationMsgs:LocaleObject = {
    mixed:{
      required: 'this is required field',
      notType: validationSampleFuntion,

    },
    string: {
      email: validationSampleFuntion({ type: 'email' }),
      url: validationSampleFuntion({ type: 'url' }),
      max: (data) => validationSampleFuntion({},{ ...data }),
      min: (data) => validationSampleFuntion({},{ ...data }),
    },
    number: {
      integer: validationSampleFuntion,
      max: validationSampleFuntion,
      min: validationSampleFuntion,
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
