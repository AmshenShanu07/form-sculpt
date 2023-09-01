import Form from './Components/Form';
import { medAuth } from './sampleData';

// import React, { useState } from 'react';
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
  // const [val, setVal] = useState<string>("Paracitamol");
  const uploadFile = async (file: File) => {
    const url = await URL.createObjectURL(file);
    return url;
  };

  return (
    <div>
      <Form
        schema={medAuth}
        onSubmit={(d) => console.log(d)}
        onFileUpload={uploadFile}
        defaultValue={{
          DateScreening: new Date()
        }}
      />
      {/* <input type="text" value={val} onChange={(e) => setVal(e.target.value)} /> */}
    </div>
  );
};

export default App;
