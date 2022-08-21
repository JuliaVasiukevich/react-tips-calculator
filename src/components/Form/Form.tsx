import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useSelect } from "../../hooks/useSelect";
import { StyledForm, Title, Subtitle, Total } from "./styles";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { IOption } from "../../types/types";

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const select = useSelect(options[0]);
  const [isBtnActive, setBtnActive] = useState<boolean>();
  const [total, setTotal] = useState<number>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let total = 0;
    if (select.value) {
      total = (+bill.value * (select?.value?.value / 100 + 1)) / +persons.value;
    }

    setTotal(total);
  };

  useEffect(() => {
    if (bill.value && persons.value) {
      setBtnActive(false);
    } else {
      setBtnActive(true);
    }
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" type="number" {...bill} />
      <Input placeholder="Enter  persons" type="number" {...persons} />
      <CustomSelect options={options} {...select} />
      <Total>Total: {total?.toFixed(2)} $</Total>
      <Button disabled={!isBtnActive} />
    </StyledForm>
  );
};
