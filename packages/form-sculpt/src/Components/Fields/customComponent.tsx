import { Grid } from '@mui/material';
import { Controller } from 'react-hook-form';

import { InputFieldProps } from './type';
import { useProps } from '../../Context/PropContext/hook';
import { useValueHolder } from '../../Context/DataHolderContext/hook';

const FormCustomElement = (props: InputFieldProps) => {
  const { control, data, error, onChange,  } = props;
  const { values } = useValueHolder();
  const { customFields } = useProps();

  return (
    <Grid item xs={data.fieldWidth * 12}>
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
                context={{ values, errors: error }}
              />
            );
          }

          return <></>;
        }}
      />
    </Grid>
  );
};

export default FormCustomElement;
