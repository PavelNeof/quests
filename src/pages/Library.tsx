import React from 'react';
import { Background, ButtonComponent, ModalComponent, PopoverComponent } from '../components';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from '../components/Header';
import { observer } from 'mobx-react-lite';
import store from '../store/store';

const Library = observer(() => {
  const [isSpoon, setIsSpoon] = React.useState(false);
  const [isOpenDoor, setIsOpenDoor] = React.useState(false);
  const [isUnderDoor, setIsUnderDoo] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const inventory = store.getInventory();
    const state = store.getState();
    const findSpoon = inventory.find(item => item === 'Ложка');
    const findOpenDoor = state.find(item => item === 'Дверь в библиотеке');
    if (findSpoon) {
      setIsSpoon(true);
    }
    if (findOpenDoor) {
      setIsOpenDoor(true);
    }
  }, []);
  const takeSpoon = () => {
    const inventory = store.getInventory();
    const findSpoon = inventory.find(item => item === 'Ложка');
    if (findSpoon) {
      store.deleteInventory('Ложка');
      setIsSpoon(false);
      return;
    }
    setIsSpoon(true);
    store.addInventory('Ложка');
  };
  return (
    <div>
      <Header />
      <Background src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/AwuX/gmtbcknr2">
        <div>
          <div tw="absolute top-[520px] left-[220px] h-[110px] w-[89px]" css={[isSpoon && tw`bg-gray-400/50 rounded`]}></div>

          <ModalComponent title="Бюст друга хозяина дома" trigger={<TriggerSculpture>триггер</TriggerSculpture>}>
            <div>
              <div>
                <ButtonComponent onClick={() => navigate('/sculpture')}>Подойти, посмотреть?</ButtonComponent>
                <PopoverComponent trigger={<ButtonComponent>Особое действие</ButtonComponent>}>
                  <div>123</div>
                </PopoverComponent>
              </div>
            </div>
          </ModalComponent>

          <ModalComponent title="Фотография хозяина дома" trigger={<TriggerPict>триггер</TriggerPict>}>
            <div>
              <ButtonComponent onClick={() => navigate('/painting')}>Подойти, посмотреть?</ButtonComponent>
              <PopoverComponent trigger={<ButtonComponent>Особое действие</ButtonComponent>}>
                <div>123</div>
              </PopoverComponent>
            </div>
          </ModalComponent>

          <ModalComponent title="Тумбочка" trigger={<TriggerNightstand>триггер</TriggerNightstand>}>
            <div tw="w-[400px]">
              Вы открыли ящики тумбочки. В верхнем вы нашли только пыль, засохшую муху и запах ветхой мебели. Но в нижнем валялась старинная
              серебрянная ложка. Она немного сточена, как будто ей что-то копали...
              <div>
                {!isSpoon ? (
                  <ButtonComponent onClick={takeSpoon}>Взять ложку?</ButtonComponent>
                ) : (
                  <ButtonComponent onClick={takeSpoon}>Вернуть ложку?</ButtonComponent>
                )}
              </div>
            </div>
          </ModalComponent>

          <ModalComponent title="Шкаф с книгами" trigger={<TriggerBookcase>триггер</TriggerBookcase>}>
            <div>
              <ButtonComponent onClick={() => navigate('/bookcase')}>Подойти, посмотреть?</ButtonComponent>
              <PopoverComponent trigger={<ButtonComponent>Особое действие</ButtonComponent>}>
                <div>123</div>
              </PopoverComponent>
            </div>
          </ModalComponent>

          {!isOpenDoor ? <ModalComponent title="Дверь" trigger={<TriggerDoor>триггер</TriggerDoor>}>
            {!isUnderDoor ? (
              <div>
                Вы дёрнули ручку, но дверь закрыта...
                <ButtonComponent onClick={() => setIsUnderDoo(true)}>Заглянуть под дверь?</ButtonComponent>
                <PopoverComponent trigger={<ButtonComponent>Особое действие</ButtonComponent>}>
                  <div>123</div>
                </PopoverComponent>
              </div>
            ) : (
              <div tw="flex flex-col gap-2">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mwkkDtbxLoA?si=UHQvqnVLI1jBuYGg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div tw="w-fit"><ButtonComponent onClick={() => setIsUnderDoo(false)}>Подняться!</ButtonComponent></div>
              </div>
            )}
          </ModalComponent>
            : <ModalComponent title="Дверь" trigger={<TriggerDoor>триггер</TriggerDoor>}>
              <div>
                Отлично, дверь открыта, идём дальше?
                <ButtonComponent onClick={() => navigate('/fireplace')}>Конечно, го</ButtonComponent>
              </div>
            </ModalComponent> }
        </div>
      </Background>
    </div>
  );
});

const TriggerSculpture = styled.div`
  ${tw`absolute top-[147px] left-[88px] h-[50px] opacity-0`}
`;
const TriggerPict = styled.div`
  ${tw`absolute top-[160px] right-[500px] h-10 rotate-[-29deg] opacity-0`}
`;
const TriggerNightstand = styled.div`
  ${tw`absolute top-[520px] left-[220px] h-[110px] w-[89px] opacity-0`}
`;
const TriggerBookcase = styled.div`
  ${tw`absolute top-[205px] right-[154px] h-[350px] w-[110px] rotate-[-6deg] opacity-0`}
`;
const TriggerDoor = styled.div`
  ${tw`absolute top-[285px] right-[300px] h-[280px] w-[75px] rotate-[-5deg] opacity-0`}
`;
export default Library;
