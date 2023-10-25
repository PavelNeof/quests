import 'react';
import { Popover } from '@radix-ui/themes';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

type PopoverComponentType = {
  trigger?: React.ReactElement;
  children?: React.ReactElement|JSX.Element;
  disabled?: boolean;
  align?: "center" | "start" | "end" | undefined;
};
const PopoverContext = React.createContext({} as { closePopover: () => void });
export const usePopover = () => React.useContext(PopoverContext);
const PopoverComponent = ({ trigger, children, disabled, align = 'center' }: PopoverComponentType) => {
  const ref = React.useRef<HTMLDivElement>();
  const closePopover = React.useCallback(() => {
    ref.current?.click();
  }, []);
  const ContentCore = () => {
    return <PopoverContext.Provider value={{ closePopover }}>{children}</PopoverContext.Provider>;
  };

  if (disabled) {
    return trigger;
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div tw="cursor-pointer w-fit">{trigger}</div>
      </Popover.Trigger>
      <Content align={align}>
        <ContentCore />
      </Content>
    </Popover.Root>
  );
};

export default PopoverComponent;

const Content = styled(Popover.Content)`
  ${tw`rounded-[14px] min-w-[150px] bg-gray-300 shadow-lg z-50 p-2`}
`;