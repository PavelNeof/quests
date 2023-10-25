import React from 'react';

import 'twin.macro';

type BackgroundType = {
  src: string;
  children: React.ReactElement,
};
const Background = ({ src,children }: BackgroundType) => {
  return (
    <div tw="relative w-[1024px] h-full mx-auto overflow-x-auto">
      <img
        src={src}
        alt="Падажжи ты"
        style={{
          maxWidth: '100%',
          height: 'auto',
          overflowX: 'auto',
        }}
      />
      <div tw="absolute top-0 w-full z-1">{children}</div>
    </div>
  );
};

export default Background;
