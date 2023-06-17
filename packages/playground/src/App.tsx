import './App.css';

import MonacoEditor from '@monaco-editor/react';
import Form from 'form-sculpt';
import { useState } from 'react';

const monacoEditorOptions = {
  minimap: {
    enabled: false,
  },
  automaticLayout: true,
};

function App() {
  const [schema, setSchema] = useState<string>(`[
    {
      "fieldWidth": 0.33333333333,
      "key": "userprofile",
      "fieldLabel": {
        "label": "User Profile",
        "placeholderText": "User Profile",
        "description": "User Profile title"
      },
      "fieldType": "title",
      "isRequired":true

    },
    {
      "fieldWidth": 0.5,
      "key": "firstname",
      "fieldLabel": {
        "label": "First Name",
        "placeholderText": "Enter Your First Name",
        "description": "Field To Enter First Name"
      },
      "fieldType": "textField",
      "isRequired":true

    },
    {
      "fieldWidth": 0.5,
      "key": "lastname",
      "fieldLabel": {
        "label": "Last Name",
        "placeholderText": "Enter Your Last Name",
        "description": "Field To Enter Last Name"
      },
      "fieldType": "textField",
      "isRequired":true

    }
  ]
`);

  const parseSchema = () => {
    try {
      return JSON.parse(schema);
    } catch (_) {
      return [];
    }
  };

  return (
    <div className='main_container'>
      <div className='editor_container'>
        <div className='title_container'>
          <h2>Schema Editor</h2>
        </div>
        <MonacoEditor
          language='json'
          value={schema}
          onChange={(e) => setSchema(e || '')}
          theme='vs-light'
          className='editor'
          options={monacoEditorOptions}
        />
      </div>
      <div className='form_container'>
        <Form
          onSubmit={(data:any) => console.log(data)}
          schema={parseSchema()}
        />
      </div>
    </div>
  );
}

export default App;
