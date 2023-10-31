import 'react';
import { Background, ButtonComponent, ModalComponent, TooltipComponent } from '../components';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import React from 'react';

const Safe = () => {
  const [code, setCode] = React.useState<string[]>([]);
  const navigate = useNavigate();
  const pushCode = (number: string) => {
    const newCode = [...code, number];
    setCode(newCode);
  };
  const openSafe = () => {};
  return (
    <div>
      <Background src="https://sun9-75.userapi.com/impg/0nT5XeqVQJIhjWFMhr7JQiJXoNWuO2Hb3YoUcg/zZqIq-ru4ig.jpg?size=1024x800&quality=96&sign=950b02df98e6318e602fcde7cf3d4247&type=album">
        <div>
          <div tw="flex flex-col items-center">
            <div tw="mt-32 flex gap-2">
              <ButtonComponent onClick={() => navigate('/fireplace')}>Вернуться назад</ButtonComponent>
              <ModalComponent
                title="Информация"
                trigger={
                  <ButtonComponent>
                    <link
                      rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                    />
                    <span tw="text-white" className="material-symbols-outlined">
                      skull
                    </span>
                  </ButtonComponent>
                }
              >
                <div tw="w-[400px]">
                  Необходимо ввести правильный пароль, т.к. сейф под напряжением и если пароль будет неправильный, то вас ударит током
                </div>
              </ModalComponent>
            </div>
            <ModalComponent
              title="Информация"
              trigger={
                <TooltipComponent content="Открыть сейф" delayDuration="100">
                  <div tw="absolute top-[292px] left-[195px] h-[190px] w-[190px] hover:bg-red-400/50 rounded-[50%]" />
                </TooltipComponent>
              }
            >
              <div tw="w-[400px] flex flex-col">
                ваш пароль :{' '}
                {code.map(number => (
                  <span tw="pr-1">{number}</span>
                ))}
                <ButtonComponent onClick={openSafe}>Открыть</ButtonComponent>
              </div>
            </ModalComponent>

            <TooltipComponent content="Сброс" delayDuration="100">
              <div tw="absolute top-[392px] left-[514px] h-[80px] w-[80px] hover:bg-red-400/50 rounded-[50%]" onClick={() => setCode([])} />
            </TooltipComponent>
            <div tw="absolute top-[249px] left-[650px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('1')} />
            <div tw="absolute top-[249px] left-[727px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('2')} />
            <div tw="absolute top-[249px] left-[804px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('3')} />
            <div tw="absolute top-[320px] left-[650px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('4')} />
            <div tw="absolute top-[320px] left-[727px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('5')} />
            <div tw="absolute top-[320px] left-[804px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('6')} />
            <div tw="absolute top-[390px] left-[650px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('7')} />
            <div tw="absolute top-[390px] left-[727px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('8')} />
            <div tw="absolute top-[390px] left-[804px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('9')} />
            <div tw="absolute top-[458px] left-[650px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('*')} />
            <div tw="absolute top-[458px] left-[727px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('0')} />
            <div tw="absolute top-[458px] left-[804px] h-[61px] w-[67px] hover:bg-red-400/50 rounded-[5px]" onClick={() => pushCode('#')} />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Safe;
