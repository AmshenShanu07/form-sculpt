import { Box, Checkbox, FormControlLabel, Grid, InputLabel, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useValueHolder } from '../../Context/DataHolderContext/hook';
import { useProps } from '../../Context/PropContext/hook';
import { OptionsType } from '../../Context/PropContext/type';
import Wrapper from '../Form/Wrapper';

const FormCheckboxes = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { values } = useValueHolder();
  const { inputFieldStyle, templates } = useProps();

  return (
    <Wrapper item xs={data.fieldWidth * 12}>
      <Grid container>
        <Grid item xs={12}>
          <InputLabel sx={inputFieldStyle?.textField?.labelStyle || {}}>
            {data.fieldLabel.label}
            {data.isRequired && <span style={{ color: 'red' }}>*</span>}
          </InputLabel>
        </Grid>

        {data.options?.length &&
          data.options.map((d: OptionsType, i: number) => {
            return (
              <Box key={i} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Controller
                  name={d.key}
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
                          label={d.label}
                          {...field}
                          disabled={Boolean(data.disable)}
                          sx={inputFieldStyle?.checkboxes?.labelStyle || {}}
                          onClick={(e: any) => onChange(e, data, field.onChange)}
                          checked={(values[data.key] && values[data.key].includes(d.key)) || false}
                          control={
                            <Checkbox
                              sx={inputFieldStyle?.checkboxes?.fieldStyle || {}}
                              disabled={Boolean(data.disable)}
                            />
                          }
                        />
                      </>
                    );
                  }}
                />
              </Box>
            );
          })}
        <Grid item xs={12}>
          <Typography sx={inputFieldStyle?.checkboxes?.errorStyle || {}} variant='subtitle2' color='error'>
            {error[data.key]! ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label) : ''}
          </Typography>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default FormCheckboxes;
