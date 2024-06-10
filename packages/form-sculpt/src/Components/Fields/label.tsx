import { InputLabel } from '@mui/material';
import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import Wrapper from '../Form/Wrapper';

const Label = (props: InputFieldProps) => {
  const { data } = props;
  const { sessionStyling } = useProps();

  return (
    <Wrapper xs={12} item>
      <InputLabel sx={sessionStyling?.label || {}}>{data.fieldLabel.label}</InputLabel>
    </Wrapper>
  );
};

export default Label;
