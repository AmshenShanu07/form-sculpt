// import { useState } from 'react';

import FormComponent from './FormComponent';
import { PropProvider } from '../../Context/PropContext';
import { DataHolderProvider } from '../../Context/DataHolderContext';
import { useEffect } from 'react';
import { FormPropType } from '../../Context/PropContext/type';

const Form = (props: FormPropType) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkKeyDuplication(), [props]);

  const checkKeyDuplication = () => {
    const { schema } = props;
    const keys = new Set();
    for (let i = 0; i < schema.length; i++) {
      const key = schema[i].key;
      if (keys.has(key)) {
        throw new Error(`Duplicate key found, key:${key} already exist`);
      }
      keys.add(key);
    }
  };

  return (
    <PropProvider {...props}>
      <DataHolderProvider>
        <FormComponent />
      </DataHolderProvider>
    </PropProvider>
  );
};


export default Form;
