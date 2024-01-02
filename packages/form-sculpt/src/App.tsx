import Form from './Components/Form';
import { sampleJsonField } from './sampleData';
// import { ButtonTemplateProps } from './Context/PropContext/type';

// const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ errors, values }) => {
  
//   return (
//     <React.Fragment>
//       <button type='submit'>Submit</button>
//       <button onClick={() => console.log(errors)}>Errors</button>
//       <button onClick={() => console.log(values)}>Values</button>
//     </React.Fragment>
//   );
// };

const App = () => {
  const uploadFile = async (file: File) => {
    const url = await URL.createObjectURL(file);
    return url;
  };

  return (
    <div>
      <Form
        schema={sampleJsonField}
        onSubmit={(d) => console.log(d)}
        onFileUpload={uploadFile}
      />
    </div>
  );
};

export default App;
