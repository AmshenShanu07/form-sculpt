import { InputLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import Wrapper from '../Form/Wrapper';

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
    <Wrapper item xs={data.fieldWidth * 12}>
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
                FormHelperTextProps={{
                  sx: inputFieldStyle?.textField?.errorStyle || {},
                }}
                helperText={
                  error[data.key]! ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label) : ''
                }
              />
            </>
          );
        }}
      />
    </Wrapper>
  );
};

export default FormTextField;
