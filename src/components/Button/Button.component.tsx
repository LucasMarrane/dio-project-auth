import { ButtonContainer, IButtonContainer } from "./Button.styles";

interface ButtonProps extends IButtonContainer {
  title: string;
  onClick?: Function;
  type?: string;
}
export  function Button({
  title,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={onClick as any} {...props as any}>
      {title}
    </ButtonContainer>
  );
}
