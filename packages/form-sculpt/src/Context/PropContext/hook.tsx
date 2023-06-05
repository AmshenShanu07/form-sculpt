import { useContext } from 'react';
import { PropContext } from './';

export const useProps = () => useContext(PropContext);
