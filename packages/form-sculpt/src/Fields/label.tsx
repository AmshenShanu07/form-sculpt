import { Grid, InputLabel } from '@mui/material';
import { InputFieldProps } from './type';
import { useProps } from '../Context/PropContext/hook';

const Label = (props: InputFieldProps) => {
  const { data } = props;
  const { sessionStyling } = useProps();

  return (
    <Grid xs={12} item>
      <InputLabel sx={sessionStyling?.label || {}}>{data.fieldLabel.label}</InputLabel>
    </Grid>
  );
};

export default Label;
