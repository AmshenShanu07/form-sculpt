import './App.css';

import MonacoEditor from '@monaco-editor/react';
import Form, { SchemaType } from 'form-sculpt';
import { useEffect, useState } from 'react';

const monacoEditorOptions = {
  minimap: {
    enabled: false,
  },
  automaticLayout: true,
};

function App() {
  const [values, setValues] = useState<string>('');
  const [formData, setFormData] = useState<string>('');
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

  useEffect(() => {
    try {
      const currentData: any = {};
      const jsonSchema: SchemaType[] = JSON.parse(schema);

      for (const field of jsonSchema) {
        if (field.fieldType === 'title' || field.fieldType === 'subTitle' || field.fieldType === 'label') {
          continue;
        }

        currentData[field.key] = '';
      }

      const code = JSON.stringify(currentData, null, 2);

      setValues(code);
    } catch (_) {
      /* empty */
    }
  }, [schema]);

  const parseSchema = () => {
    try {
      return JSON.parse(schema);
    } catch (_) {
      return [];
    }
  };

  const onSubmitForm = async (data: any) => {
    const beautifiedJsonString = JSON.stringify(data, null, 2);
    setFormData(beautifiedJsonString);
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
          height={'90vh'}
          className='editor'
          options={monacoEditorOptions}
        />
      </div>
      <div className='form_container'>
        <Form onSubmit={onSubmitForm} defaultValue={JSON.parse(values || '{}')} schema={parseSchema()} />
      </div>

      <div className='default_value_container'>
        <div className='title_container'>
          <h2>Default Form Values</h2>
        </div>
        <MonacoEditor
          language='json'
          value={values}
          onChange={(val) => setValues(val || '')}
          theme='vs-light'
          height={'50vh'}
          className='editor'
          options={monacoEditorOptions}
        />
      </div>

      <div className='form_data_container'>
        <div className='title_container'>
          <h2>Form Submit Values</h2>
        </div>
        <MonacoEditor
          language='json'
          value={formData}
          theme='vs-light'
          height={'50vh'}
          className='editor'
          options={monacoEditorOptions}
        />
      </div>
    </div>
  );
}

export default App;
