import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import tw from 'twin.macro';

type ModalComponentProps = {
  trigger?: React.ReactElement;
  children?: React.ReactElement;
  setIsOpen?: (value: boolean) => void;
  isOpen?: boolean;
  title?: string;
};

const ModalComponent = React.memo(({ trigger, children, title, setIsOpen, isOpen }: ModalComponentProps) => {
  if (trigger) {
    return (
      <div onClick={e => e.stopPropagation()}>
        <Dialog.Root>
          <Trigger>{trigger}</Trigger>
          <Dialog.Portal>
            <Dialog.Overlay tw="fixed inset-0 bg-black/50 z-40" />
            <Content>
              <Dialog.Title tw="pb-4">{title}</Dialog.Title>
              <Dialog.Description>{children}</Dialog.Description>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    );
  }
  if (isOpen && setIsOpen) {
    console.log('isOpen', isOpen);

    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay tw="fixed inset-0 bg-black/50 z-40" />
          <Content>
            <Dialog.Title tw="pb-4">{title}</Dialog.Title>
            <Dialog.Description>{children}</Dialog.Description>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
});
export default ModalComponent;

const Trigger = tw(Dialog.Trigger)`cursor-auto`;
const Content = tw(Dialog.Content)`fixed left-1/2 top-1/2 z-50 w-full min-w-max max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow`;