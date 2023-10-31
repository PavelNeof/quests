import React from 'react';
import Header from '../components/Header';
import { Background, ButtonComponent, ModalComponent, TooltipComponent } from '../components';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import Arrow from '../assets/Arrow/Arrow.png';
import styled from "styled-components";
import tw from "twin.macro";
import {observer} from "mobx-react-lite";
import store from "../store/store";

const Fireplace = observer(() => {
  const [isDrop, setIsDrop] = React.useState(false);
  const [isAction, setIsAction] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(()=>{
    const state = store.getState();
    const find = state.find(item => item === 'Стул подвинули');
    if (find) {
      setIsAction(true);
    }
  },[]);
  const onDrag = () => {};
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isDrop) {
      alert('Отлично, теперь можно достать до картины');
      store.addState('Стул подвинули');
      setIsAction(true);
      return;
    }
    alert('зОчем тут стул?');
  };
  const onDragOver = () => {
    setIsDrop(true);
  };
  const onDragLeave = () => {
    setIsDrop(false);
  };

  return (
    <div>
      <Header />
      <Background src="https://sun9-80.userapi.com/impg/hqBqImVSMlWXwttzDXp-Heiu50yzS4Z8YNSowA/pVqNuMr7O5w.jpg?size=1024x700&quality=96&sign=0d56ff08338bb16518999d42eece034d&type=album">
        <div tw="flex flex-col items-center">
          <div tw="absolute left-[195px] top-[240px]">
            <ButtonComponent onClick={() => navigate('/library')}>Вернуться назад</ButtonComponent>
          </div>

          <ModalComponent title="Картина" trigger={<TriggerPicture>trigger</TriggerPicture>}>
            {!isAction
              ? <div>Блин, не достать, картина слишком высоко</div>
              : <div>
                  Эта картина висит криво, как будто её часто трогают. Это слишком подозрительно
                <ButtonComponent onClick={()=>navigate('/safe')}>Отодвинуть картину</ButtonComponent>
              </div>}
          </ModalComponent>

          {isAction && (
            <TooltipComponent arrowSide="left" content="Стул переставили сюда" delayDuration="100">
              <img src={Arrow} tw=" absolute right-[160px] top-[370px] h-32 rotate-[-30deg]" />
            </TooltipComponent>
          )}
          <div
            onDrag={onDrag}
            onDragEnd={e => onDrop(e)}
            onDrop={e => onDrop(e)}
            draggable={true}
            tw="absolute cursor-grab top-[400px] right-[70px] h-[190px] w-[80px] bg-red-400/50 opacity-0"
          ></div>
          <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            draggable={true}
            tw="absolute top-[360px] right-[250px] h-[200px] w-[200px] bg-red-400/50 opacity-0"
          ></div>
        </div>
      </Background>
    </div>
  );
});
const TriggerPicture = styled.div`
  ${tw`absolute top-[75px] left-[630px] w-[100px] h-[100px] rotate-[-5deg] bg-red-400/50  opacity-0`}
`;
export default Fireplace;
