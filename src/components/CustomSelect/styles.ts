import { StylesConfig, GroupBase } from "react-select";
import { IOption } from "../../types/types";
import { Color } from "../../ui/colors";

export const customStyles: StylesConfig<IOption, false, GroupBase<IOption>> = {
    control: () => ({
      width: "100%",
      display: "flex",
      background: Color.white,
      borderRadius: "30px",
      marginBottom: "45px",
      padding: "15px",
    }),
  
    indicatorSeparator: () => ({
      width: 0,
    }),

    singleValue: (provided) => ({
      ...provided,
     textAlign: 'center',
      }),
  };