import { useEffect, Fragment, useState } from 'react';

import * as yup from 'yup';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import getField from '../../Utils/getFields';
import { useProps } from '../../Context/PropContext/hook';
import { SchemaType } from '../../Context/PropContext/type';
import getButtonTemplate from '../../Utils/getButtonTemplate';
import { useValueHolder } from '../../Context/DataHolderContext/hook';
import getValidationCriteria from '../../Utils/getValidationCriteria';

const FormComponent = () => {
  const [init, setInit] = useState<boolean>(false);

  const { onSubmit, schema, defaultValue, customFields, globalValidationMessages } = useProps();
  const { values, setValues, isError } = useValueHolder();

  useEffect(() => {
    setInit(false);
    let tempValue: any = {};
    for (const { key, fieldType, isRequired, ...data } of schema) {
      if (fieldType === 'checkbox') {
        tempValue = { ...tempValue, [key]: false };
      }

      if (fieldType === 'checkboxes') {
        tempValue = { ...tempValue, [key]: [] };
      }

      if (fieldType === 'select' && isRequired && data.options) {
        const { dependentParentLabel, ifValueIs } = data;

        if (!dependentParentLabel || (dependentParentLabel && tempValue[dependentParentLabel] === ifValueIs)) {
          tempValue = { ...tempValue, [key]: data?.options[0] };
          setValue(key, data?.options[0]);
        }
      }

      if (defaultValue && defaultValue[key] !== undefined) {
        tempValue = { ...tempValue, [key]: defaultValue[key] };
        setValue(key, defaultValue[key]);
      }
    }

    setValues(tempValue);
    setInit(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!init) return;

    let tempValue = { ...values };

    for (const { key } of schema) {
      if (defaultValue && defaultValue[key] !== undefined) {
        tempValue = { ...tempValue, [key]: defaultValue[key] };
        setValue(key, defaultValue[key]);
      }
    }

    setValues(tempValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  const checkIfValidationNeeded = (data: any): boolean => {
    const { fieldType, dependentParentLabel, ifValueIs } = data;

    if (fieldType === 'title' || fieldType === 'description' || fieldType === 'subTitle' || fieldType === 'label') {
      return false;
    }

    if (dependentParentLabel && values[dependentParentLabel] !== ifValueIs) {
      return false;
    }

    return true;
  };

  const getYupResolver = () => {
    const validationSchema: any = {};

    if (globalValidationMessages) {
      yup.setLocale(globalValidationMessages);
    }

    for (const data of schema) {
      if (!checkIfValidationNeeded(data)) {
        continue;
      }

      validationSchema[data.key] = getValidationCriteria(data, globalValidationMessages);
    }

    return yup.object(validationSchema);
  };

  const { control, formState, handleSubmit, reset, setValue } = useForm({ resolver: yupResolver(getYupResolver()) });

  const onChangeHandler = (e: any, data: any, callback: (e: any) => any) => {
    const { fieldType, key } = data;
    const prvVal = values[key] || null;

    let tempVal = { ...values };

    tempVal[key] = e?.target?.value || '';

    if (fieldType === 'checkbox') {
      tempVal = { ...tempVal, [key]: !values[key] };
    }

    if (fieldType === 'checkboxes') {
      const vals = prvVal ? [...prvVal] : [];

      const index = vals.findIndex((d) => d === e.target.name);

      if (index === -1) {
        e.target.name && vals.push(e.target.name);
      } else {
        vals.splice(index, 1);
      }

      tempVal = { ...tempVal, [key]: vals };
    }

    if (fieldType === 'date' || fieldType === 'time' || fieldType === 'dateTime') {
      delete tempVal[key];

      tempVal[key] = new Date(e);
    }

    reset({ resolver: yupResolver(getYupResolver()) });

    for (const field of schema) {
      const { key, dependentParentLabel, ifValueIs, ...data } = field;

      if (!tempVal[key] && data.fieldType === 'select' && data.isRequired && data.options) {
        tempVal = { ...tempVal, [key]: data?.options[0] };
      }

      if (dependentParentLabel && !checkIfValueIsEqual(tempVal[dependentParentLabel], ifValueIs)) {
        delete tempVal[key];
      }

      if (
        !tempVal[key] &&
        defaultValue &&
        dependentParentLabel &&
        defaultValue[key] !== undefined &&
        checkIfValueIsEqual(tempVal[dependentParentLabel], ifValueIs)
      ) {
        tempVal[key] = defaultValue[key];
      }

      if (tempVal[key] != undefined) {
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

  const renderFields = (fields: SchemaType[]): any => {
    return fields.map((d: SchemaType, i: number) => {
      if (d.dependentParentLabel) {
        return (
          <Fragment key={i}>
            {checkIfValueIsEqual(values[d.dependentParentLabel], d.ifValueIs) ? (
              getField(d, control, formState.errors, values, onChangeHandler, customFields)
            ) : (
              <></>
            )}
          </Fragment>
        );
      }

      return getField(d, control, formState.errors, values, onChangeHandler, customFields);
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
