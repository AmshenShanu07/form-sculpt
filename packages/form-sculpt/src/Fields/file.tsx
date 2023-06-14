import { useEffect, useRef, useState } from 'react';

import { Grid, Button, Typography, InputLabel } from '@mui/material';

import { useProps } from '../Context/PropContext/hook';
import { InputFieldProps } from './type';
import { useValueHolder } from '../Context/DataHolderContext/hook';

const FormFileUpload = (props: InputFieldProps) => {
  const {
    data: { key, fieldLabel, validation, fieldWidth, disable },
  } = props;

  const { onFileUpload, inputFieldSize, templates } = useProps();
  const { setValues, values, setIsError } = useValueHolder();

  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsError(error !== ''), [error]);

  const getInputFileAccept = (): string => {
    if (validation?.fileType) {
      return validation?.fileType.map((d: string) => `.${d}`).join(',');
    }

    return '';
  };

  const onUpload = async (e: any) => {
    if (validation) {
      const size = Math.round((e.target.files[0]?.size / 1024) * 100) / 100;
      const type = e.target.files[0].type.split('/')[1];

      if (validation.fileSize && validation.fileSize < size) {
        alert(`The file size limit is ${validation.fileSize} kb`);
        return;
      }

      if (validation.fileType && !validation.fileType.includes(type)) {
        alert(`Only ${validation.fileType.join(', ')}, file types are accepted`);
        return;
      }
    }

    setError('');
    setFile(e.target.files[0]);

    if (onFileUpload) {
      const url = await onFileUpload(e.target.files[0]);
      setValues({ ...values, [key]: url });
    } else {
      setValues({ ...values, [key]: URL.createObjectURL(e.target.files[0]) });
    }
  };

  if (templates?.FileUploadField) {
    const { FileUploadField } = templates;

    return (
      <Grid item xs={fieldWidth * 12} display='flex' flexDirection='column'>
        <FileUploadField error={error} data={props.data} onUpload={onUpload} value={values[key] || ''} />
      </Grid>
    );
  }

  return (
    <Grid item xs={fieldWidth * 12} display='flex' flexDirection='column'>
      <input type='file' hidden name={key} ref={inputRef} onChange={onUpload} accept={getInputFileAccept()} />
      <Grid container>
        <Grid item xs={12}>
          <InputLabel>{fieldLabel.label}</InputLabel>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant='subtitle2' color='grey'>
            {file !== null && file.name}
          </Typography>
        </Grid>
        <Grid item xs={file ? 6 : 12}>
          <Button variant='outlined' onClick={() => inputRef?.current?.click()} disabled={Boolean(disable)}>
            Upload
          </Button>
          {file !== null && (
            <Button variant='outlined' size={inputFieldSize} sx={{ ml: 2 }} onClick={() => setFile(null)}>
              Clear
            </Button>
          )}
        </Grid>
      </Grid>
      <Typography variant='subtitle2' color='#d32f2f'>
        {error}
      </Typography>
    </Grid>
  );
};

export default FormFileUpload;
