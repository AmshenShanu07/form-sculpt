import { createContext, ReactNode } from 'react';
import { FormPropType } from './type';

const defaultData: FormPropType = {
  schema: [],
  defaultValue: {},
  inputFieldSize: 'small',
  onSubmit: (d: any) => console.log(d),
  onFileUpload: (file: File) => URL.createObjectURL(file),
  inputFieldStyle: {},
  customFields: {},
};

const PropContext = createContext(defaultData);

interface Props extends FormPropType {
  children: ReactNode;
}

const PropProvider = (props: Props) => {
  const {
    schema,
    children,
    inputFieldSize,
    inputFieldStyle,
    templates,
    sessionStyling,
    defaultValue,
    onSubmit,
    onFileUpload,
    customFields,
    globalValidationMessages,
  } = props;

  const values = {
    onSubmit,
    schema,
    defaultValue,
    inputFieldSize: inputFieldSize || 'small',
    templates,
    inputFieldStyle,
    sessionStyling,
    onFileUpload,
    customFields,
    globalValidationMessages,
  };

  return <PropContext.Provider value={values}>{children}</PropContext.Provider>;
};

export { PropContext, PropProvider };
