import { useContext } from 'react';
import { DataHolderContext } from './';

export const useValueHolder = () => useContext(DataHolderContext);
