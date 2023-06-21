import { Grid, InputLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';

const FormTextField = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { inputFieldSize, inputFieldStyle, templates } = useProps();

  const isPassword = (): boolean => {
    if (data.validation) {
      return data.validation.validation === 'password';
    }

    return false;
  };

  return (
    <Grid item xs={data.fieldWidth * 12}>
      <Controller
        name={data.key}
        control={control}
        defaultValue=''
        render={({ field }) => {
          if (templates?.TextField) {
            const { TextField } = templates;

            return (
              <TextField
                data={data}
                value={field.value}
                error={error[data.key] || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
              />
            );
          }

          return (
            <>
              <InputLabel sx={inputFieldStyle?.textField?.labelStyle || {}}>
                {data.fieldLabel.label}
                {data.isRequired && <span style={{ color: 'red' }}>*</span>}
              </InputLabel>
              <TextField
                {...field}
                sx={inputFieldStyle?.textField?.fieldStyle || {}}
                size={inputFieldSize}
                onChange={(e: any) => onChange(e, data, field.onChange)}
                fullWidth
                disabled={Boolean(data.disable)}
                type={isPassword() ? 'password' : 'text'}
                placeholder={data.fieldLabel.placeholderText}
                error={error[data.key] || '' ? true : false}
                helperText={
                  error[data.key] || ''
                    ? (error[data.key]?.message as string).replace(data.key, data.fieldLabel.label)
                    : ''
                }
              />
            </>
          );
        }}
      />
    </Grid>
  );
};

export default FormTextField;
