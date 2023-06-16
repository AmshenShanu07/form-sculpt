import { useEffect, Fragment } from 'react';

import * as yup from 'yup';
import getField from '../../Utils/getFields';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useProps } from '../../Context/PropContext/hook';
import { useValueHolder } from '../../Context/DataHolderContext/hook';
import getButtonTemplate from '../../Utils/getButtonTemplate';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const FormComponent = () => {
  const { onSubmit, schema, defaultValue } = useProps();
  const { values, setValues, isError } = useValueHolder();

  useEffect(() => {
    let tempValue: any = {};
    for (const { key, fieldType, isRequired, ...data } of schema) {
      if (fieldType === 'checkbox') {
        tempValue = { ...tempValue, [key]: false };
      }

      if (fieldType === 'checkboxes') {
        tempValue = { ...tempValue, [key]: [] };
      }

      if (defaultValue && defaultValue[key]) {
        tempValue = { ...tempValue, [key]: defaultValue[key] };
        setValue(key, defaultValue[key]);
      }

      if (fieldType === 'select' && isRequired && data.options) {
        const { dependentParentLabel, ifValueIs } = data;

        if (!dependentParentLabel || (dependentParentLabel && tempValue[dependentParentLabel] === ifValueIs)) {
          tempValue = { ...tempValue, [key]: data?.options[0] };
          setValue(key, data?.options[0]);
        }
      }
    }

    setValues(tempValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIfValidationNeeded = (data: any): boolean => {
    const { fieldType, dependentParentLabel, ifValueIs } = data;

    if (
      fieldType === 'title' ||
      fieldType === 'description' ||
      fieldType === 'subTitle' ||
      fieldType === 'checkbox' ||
      fieldType === 'checkboxes'
    ) {
      return false;
    }

    if (dependentParentLabel && values[dependentParentLabel] !== ifValueIs) {
      return false;
    }

    return true;
  };

  const getYupResolver = () => {
    const validationSchema: any = {};
    for (const data of schema) {
      if (!checkIfValidationNeeded(data)) {
        continue;
      }

      const { key, fieldType, isRequired } = data;
      let validation: any = yup;

      if (fieldType === 'checkbox') {
        validation = validation['boolean']();
      } else if ( 
        fieldType === 'date' || 
        fieldType === 'dateTime' || 
        fieldType === 'time' 
      ){
          validation = validation['date']();
      } else if (
          fieldType === 'checkboxes' ||
          fieldType === 'multiFile'
      ) {
          validation = validation['array']()['of'](yup.string());
      } else {
          validation = validation['string']();
      }

      if (isRequired) {
        validation = validation['required']();
      }

      validationSchema[key] = validation;
    }

    return yup.object(validationSchema);
  };

  const { control, formState, handleSubmit, reset, setValue } = useForm({ resolver: yupResolver(getYupResolver()) });

  const onChangeHandler = (e: any, data: any, callback: (e: any) => any) => {
    const { fieldType, key } = data;
    const prvVal = values[key] || null;

    let tempVal = { ...values, [key]: e?.target?.value || '' };

    if (fieldType === 'checkbox') {
      tempVal = { ...tempVal, [key]: !values[key] };
    }

    if (fieldType === 'checkboxes') {
      const vals = prvVal?[...prvVal]:[];

      const index = vals.findIndex((d) => d === e.target.name);

      if (index === -1) {
        e.target.name && vals.push(e.target.name);
      } else {
        vals.splice(index, 1);
      }

      tempVal = { ...tempVal, [key]: vals };
    }

    if (fieldType === 'date' || fieldType === 'time' || fieldType === 'dateTime') {
      tempVal = { ...tempVal, [key]: new Date(e) };
    }

    reset({ resolver: yupResolver(getYupResolver()) });

    for (const field of schema) {
      const { key, dependentParentLabel, ifValueIs, ...data } = field;

      if (!tempVal[key] && data.fieldType === 'select' && data.isRequired && data.options) {
        tempVal = { ...tempVal, [key]: data?.options[0] };
      }

      if (dependentParentLabel && tempVal[dependentParentLabel] !== ifValueIs) {
        delete tempVal[key];
      }

      if (tempVal[key]) {
        setValue(key, tempVal[key]);
      }
    }

    setValues(tempVal);
    callback(e);
  };

  const checkIfValueIsEqual = (value: any, ifValue: any) => {
    if (value instanceof Array) {
      
      return value.includes(ifValue);
    }

    return value === ifValue;
  };

  const renderFields = (fields: any[]): any => {
    return fields.map((d: any, i: number) => {
      if (d.dependentParentLabel) {
        return (
          <Fragment key={i}>
            {checkIfValueIsEqual(values[d.dependentParentLabel], d.ifValueIs) ? (
              getField(d, control, formState.errors, onChangeHandler)
            ) : (
              <></>
            )}
          </Fragment>
        );
      }

      return getField(d, control, formState.errors, onChangeHandler);
    });
  };

  const onClickSubmit = () => {
    if (isError) {
      return;
    }

    onSubmit(values);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <Grid container spacing={3}>
          {renderFields(schema)}
          <Grid item xs={12}>
            {getButtonTemplate({ errors: formState.errors, values })}
          </Grid>
        </Grid>
      </form>
    </LocalizationProvider>
  );
};

export default FormComponent;
