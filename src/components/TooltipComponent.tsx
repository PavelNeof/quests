import 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import 'twin.macro';

const TooltipComponent =((props: any) => {
  const {
    children,
    open,
    defaultOpen,
    onOpenChange,
    delayDuration,
    disableHoverableContent,
    content,
    container,
    arrowSide = 'top',
    forceMount,
    ...tooltipContentProps
  } = props;
  const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
  return (
    <TooltipPrimitive.Root {...rootProps}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal container={container} forceMount={forceMount}>
        <TooltipPrimitive.Content sideOffset={4} collisionPadding={10} side={arrowSide} {...tooltipContentProps}>
          <div tw="bg-white/60 rounded p-2 max-w-[150px] z-50">{content}</div>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
});
export default TooltipComponent;
