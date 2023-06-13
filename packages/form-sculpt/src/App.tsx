// import { CustomTemplateFieldProps } from './Context/PropContext/type';
import Form from './Form';
import { portalData } from './sampleData';

// const CustomTextField = (props:CustomTemplateFieldProps) => {
//   const { data, onChange, error } = props;

//   return (
//   <>
//     <label>{data.fieldLabel.label}</label>
//     <textarea
//       onChange={onChange}
//       placeholder={data.fieldLabel.placeholderText}
//     />
//     <p>{error.message || ''}</p>
//   </>
//   );
// }



const App = () => {

  const uploadFile = async (file:File) => {
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
      />
    </div>
  );
};

export default App;
