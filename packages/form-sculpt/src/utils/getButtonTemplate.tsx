import { Button } from '@mui/material';
import { useProps } from '../Context/PropContext/hook';

const ButtomTemplate = () => {
  const { templates, inputFieldSize } = useProps();
  if (templates?.ButtonTemplates) {
    return <>{templates?.ButtonTemplates}</>;
  }

  return (
    <>
      <Button type='submit' size={inputFieldSize} variant='contained' sx={{ mr: 3 }}>
        Submit Form
      </Button>
    </>
  );
};

const getButtonTemplate = () => ButtomTemplate();

export default getButtonTemplate;
