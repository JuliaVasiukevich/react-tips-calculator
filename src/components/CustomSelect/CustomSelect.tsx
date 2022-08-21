import { ChangeEvent, SyntheticEvent } from "react";
import Select, { SingleValue } from "react-select";
import { IOption } from "../../types/types";
import { options } from "../Form/Form";
import { customStyles } from "./styles";

interface IProps {
  options: IOption[];
  // onChange: (event: ChangeEvent<HTMLInputElement> | SingleValue<IOption>) => void;
  // onChange: any;
  onChange: (event: SingleValue<IOption>) => void;
}

export const CustomSelect = ({ onChange }: IProps) => {
  return (
    <Select
      styles={customStyles}
      options={options}
      defaultValue={options[0]}
      onChange={(event) => onChange(event)}
    />
  );
};
