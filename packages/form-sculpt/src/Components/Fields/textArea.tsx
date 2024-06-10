import { InputLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import Wrapper from '../Form/Wrapper';

const FormTextArea = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;

  const { inputFieldSize, templates, inputFieldStyle } = useProps();

  return (
    <Wrapper item xs={data.fieldWidth * 12}>
      <Controller
        name={data.key}
        control={control}
        defaultValue=''
        render={({ field }) => {
          if (templates?.TextArea) {
            const { TextArea } = templates;

            return (
              <TextArea
                data={data}
                value={field.value}
                error={error[data.key] || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
              />
            );
          }

          return (
            <>
              <InputLabel sx={inputFieldStyle?.textArea?.labelStyle || {}}>
                {data.fieldLabel.label}
                {data.isRequired && <span style={{ color: 'red' }}>*</span>}
              </InputLabel>
              <TextField
                {...field}
                onChange={(e: any) => onChange(e, data, field.onChange)}
                sx={inputFieldStyle?.textArea?.fieldStyle || {}}
                fullWidth
                multiline
                disabled={Boolean(data.disable)}
                minRows={3}
                FormHelperTextProps={{
                  sx: inputFieldStyle?.textArea?.errorStyle || {},
                }}
                size={inputFieldSize}
                placeholder={data.fieldLabel.placeholderText}
                error={error[data.key] || '' ? true : false}
                helperText={
                  error[data.key] || ''
                    ? error[data.key]?.message?.toString().replace(data.key, data.fieldLabel.label)
                    : ''
                }
              />
            </>
          );
        }}
      />
    </Wrapper>
  );
};

export default FormTextArea;
