import { Grid, Typography } from '@mui/material';
import { InputFieldProps } from './type';
import { useProps } from '../Context/PropContext/hook';

const FormTitle = (props: InputFieldProps) => {
  const { data } = props;
  const { sessionStyling } = useProps();

  return (
    <Grid xs={12} item>
      <Typography variant='h4' sx={sessionStyling?.title || {}}>
        {data.fieldLabel.label}
      </Typography>
    </Grid>
  );
};

export default FormTitle;
