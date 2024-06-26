import { InputLabel, MenuItem, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import { OptionsType } from '../../Context/PropContext/type';
import Wrapper from '../Form/Wrapper';

const FormSelect = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;
  const { inputFieldSize, inputFieldStyle, templates } = useProps();

  return (
    <Wrapper item xs={data.fieldWidth * 12}>
      <Controller
        name={data.key}
        control={control}
        defaultValue={data?.options && data.isRequired ? data?.options[0] : 'none'}
        render={({ field }) => {
          if (templates?.Select) {
            const { Select: SelectField } = templates;

            return (
              <SelectField
                data={data}
                value={field.value}
                error={error[data.key] || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
              />
            );
          }

          return (
            <>
              <InputLabel sx={inputFieldStyle?.select?.labelStyle || {}}>
                {data.fieldLabel.label}
                {data.isRequired && <span style={{ color: 'red' }}>*</span>}
              </InputLabel>
              <TextField
                {...field}
                sx={inputFieldStyle?.select?.fieldStyle || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
                fullWidth
                disabled={Boolean(data.disable)}
                placeholder={data.fieldLabel.placeholderText}
                error={error[data.key] || '' ? true : false}
                helperText={
                  error[data.key] || ''
                    ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label)
                    : ''
                }
                select
                FormHelperTextProps={{
                  sx: inputFieldStyle?.select?.errorStyle || {},
                }}
                size={inputFieldSize}
              >
                {!data.isRequired && <MenuItem value='none'>None</MenuItem>}
                {data.options?.map((d: OptionsType, i: number) => (
                  <MenuItem value={d.key} key={i}>
                    {d.label}
                  </MenuItem>
                ))}
              </TextField>
            </>
          );
        }}
      />
    </Wrapper>
  );
};

export default FormSelect;
