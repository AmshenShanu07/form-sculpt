import { Control, FieldErrors } from 'react-hook-form';

import FormDate from '../Fields/date';
import FormTime from '../Fields/time';
import FormTitle from '../Fields/title';
import FormRadio from '../Fields/radio';
import SubTitle from '../Fields/subTitle';
import FormSelect from '../Fields/select';
import FormFileUpload from '../Fields/file';
import FormCheckbox from '../Fields/checkbox';
import FormDateTime from '../Fields/datetime';
import FormTextArea from '../Fields/textArea';
import FormTextField from '../Fields/textField';
import FormDescription from '../Fields/description';
import FormMultiFileUpload from '../Fields/multiFile';
import FormCheckboxes from '../Fields/checkboxes';
import Label from '../Fields/label';

const getField = (
  data: any,
  control: Control,
  error: FieldErrors,
  onChange: (e: any, data: any, callback: (e: any) => void) => void,
) => {
  const props = { data, control, error, key: data.key, onChange };

  switch (data.fieldType) {
    case 'title':
      return <FormTitle {...props} />;
    case 'description':
      return <FormDescription {...props} />;
    case 'subTitle':
      return <SubTitle {...props} />;
    case 'label':
      return <Label {...props} />;
    case 'textField':
      return <FormTextField {...props} />;
    case 'textArea':
      return <FormTextArea {...props} />;
    case 'select':
      return <FormSelect {...props} />;
    case 'radio':
      return <FormRadio {...props} />;
    case 'checkbox':
      return <FormCheckbox {...props} />;
    case 'checkboxes':
      return <FormCheckboxes {...props} />;
    case 'date':
      return <FormDate {...props} />;
    case 'time':
      return <FormTime {...props} />;
    case 'dateTime':
      return <FormDateTime {...props} />;
    case 'file':
      return <FormFileUpload {...props} />;
    case 'multiFile':
      return <FormMultiFileUpload {...props} />;
    default:
      return <></>;
  }
};

export default getField;
