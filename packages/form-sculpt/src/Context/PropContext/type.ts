import { SxProps } from '@mui/material';
import React from 'react';

export interface CustomTemplatesType {
  ButtonTemplates?: React.ComponentType<ButtonTemplateProps>;
  Select?: React.ComponentType<CustomTemplateFieldProps>;
  CheckBox?: React.ComponentType<CustomTemplateFieldProps>;
  TextArea?: React.ComponentType<CustomTemplateFieldProps>;
  DateField?: React.ComponentType<CustomTemplateFieldProps>;
  TimeField?: React.ComponentType<CustomTemplateFieldProps>;
  TextField?: React.ComponentType<CustomTemplateFieldProps>;
  RadioButton?: React.ComponentType<CustomTemplateFieldProps>;
  DateTimeField?: React.ComponentType<CustomTemplateFieldProps>;

  FileUploadField?: React.ComponentType<CustomTemplateFileProps>;
  MultiFileUploadField?: React.ComponentType<CustomTemplateFileProps>;
}

export interface CustomTemplateFieldProps {
  data: DynamicFormCardType;
  onChange: (e: any) => void;
  value: any;
  error: any;
}

export interface ButtonTemplateProps {
  errors?: any;
  values?: any;
}

export interface CustomTemplateFileProps {
  data: DynamicFormCardType;
  onUpload: (e: any) => void;
  value: string | string[];
  error: any;
}

export type FieldLabelType = {
  label: string;
  placeholderText: any;
  description: string;
};

export type ValidationType = {
  validation?: string;
  min?: number;
  max?: number;
  fileType?: string[];
  fileSize?: number;
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
  | 'multiFile';

export type DynamicFormCardType = {
  key: string;
  ifValueIs?: any;
  disable?: boolean;
  defaultValue?: any;
  fieldWidth: number;
  options?: string[];
  isRequired: boolean;
  fieldType: FieldType;
  fieldLabel: FieldLabelType;
  validation?: ValidationType;
  dependentParentLabel?: string;
};

export interface InputCustomStylingI {
  labelStyle?: SxProps<any>;
  fieldStyle?: SxProps<any>;
}

export interface InputFieldStyleI {
  textField?: InputCustomStylingI;
  textArea?: InputCustomStylingI;
  select?: InputCustomStylingI;
  radio?: InputCustomStylingI;
  checkbox?: InputCustomStylingI;
}

export interface SessionStylingI {
  title?: SxProps<any>;
  subTitle?: SxProps<any>;
  description?: SxProps<any>;
  label?: SxProps<any>;
}

export interface FormPropType {
  schema: DynamicFormCardType[];
  defaultValue?: any;
  onSubmit: (data: any) => void;

  onFileUpload?: (data: File) => string | Promise<string>;

  //Custom Styling
  templates?: CustomTemplatesType;
  inputFieldStyle?: InputFieldStyleI;
  sessionStyling?: SessionStylingI;
  inputFieldSize?: 'small' | 'medium';
}
