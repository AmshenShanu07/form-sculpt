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
  return (
    <div>
      <Form
        schema={portalData}
        onSubmit={(d) => console.log(d)}
      />
    </div>
  );
};

export default App;
