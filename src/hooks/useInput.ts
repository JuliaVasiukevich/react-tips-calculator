import { ChangeEvent, useState } from "react";

export const useInput = (initialState: string = "" ) => {
  const [value, setValue] = useState<string>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (+event.target.value <= 0) {
      return;
    }
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};
