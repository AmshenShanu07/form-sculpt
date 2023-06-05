import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useValueHolder } from '../Context/DataHolderContext/hook';
import { useProps } from '../Context/PropContext/hook';

const FormCheckbox = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { values } = useValueHolder();
  const { inputFieldStyle, templates, inputFieldSize } = useProps();

  return (
    <Grid item xs={data.fieldWidth * 12} display='flex' flexDirection={'column'} justifyContent='flex-start'>
      <Controller
        name={data.key}
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
                label={data.fieldLabel.label}
                {...field}
                sx={inputFieldStyle?.checkbox?.labelStyle || {}}
                onClick={(e: any) => {
                  !data?.disable && onChange(e, data, field.onChange);
                }}
                checked={values[data.key] || false}
                disabled={Boolean(data.disable)}
                control={
                  <Checkbox
                    disabled={Boolean(data.disable)}
                    size={inputFieldSize}
                    sx={inputFieldStyle?.checkbox?.fieldStyle || {}}
                  />
                }
              />
            </>
          );
        }}
      />
      <Typography variant='subtitle2' color='error'>
        {}
        {error[data.key]! ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label) : ''}
      </Typography>
    </Grid>
  );
};

export default FormCheckbox;
