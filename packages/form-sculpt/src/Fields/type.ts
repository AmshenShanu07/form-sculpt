import { Control, FieldErrors } from 'react-hook-form';
import { DynamicFormCardType } from '../Context/PropContext/type';

export interface InputFieldProps {
  data: DynamicFormCardType;
  control: Control;
  error: FieldErrors;
  onChange: (e: any, data: any, callback: (e: any) => any) => void;
}
