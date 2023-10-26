import React from 'react';
import tw from "twin.macro";

type ButtonComponentType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
const ButtonComponent = React.forwardRef(({onClick, children,...rest}:ButtonComponentType, ref) => {
  return <ButtonWrapper onClick={onClick} ref={ref as any} {...rest}>
    {children && <Label>{children}</Label>}
  </ButtonWrapper>;
});

export default ButtonComponent;

const ButtonWrapper = tw.button`flex justify-center items-center rounded border-2 border-solid border-transparent cursor-pointer hover:(bg-red-200)`;
const Label = tw.span`text-sm font-medium`;