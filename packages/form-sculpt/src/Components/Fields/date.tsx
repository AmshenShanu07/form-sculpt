import { Grid, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { DatePicker } from '@mui/x-date-pickers';
import { useProps } from '../../Context/PropContext/hook';
import { useValueHolder } from '../../Context/DataHolderContext/hook';
import dayjs from 'dayjs';

const FormDate = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { inputFieldSize, inputFieldStyle, templates } = useProps();
  const { values } = useValueHolder();

  return (
    <Grid item xs={data.fieldWidth * 12}>
      <Controller
        name={data.key}
        control={control}
        render={({ field }) => {
          if (templates?.DateField) {
            const { DateField } = templates;

            return (
              <DateField
                data={data}
                value={field.value}
                error={error[data.key] || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
              />
            );
          }

          return (
            <>
              <InputLabel sx={inputFieldStyle?.date?.labelStyle || {}}>
                {data.fieldLabel.label}
                {data.isRequired && <span style={{ color: 'red' }}>*</span>}
              </InputLabel>
              <DatePicker
                value={values[data.key]?dayjs(values[data.key]):null}
                disabled={Boolean(data.disable)}
                sx={inputFieldStyle?.textField?.fieldStyle || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: inputFieldSize,
                    FormHelperTextProps: {
                      sx: inputFieldStyle?.date?.errorStyle || {},
                    },
                    error: error[data.key] || '' ? true : false,
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

export default FormDate;
