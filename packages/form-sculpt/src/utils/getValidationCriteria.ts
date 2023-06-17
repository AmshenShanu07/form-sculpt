import * as yup from 'yup'; 

import { SchemaType } from '../Context/PropContext/type';

const getValidationCriteria = (data:SchemaType):yup.AnyObject => {
  const { fieldType, validation, isRequired, fieldLabel: { label } } = data;
  let yupObj: any = yup;

  if (fieldType === 'checkbox' ) {
    yupObj = yupObj['boolean']();
  }

  if ( fieldType === 'checkboxes' || fieldType === 'multiFile' ) {
    yupObj = yupObj['array']()['of'](yup.string());

    if (validation?.min) {
      yupObj = yupObj['min'](validation.min);
    }
    if (validation?.max) {
      yupObj = yupObj['max'](validation.max);
    }

    if (!validation?.min && isRequired) {
      yupObj = yupObj['min'](1,`${label} is a required field`);
    }

  }

  if (
      fieldType === 'date' ||
      fieldType === 'time' ||
      fieldType === 'dateTime'
    ) {
      yupObj = yupObj['date']();
  }

  if (
    fieldType === 'select' ||
    fieldType === 'radio' ||
    fieldType === 'file'
  ) {
    yupObj = yupObj['string']();
  }

  if (
      fieldType === 'textField' ||
      fieldType === 'textArea'
    ) {

      if (validation?.validation && validation.validation === 'number') {
        const { min, max } = validation;
        yupObj = yupObj['number']();

        if (min) {
          yupObj = yupObj['min'](min);
        }

        if (max) {
          yupObj = yupObj['max'](max);
        }

      } else if (validation?.validation && validation.validation === 'limit') {
        const { min, max } = validation;
        yupObj = yupObj['string']();
        if (min) {
          yupObj = yupObj['min'](min);
        }
        if (max) {
          yupObj = yupObj['max'](max);
        }
      } else if (validation?.validation && validation.validation === 'email') {
        yupObj = yupObj['string']()['email']();
      } else if ( validation?.validation && validation.validation === 'url' ) {
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
