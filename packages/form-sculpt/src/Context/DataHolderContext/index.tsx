import { createContext, ReactNode, useState } from 'react';

export interface IDataHolder {
  values: any;
  setValues: (data: any) => void;
  isError: boolean;
  setIsError: (data: boolean) => void;
}

const defaultData: IDataHolder = {
  values: {},
  setValues: () => null,
  isError: false,
  setIsError: () => null,
};

const DataHolderContext = createContext(defaultData);

interface Props {
  children: ReactNode;
}

const DataHolderProvider = ({ children }: Props) => {
  const [values, setValues] = useState<any>({});
  const [isError, setIsError] = useState<any>(false);

  const value = {
    values,
    setValues,
    isError,
    setIsError,
  };

  return <DataHolderContext.Provider value={value}>{children}</DataHolderContext.Provider>;
};

export { DataHolderProvider, DataHolderContext };
