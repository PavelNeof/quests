import React from 'react';
import { Background, ButtonComponent, ModalComponent } from '../components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import tw from  'twin.macro';
import TooltipComponent from '../components/TooltipComponent';

const Sculpture = () => {
  const [isOpenLeft, setIsOpenLeft] = React.useState(false);
  const [isOpenRight, setIsOpenRight] = React.useState(false);
  const [stateEvent, setStateEvent] = React.useState({ leftEye: false, rightEye: false });
  const navigate = useNavigate();
  const onClickLeftEye = () => {
    if (stateEvent.leftEye) {
      const left = {
        leftEye: false,
        rightEye: stateEvent.rightEye,
      };
      setStateEvent(left);
      setIsOpenLeft(false);
      return;
    }
    const left = {
      leftEye: true,
      rightEye: stateEvent.rightEye,
    };
    setStateEvent(left);
    setIsOpenLeft(false);
  };
  const onClickRightEye = () => {
    if (stateEvent.rightEye) {
      const right = {
        leftEye: stateEvent.leftEye,
        rightEye: false,
      };
      setStateEvent(right);
      setIsOpenRight(false);
      return;
    }
    const right = {
      leftEye: stateEvent.leftEye,
      rightEye: true,
    };
    setStateEvent(right);
    setIsOpenRight(false);
  };
  const openModalLeft = () => {
    setIsOpenLeft(true);
  };
  const closeModalLeft = () => {
    setIsOpenLeft(false);
  };
  const openModalRight = () => {
    setIsOpenRight(true);
  };
  const closeModalRight = () => {
    setIsOpenRight(false);
  };
  console.log('stateEvent', stateEvent);
  return (
    <div>
      <Header />
      <Background src="https://sun9-80.userapi.com/impg/I7Q7hPG1JW8PU34yHDcOo_CtoTvjUispk0fAXA/5MnUa05Pf3A.jpg?size=1024x1024&quality=96&sign=9c676df2161a3b76fe3736dccb8dd6a1&type=album">
        <div tw="flex flex-col items-center">
          <div tw="mt-28">
            <ButtonComponent onClick={() => navigate('/library')}>Вернуться назад</ButtonComponent>
          </div>

          <TooltipComponent content="Бюст кумира хозяина дома Кринжтиано Роняйдо" delayDuration="200" arrowSide="left">
            <div tw="absolute left-[350px] top-[180px] content-[''] h-[500px] w-[350px]"></div>
          </TooltipComponent>
          <div tw="absolute left-[441px] top-[298px] h-6 w-14" css={[stateEvent.leftEye && tw`bg-gray-400/50 rounded`]} onClick={openModalLeft}></div>
          <div tw="absolute left-[570px] top-[310px] h-6 w-14" css={[stateEvent.rightEye && tw`bg-gray-400/50 rounded`]} onClick={openModalRight}></div>
          <ModalComponent title="Вы нажали на левый шлаз" isOpen={isOpenLeft} setIsOpen={setIsOpenLeft}>
            {!stateEvent.leftEye ? (
              <div>
                <div>Вы можете попробовать выковырять левый глаз, если вы конченные вандалы, конечно.</div>
                <ButtonComponent onClick={onClickLeftEye}>Выковырить</ButtonComponent>
                <ButtonComponent onClick={closeModalLeft}>Одуматься и ничего не делать</ButtonComponent>
              </div>
            ) : (
              <div>
                <span>Вы уже произвели акт вандализма, что вам ещё надо?</span>
                <ButtonComponent onClick={onClickLeftEye}>Вставить обратно</ButtonComponent>
              </div>
            )}
          </ModalComponent>
          <ModalComponent title="Вы нажали на правый шлаз" isOpen={isOpenRight} setIsOpen={setIsOpenRight}>
            {!stateEvent.rightEye ? (
                <div>
                  <div>Вилкой в глаз или минус глаз, вандалы?</div>
                  <ButtonComponent onClick={onClickRightEye}>Будем выковыривать, конечно</ButtonComponent>
                  <ButtonComponent onClick={closeModalRight}>Нет, мы делать это не будем</ButtonComponent>
                </div>
            ) : (
                <div>
                  <span>А ну верните глаз на место!</span>
                  <ButtonComponent onClick={onClickRightEye}>Вставить обратно</ButtonComponent>
                </div>
            )}
          </ModalComponent>
        </div>
      </Background>
    </div>
  );
};

export default Sculpture;
