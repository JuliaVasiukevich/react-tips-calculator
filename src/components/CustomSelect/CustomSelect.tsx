import Select, { SingleValue } from "react-select";
import { IOption } from "../../types/types";
import { options } from "../Form/Form";
import { customStyles } from "./styles";

interface IProps {
  options: IOption[];
  onChange: (tips: number) => void;
  value: number;
}

export const CustomSelect = ({ value, onChange }: IProps) => {
  const getTipsValue = () =>
    options.find((tips: IOption) => {
      return tips.value === value;
    });

  const handleTips = (tips: SingleValue<IOption>): void => {
    if (tips) onChange(tips.value);
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      defaultValue={options[0]}
      onChange={handleTips}
      value={getTipsValue()}
      isMulti={false}
      isSearchable={false}
    />
  );
};
