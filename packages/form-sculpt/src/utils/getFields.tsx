import { Control, FieldErrors } from 'react-hook-form';

import FormDate from '../Components/Fields/date';
import FormTime from '../Components/Fields/time';
import FormTitle from '../Components/Fields/title';
import FormRadio from '../Components/Fields/radio';
import SubTitle from '../Components/Fields/subTitle';
import FormSelect from '../Components/Fields/select';
import FormFileUpload from '../Components/Fields/file';
import FormCheckbox from '../Components/Fields/checkbox';
import FormDateTime from '../Components/Fields/datetime';
import FormTextArea from '../Components/Fields/textArea';
import FormTextField from '../Components/Fields/textField';
import FormDescription from '../Components/Fields/description';
import FormMultiFileUpload from '../Components/Fields/multiFile';
import FormCheckboxes from '../Components/Fields/checkboxes';
import Label from '../Components/Fields/label';

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
