import { Button } from '@mui/material';
import { useProps } from '../Context/PropContext/hook';
import { ButtonTemplateProps } from '../Context/PropContext/type';

const ButtomTemplate = (props: ButtonTemplateProps) => {
  const { templates, inputFieldSize } = useProps();

  if (templates?.ButtonTemplates) {
    const { ButtonTemplates } = templates;
    return <ButtonTemplates {...props} />;
  }

  return (
    <>
      <Button type='submit' size={inputFieldSize} variant='contained' sx={{ mr: 3 }}>
        Submit Form
      </Button>
    </>
  );
};

const getButtonTemplate = (props: ButtonTemplateProps) => ButtomTemplate(props);

export default getButtonTemplate;
