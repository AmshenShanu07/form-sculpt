import { Grid, GridProps } from '@mui/material';
import { ReactNode } from 'react';
import { useProps } from '../../Context/PropContext/hook';

interface WrapperProps extends GridProps {
  children: ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  const { sessionStyling } = useProps();

  return (
    <Grid {...props} sx={sessionStyling?.container}>
      {props.children}
    </Grid>
  );
};

export default Wrapper;
