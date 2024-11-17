import { Controller, Control } from "react-hook-form";
import { InputContainer, IconContainer, InputText } from "./Input.styles";
import { ReactNode } from "react";

interface IInputProps {
  leftIcon?: ReactNode;
  name: string;
  control: Control;
  [k: string] : any;
}

export function Input({ leftIcon, name, control, ...rest }: IInputProps) {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <InputText {...field as any} {...rest} />}
      />
    </InputContainer>
  );
}
