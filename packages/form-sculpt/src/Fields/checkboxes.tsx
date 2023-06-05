import { Checkbox, FormControlLabel, Grid, InputLabel, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useValueHolder } from '../Context/DataHolderContext/hook';
import { useProps } from '../Context/PropContext/hook';

const FormCheckboxes = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { values } = useValueHolder();
  const { inputFieldStyle, templates } = useProps();

  return (
    <Grid item xs={data.fieldWidth * 12} display='flex' flexDirection={'column'} justifyContent='flex-start'>
      <InputLabel sx={inputFieldStyle?.textField?.labelStyle || {}}>
        {data.fieldLabel.label}
        {data.isRequired && <span style={{ color: 'red' }}>*</span>}
      </InputLabel>
      {data.options &&
        data.options.map((d, i) => {
          return (
            <Controller
              key={i}
              name={d}
              control={control}
              render={({ field }) => {
                if (templates?.CheckBox) {
                  const { CheckBox } = templates;

                  return (
                    <CheckBox
                      data={data}
                      value={field.value}
                      error={error[data.key] || {}}
                      onChange={(e: any) => onChange(e, data, field.onChange)}
                    />
                  );
                }
                return (
                  <>
                    <FormControlLabel
                      label={d}
                      {...field}
                      sx={inputFieldStyle?.checkbox?.labelStyle || {}}
                      onClick={(e: any) => onChange(e, data, field.onChange)}
                      checked={values[data.key] && values[data.key].includes(d)}
                      control={<Checkbox sx={inputFieldStyle?.checkbox?.fieldStyle || {}} />}
                    />
                  </>
                );
              }}
            />
          );
        })}
      <Typography variant='subtitle2' color='error'>
        {}
        {error[data.key]! ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label) : ''}
      </Typography>
    </Grid>
  );
};

export default FormCheckboxes;
