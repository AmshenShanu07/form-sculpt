// import { CustomTemplateFieldProps } from './Context/PropContext/type';
import Form from './Form';
import { sampleJsonField } from './sampleData';

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
        schema={sampleJsonField}
        defaultValue={{
          LeftEyeDetails: 'Amshen Yesudas',
          Ishihara: 'Failed',
          LeftFar: true,
          LeftNear: true,
        }}
        onSubmit={(d) => console.log(d)}
      />
    </div>
  );
};

export default App;
