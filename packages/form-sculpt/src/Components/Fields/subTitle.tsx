import { Grid, Typography } from '@mui/material';
import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';

const SubTitle = (props: InputFieldProps) => {
  const { data } = props;
  const { sessionStyling } = useProps();

  return (
    <Grid xs={12} item>
      <Typography variant='h5' sx={sessionStyling?.subTitle || {}}>
        {data.fieldLabel.label}
      </Typography>
    </Grid>
  );
};

export default SubTitle;
