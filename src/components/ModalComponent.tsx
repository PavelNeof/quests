import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import tw from 'twin.macro';

type ModalComponentProps = {
  trigger?: React.ReactElement;
  children?: React.ReactElement;
  setIsOpen?: (value: boolean) => void;
  isOpen?: boolean;
};


const ModalComponent = React.memo(({trigger, children, setIsOpen, isOpen  }: ModalComponentProps) => {

  if (trigger) {
    return (
      <Dialog.Root>
        <Trigger>{trigger}</Trigger>
        <Dialog.Portal>
          <Dialog.Overlay tw="fixed inset-0 bg-black/50 z-40" />
          <Content>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description >
              Make changes to your profile.
            </Dialog.Description>
            {children}
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
  if (isOpen && setIsOpen) {
    console.log('isOpen', isOpen)

    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay tw="fixed inset-0 bg-black/50 z-40" />
          <Content>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description >
              Make changes to your profile.
            </Dialog.Description>
            {children}
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
      // <ControlledModalProvider isOpen={isOpen} setIsOpen={setIsOpen} {...rest}>
      //   <ManualModalRoot onOpenChange={setIsOpen} {...rest}>
      //     {children}
      //   </ManualModalRoot>
      // </ControlledModalProvider>
    );
  }
});
export default ModalComponent;

const Trigger = tw(Dialog.Trigger)`cursor-pointer`;
const Content = tw(Dialog.Content)`fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow`;