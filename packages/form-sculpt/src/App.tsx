// import { CustomTemplateFieldProps } from './Context/PropContext/type';
import Form from './Form';
import { portalData } from './sampleData';

const ButtonTemplate = (props: { errors: any; values: any }) => {
  const { errors, values } = props;
  return (
    <>
      <button type='submit'>Submit</button>
      <button onClick={() => console.log(errors)}>Errors</button>
      <button onClick={() => console.log(values)}>Values</button>
    </>
  );
};

const App = () => {
  const uploadFile = async (file: File) => {
    console.log(file);
    const url = await URL.createObjectURL(file);
    return url;
  };

  return (
    <div>
      <Form
        schema={portalData}
        onSubmit={(d) => console.log(d)}
        onFileUpload={uploadFile}
        templates={{
          ButtonTemplates: (props: any) => <ButtonTemplate {...props} />,
        }}
      />
    </div>
  );
};

export default App;
