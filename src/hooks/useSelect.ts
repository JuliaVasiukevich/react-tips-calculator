import { options } from './../components/Form/Form';
import { useState } from "react";
import { IOption } from '../types/types';
import { SingleValue } from 'react-select';

export const useSelect = (initialState = options[0]) => {
  const [value, setValue] = useState<SingleValue<IOption> | null>(initialState);

  const onChange = (event: SingleValue<IOption>) => {
    setValue(event);
  };

  return {
    value,
    onChange,
  };
};
