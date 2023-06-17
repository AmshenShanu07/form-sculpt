import { Checkbox, FormControlLabel, Grid, InputLabel, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useValueHolder } from '../../Context/DataHolderContext/hook';
import { useProps } from '../../Context/PropContext/hook';

const FormCheckboxes = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { values } = useValueHolder();
  const { inputFieldStyle, templates } = useProps();

  return (
    <Grid item xs={data.fieldWidth * 12} >
      <Grid container >
        <Grid item xs={12} >
          <InputLabel sx={inputFieldStyle?.textField?.labelStyle || {}}>
            {data.fieldLabel.label}
            {data.isRequired && <span style={{ color: 'red' }}>*</span>}
          </InputLabel>
        </Grid>

      {data.options &&
        data.options.map((d:string, i:number) => {
          return (
            <Grid key={i} item xs={4} >
                <Controller
                  name={d}
                  control={control}
                  render={({ field }) => {
                    if (templates?.CheckBox) {
                      const { CheckBox } = templates;
    
                      return (
                        <CheckBox
                          data={data}
                          value={field.value || false}
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
                          checked={(values[data.key] && values[data.key].includes(d)) || false}
                          control={<Checkbox sx={inputFieldStyle?.checkbox?.fieldStyle || {}} />}
                        />
                      </>
                    );
                  }}
                />
            </Grid>
          );
        })}
        <Grid item xs={12} >
          <Typography variant='subtitle2' color='error'>
            {error[data.key]! ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label) : ''}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormCheckboxes;
