import { useState } from 'react';
import { CustomFieldProps } from './Context/PropContext/type';
import CustomForm from './CustomForm';
import { sampleJsonField } from './sampleData';

const App = () => {
  const [dVal] = useState<any>({ dateSampleText: new Date() });
  const [val, setVal] = useState<string>('');

  // const onSampleButtonClick = (val: string) => setVal(val);

  return (
    <CustomForm
      schema={sampleJsonField}
      defaultValues={dVal}
      customFields={{
        customField: (props) => <CustomSampleButton {...props} handleClick={setVal} text={val} />,
      }}
    />
  );
};

export default App;

interface CustomSampleButtonProps extends CustomFieldProps {
  handleClick: (val: string) => void;
  text: string;
}

const CustomSampleButton = ({ handleClick, text }: CustomSampleButtonProps) => {
  const onButtonClick = () => {
    handleClick('BUtton Clicked');
  };

  return (
    <>
      <p>{text}</p>
      <button onClick={onButtonClick}>Sample Button</button>
    </>
  );
};
