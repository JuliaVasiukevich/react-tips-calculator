import { StylesConfig, GroupBase } from "react-select";
import { IOption } from "../../types/types";
import { Color } from "../../ui/colors";

export const customStyles: StylesConfig<IOption, false, GroupBase<IOption>> = {
    control: () => ({
      width: "100%",
      display: "flex",
      background: Color.White,
      borderRadius: "30px",
      marginBottom: "45px",
      padding: "11px 15px 11px 40px",
      textAlign: "center",
    }),
  
    indicatorSeparator: () => ({
      width: 0,
    }),

  };
