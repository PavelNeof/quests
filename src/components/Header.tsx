import React from 'react';
import heart from '../assets/Heart/heart.png';
import 'twin.macro';
import store from '../store/store';

const Header = () => {
  // const [quantityHearts, setQuantityHearts] = React.useState();
  React.useEffect(() => {
    if (store.hearts < 1) {
      alert('you lose!');
    }
  }, [store.hearts]);
  return (
    <div tw="mx-auto w-full">
      <div tw="w-[1024px] h-[80px] flex justify-between items-center">
        <div tw="flex self-start items-center w-[192px] h-full">Burgermenu</div>
        <div>quest</div>
        <div tw="flex flex-row-reverse w-[192px]">
          {Array.from({ length: store.hearts }).map(() => (
            <img src={heart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
