import { FormControlLabel, Grid, InputLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import { OptionsType } from '../../Context/PropContext/type';

const FormRadio = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;
  const { inputFieldStyle, inputFieldSize, templates } = useProps();

  return (
    <Grid item xs={data.fieldWidth * 12}>
      <Controller
        name={data.key}
        control={control}
        defaultValue=''
        render={({ field }) => {
          if (templates?.RadioButton) {
            const { RadioButton: RadioButtonField } = templates;

            return (
              <RadioButtonField
                data={data}
                value={field.value}
                error={error[data.key] || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
              />
            );
          }

          return (
            <>
              <InputLabel sx={inputFieldStyle?.radio?.labelStyle || {}}>
                {data.fieldLabel.label}
                {data.isRequired && <span style={{ color: 'red' }}>*</span>}
              </InputLabel>
              <RadioGroup row {...field} onChange={(e: any) => onChange(e, data, field.onChange)}>
                {data?.options &&
                  data?.options.map((d: OptionsType, i: number) => (
                    <FormControlLabel
                      key={i}
                      value={d.key}
                      label={d.label}
                      disabled={Boolean(data.disable)}
                      sx={inputFieldStyle?.radio?.labelStyle || {}}
                      control={<Radio size={inputFieldSize} sx={inputFieldStyle?.radio?.fieldStyle || {}} />}
                    />
                  ))}
              </RadioGroup>
              <Typography sx={inputFieldStyle?.radio?.errorStyle || {}} variant='subtitle2' color='#d32f2f'>
                {error[data.key] || ''
                  ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label)
                  : ''}
              </Typography>
            </>
          );
        }}
      />
    </Grid>
  );
};

export default FormRadio;
