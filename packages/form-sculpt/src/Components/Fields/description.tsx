import { Grid, Typography } from '@mui/material';
import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';

const FormDescription = (props: InputFieldProps) => {
  const { data } = props;
  const { sessionStyling } = useProps();

  return (
    <Grid xs={12} item>
      <Typography sx={sessionStyling?.description || {}}>{data.fieldLabel.label}</Typography>
    </Grid>
  );
};

export default FormDescription;
