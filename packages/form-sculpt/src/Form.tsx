// import { useState } from 'react';

import FormComponent from './Fields/FormComponent';
import { PropProvider } from './Context/PropContext';
import { FormPropType } from './Context/PropContext/type';
import { DataHolderProvider } from './Context/DataHolderContext';

const Form = (props: FormPropType) => {
  // const [values, setValues] = useState<any>({});

  return (
    <PropProvider {...props}>
      <DataHolderProvider>
        <FormComponent />
      </DataHolderProvider>
    </PropProvider>
  );
};

export default Form;
