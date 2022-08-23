import { Color } from "../../ui/colors";

export const customStyles = {
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

    singleValue: (provided: any) => ({
      ...provided,
     textAlign: 'center',
   }),
  };