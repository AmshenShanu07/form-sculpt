import { Typography } from '@mui/material';
import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import Wrapper from '../Form/Wrapper';

const FormDescription = (props: InputFieldProps) => {
  const { data } = props;
  const { sessionStyling } = useProps();

  return (
    <Wrapper xs={12} item>
      <Typography sx={sessionStyling?.description || {}}>{data.fieldLabel.label}</Typography>
    </Wrapper>
  );
};

export default FormDescription;
