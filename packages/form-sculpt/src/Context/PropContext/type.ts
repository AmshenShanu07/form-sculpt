import { SxProps } from '@mui/material';
import React from 'react';
import { LocaleObject } from 'yup';

export type CustomTemplateComponentType<T> = React.ComponentType<T> | React.FC<T>;

export interface CustomTemplatesType {
  ButtonTemplates?: CustomTemplateComponentType<ButtonTemplateProps>;
  Select?: CustomTemplateComponentType<CustomTemplateFieldProps>;
  CheckBox?: CustomTemplateComponentType<CustomTemplateFieldProps>;
  TextArea?: CustomTemplateComponentType<CustomTemplateFieldProps>;
  DateField?: CustomTemplateComponentType<CustomTemplateFieldProps>;
  TimeField?: CustomTemplateComponentType<CustomTemplateFieldProps>;
  TextField?: CustomTemplateComponentType<CustomTemplateFieldProps>;
  RadioButton?: CustomTemplateComponentType<CustomTemplateFieldProps>;
  DateTimeField?: CustomTemplateComponentType<CustomTemplateFieldProps>;

  FileUploadField?: CustomTemplateComponentType<CustomTemplateFileProps>;
  MultiFileUploadField?: CustomTemplateComponentType<CustomTemplateFileProps>;
}

export interface CustomTemplateFieldProps {
  data: SchemaType;
  onChange: (e: any) => void;
  value: any;
  error: any;
}

export interface ButtonTemplateProps {
  errors?: any;
  values?: any;
}

type UploadFileType = {
  fileName: string;
  fileUrl: string;
};

export interface CustomTemplateFileProps {
  data: SchemaType;
  onUpload: (e: any) => void;
  value: UploadFileType | UploadFileType[];
  error: any;
}

export type FieldLabelType = {
  label: string;
  placeholderText: any;
  description: string;
};

export type ValidationType = {
  validation?: 'limit' | 'number' | 'email' | 'url' | 'password' | 'fileType';
  min?: number;
  max?: number;
  fileType?: string[];
  fileSize?: number;
  preventFuture?: boolean;
  preventPast?: boolean;
};

export type FieldType =
  | 'title'
  | 'description'
  | 'subTitle'
  | 'label'
  | 'textField'
  | 'textArea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'checkboxes'
  | 'date'
  | 'time'
  | 'dateTime'
  | 'file'
  | 'multiFile'
  | 'custom';

export type OptionsType = {
  key: string;
  label: string;
};

export type SchemaType = {
  key: string;
  ifValueIs?: any;
  disable?: boolean;
  defaultValue?: any;
  fieldWidth: number;
  options?: OptionsType[];
  isRequired: boolean;
  fieldType: FieldType;
  fieldLabel: FieldLabelType;
  validation?: ValidationType;
  dependentParentLabel?: string;
};

export interface InputCustomStylingI {
  labelStyle?: SxProps<any>;
  fieldStyle?: SxProps<any>;
  errorStyle?: SxProps<any>;
}

export type InputFieldStyleI = {
  [key in FieldType]?: InputCustomStylingI;
};

export interface SessionStylingI {
  title?: SxProps<any>;
  subTitle?: SxProps<any>;
  description?: SxProps<any>;
  label?: SxProps<any>;
  container?: SxProps<any>;
}

export interface CustomFieldProps {
  onChange: (e: any) => void;
  value: any;
  error: any;
  data: SchemaType;
  context: {
    values: any;
    errors: any;
    schema: SchemaType[];
  };
}

export interface CustomFieldI {
  [key: string]: CustomTemplateComponentType<CustomFieldProps>;
}

export interface FormPropType {
  schema: SchemaType[];
  defaultValue?: any;
  onSubmit: (data: any) => void;

  onFileUpload?: (data: File) => string | Promise<string>;

  //Customization Props
  templates?: CustomTemplatesType;
  inputFieldStyle?: InputFieldStyleI;
  sessionStyling?: SessionStylingI;
  inputFieldSize?: 'small' | 'medium';
  customFields?: CustomFieldI;
  globalValidationMessages?: LocaleObject;
}
