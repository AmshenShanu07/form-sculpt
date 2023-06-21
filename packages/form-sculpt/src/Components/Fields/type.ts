import { Control, FieldErrors } from 'react-hook-form';
import { SchemaType } from '../../Context/PropContext/type';

export interface InputFieldProps {
  data: SchemaType;
  control: Control;
  error: FieldErrors;
  values: any;
  onChange: (e: any, data: any, callback: (e: any) => any) => void;
}
