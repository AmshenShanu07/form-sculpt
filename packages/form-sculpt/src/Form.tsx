// import { useState } from 'react';

import FormComponent from './Fields/FormComponent';
import { PropProvider } from './Context/PropContext';
import { DataHolderProvider } from './Context/DataHolderContext';
import { useEffect } from 'react';
import {
  FormPropType,
  ButtonTemplateProps,
  CustomTemplateFieldProps,
  CustomTemplateFileProps,
  CustomTemplatesType,
  DynamicFormCardType,
  FieldLabelType,
  FieldType,
  InputCustomStylingI,
  InputFieldStyleI,
  SessionStylingI,
  ValidationType,
} from './Context/PropContext/type';

const Form = (props: FormPropType) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => checkKeyDuplication(), []);

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

export {
  FormPropType,
  ButtonTemplateProps,
  CustomTemplateFieldProps,
  CustomTemplateFileProps,
  CustomTemplatesType,
  DynamicFormCardType,
  FieldLabelType,
  FieldType,
  InputCustomStylingI,
  InputFieldStyleI,
  SessionStylingI,
  ValidationType,
};

export default Form;
