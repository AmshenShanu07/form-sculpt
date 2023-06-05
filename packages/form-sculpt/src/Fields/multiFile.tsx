import { useEffect, useRef, useState } from 'react';

import { Grid, Button, Typography, InputLabel } from '@mui/material';

import { useProps } from '../Context/PropContext/hook';
import { InputFieldProps } from './type';
import { useValueHolder } from '../Context/DataHolderContext/hook';

const FormMultiFileUpload = (props: InputFieldProps) => {
  const {
    data: { key, fieldLabel, validation, fieldWidth },
  } = props;

  const { onFileUpload, inputFieldSize, templates } = useProps();
  const { setValues, values, setIsError } = useValueHolder();

  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsError(error !== ''), [error]);

  const getInputFileAccept = (): string => {
    if (validation?.fileType) {
      return validation?.fileType.map((d: string) => `.${d}`).join(',');
    }

    return '';
  };

  const onUpload = (e: any) => {
    let tempFiles = [...files];

    if (e.target.files.length) {
      for (const file of e.target.files) {
        if (tempFiles.length === validation?.max) {
          tempFiles = [];
        }

        if (validation) {
          const size = Math.round((file?.size / 1024) * 100) / 100;
          const type = file.type.split('/')[1];

          if (validation.fileSize && validation.fileSize < size) {
            alert(`The file size limit is ${validation.fileSize} kb`);
            return;
          }

          if (validation.fileType && !validation.fileType.includes(type)) {
            alert(`Only ${validation.fileType.join(', ')}, file types are accepted`);
            return;
          }
        }

        tempFiles.push(file);
      }
    }
    setFiles(tempFiles);

    if (validation?.min && tempFiles.length < validation?.min) {
      setError(`Min ${validation?.min} files are required`);
    } else {
      setError('');
    }

    const tempFileUrls: string[] = [];

    for (const file of tempFiles) {
      if (onFileUpload) {
        const url = onFileUpload(file);
        tempFileUrls.push(url);
      } else {
        tempFileUrls.push(URL.createObjectURL(file));
      }
    }

    setValues({ ...values, [key]: tempFileUrls });
  };

  const clearFiles = () => {
    setFiles([]);
    setValues({ ...values, [key]: [] });
  };

  if (templates?.MultiFileUploadField) {
    const { MultiFileUploadField } = templates;

    return (
      <Grid item xs={fieldWidth * 12} display='flex' flexDirection='column'>
        <MultiFileUploadField error={error} data={props.data} onUpload={onUpload} value={values[key] || ['']} />
      </Grid>
    );
  }

  return (
    <Grid item xs={fieldWidth * 12} display='flex' flexDirection='column'>
      <input multiple hidden accept={getInputFileAccept()} name={key} type='file' ref={inputRef} onChange={onUpload} />
      <Grid container>
        <Grid item xs={12}>
          <InputLabel>{fieldLabel.label}</InputLabel>
        </Grid>
        {files.map((file, i) => (
          <Grid item xs={12} sx={{ mt: i == 0 ? 2 : 0.5 }} key={i}>
            <Typography variant='subtitle2' color='grey'>
              {file.name}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={files ? 6 : 12}>
          <Button variant='outlined' size={inputFieldSize} onClick={() => inputRef?.current?.click()}>
            Upload
          </Button>
          {Boolean(files.length) && (
            <Button variant='outlined' size={inputFieldSize} sx={{ ml: 2 }} onClick={clearFiles}>
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

export default FormMultiFileUpload;
