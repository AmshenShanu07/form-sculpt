import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import { useValueHolder } from '../../Context/DataHolderContext/hook';
import Wrapper from '../Form/Wrapper';

const FormCustomElement = (props: InputFieldProps) => {
  const { control, data, error, onChange } = props;
  const { values } = useValueHolder();
  const { customFields, schema } = useProps();

  return (
    <Wrapper item xs={data.fieldWidth * 12}>
      <Controller
        name={data.key}
        control={control}
        defaultValue=''
        render={({ field }) => {
          if (customFields && customFields[data.key]) {
            const CustomComponent = customFields[data.key];

            return (
              <CustomComponent
                data={data}
                value={field.value}
                error={error[data.key] || {}}
                onChange={(e: any) => onChange(e, data, field.onChange)}
                context={{ values, schema, errors: error }}
              />
            );
          }

          return <></>;
        }}
      />
    </Wrapper>
  );
};

export default FormCustomElement;
