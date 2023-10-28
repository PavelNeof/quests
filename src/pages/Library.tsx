import 'react';
import { Background, ButtonComponent, ModalComponent, PopoverComponent } from '../components';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from '../components/Header';

const Library = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Background src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/AwuX/gmtbcknr2">
        <div>
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

        </div>
      </Background>
    </div>
  );
};

const TriggerSculpture = styled.div`
  ${tw`absolute top-[147px] left-[88px] h-[50px] opacity-0`}
`;
const TriggerPict = styled.div`
  ${tw`absolute top-[160px] right-[500px] h-10 rotate-[-29deg] opacity-0`}
`;
export default Library;
