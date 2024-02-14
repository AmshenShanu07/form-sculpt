import * as yup from 'yup';

import { SchemaType } from '../Context/PropContext/type';
import moment, { Moment } from 'moment';
import dayjs from 'dayjs';

const fileTypeSchema = yup.object({
  fileName: yup.string(),
  fileUrl: yup.string(),
});

const getFormatedDate = (fieldType: string, date: string): string => {
  if (fieldType === 'date') {
    return moment(date).format('DD-MM-YYYY');
  } else if (fieldType === 'dateTime') {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  } else {
    return moment(date).format('h:mm a');
  }
};

const getValidationCriteria = (data: SchemaType): yup.AnyObject => {
  const {
    fieldType,
    validation,
    isRequired,
    fieldLabel: { label },
  } = data;
  let yupObj: any = yup;

  if (fieldType === 'checkbox') {
    yupObj = yupObj['boolean']().typeError(`This field must a boolean value`);
  }

  if (fieldType === 'checkboxes') {
    yupObj = yupObj['array']()['of'](yup.string());

    if (validation?.min) {
      yupObj = yupObj['min'](validation.min, `At least ${validation.min} option must be selected`);
    }
    if (validation?.max) {
      yupObj = yupObj['max'](validation.max, `At most ${validation.max} option can be selected`);
    }

    if (!validation?.min && isRequired) {
      yupObj = yupObj['min'](1, `${data.key} is a required field`);
    }
  }

  if (fieldType === 'date' || fieldType === 'time' || fieldType === 'dateTime') {
    yupObj = yupObj['date']();
    let crntDate: string | Moment = moment(new Date());

    if (validation?.preventPast) {
      if (fieldType === 'date') {
        crntDate = crntDate.format('YYYY-MM-DD');
      } else {
        crntDate = crntDate.format();
      }

      const validationMsg = `${data.key} must be later than ${getFormatedDate(fieldType, crntDate)}`;

      yupObj = yupObj['min'](dayjs(crntDate), validationMsg);
    } else if (validation?.preventFuture) {
      if (fieldType === 'date') {
        crntDate = crntDate.add(1, 'day').format('YYYY-MM-DD');
      } else {
        crntDate = crntDate.format();
      }
      const validationMsg = `${data.key} must be ealier than ${getFormatedDate(fieldType, crntDate)}`;
      yupObj = yupObj['max'](new Date(crntDate), validationMsg);
    }
  }

  if (fieldType === 'select' || fieldType === 'radio') {
    yupObj = yupObj['string']();
  }

  if (fieldType === 'file') {
    yupObj = fileTypeSchema;
  }

  if (fieldType === 'multiFile') {
    yupObj = yupObj['array']()['of'](fileTypeSchema);

    if (validation?.min) {
      yupObj = yupObj['min'](validation.min, `At least ${validation.min} files must be uploaded`);
    }

    if (validation?.max) {
      yupObj = yupObj['max'](validation.max, `At Most ${validation.max} files can be selected`);
    }

    if (!validation?.min && isRequired) {
      yupObj = yupObj['min'](1, `${label} is a required field`);
    }
  }

  if (fieldType === 'textField' || fieldType === 'textArea') {
    if (validation?.validation && validation.validation === 'number') {
      const { min, max } = validation;
      yupObj = yupObj['number']().typeError(`This field field must be valid integer`);

      if (min) yupObj = yupObj['min'](min, `This field must be greater than ${min}`);

      if (max) {
        yupObj = yupObj['max'](max, `${data.key} must be less than ${max}`);
      }
    } else if (validation?.validation && validation.validation === 'limit') {
      const { min, max } = validation;
      yupObj = yupObj['string']().typeError('This field must be a valid string');

      if (min) yupObj = yupObj['min'](min, `This field must have more than ${min} characters.`);

      if (max) yupObj = yupObj['max'](max, `This field must have fewer than ${max} characters.`);
    } else if (validation?.validation && validation.validation === 'email') {
      yupObj = yupObj['string']()['email']('This field should be a valid email');
    } else if (validation?.validation && validation.validation === 'url') {
      yupObj = yupObj['string']()['url']();
    } else {
      yupObj = yupObj['string']();
    }
  }

  if (isRequired) {
    yupObj = yupObj['required']();
  }

  return yupObj;
};

export default getValidationCriteria;
