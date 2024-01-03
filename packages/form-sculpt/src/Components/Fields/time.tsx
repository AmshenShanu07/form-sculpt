import { Grid, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import { TimePicker } from '@mui/x-date-pickers';
import { useValueHolder } from '../../Context/DataHolderContext/hook';
import dayjs from 'dayjs';

const FormTime = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { inputFieldSize, inputFieldStyle, templates } = useProps();
  const { values } = useValueHolder();

  return (
    <Grid item xs={data.fieldWidth * 12}>
      <Controller
        name={data.key}
        control={control}
        render={({ field }) => {
          if (templates?.TimeField) {
            const { TimeField } = templates;

            return (
              <TimeField
                data={data}
                value={field.value}
                error={error[data.key] || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
              />
            );
          }

          return (
            <>
              <InputLabel sx={inputFieldStyle?.time?.labelStyle || {}}>
                {data.fieldLabel.label}
                {data.isRequired && <span style={{ color: 'red' }}>*</span>}
              </InputLabel>
              <TimePicker
                value={dayjs(values[data.key])}
                disabled={Boolean(data.disable)}
                sx={inputFieldStyle?.textField?.fieldStyle || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: inputFieldSize,
                    error: error[data.key] || '' ? true : false,
                    FormHelperTextProps: {
                      sx: inputFieldStyle?.time?.errorStyle || {},
                    },
                    helperText:
                      error[data.key] || ''
                        ? (error[data.key]?.message as string).replace(data.key, data.fieldLabel.label)
                        : '',
                  },
                }}
              />
            </>
          );
        }}
      />
    </Grid>
  );
};

export default FormTime;
