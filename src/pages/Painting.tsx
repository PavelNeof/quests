import 'react';
import { Background, ButtonComponent } from '../components';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import TooltipComponent from '../components/TooltipComponent';

const Painting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Background src="https://sun9-59.userapi.com/impg/OWVYbgA2ynqTfSKaWXUT-U4Ws5QMXE1HwA2Clw/EXbhmON8vbE.jpg?size=1024x1024&quality=96&sign=050117c9372f971bd37b6604fb793756&type=album">
        <div tw="flex flex-col items-center">
          <div tw="mt-32">
            <ButtonComponent onClick={() => navigate('/library')}>Вернуться назад</ButtonComponent>
          </div>
          <TooltipComponent content="Хозяин дома, барон фон Пидр на отдыхе" delayDuration="200">
            <div tw="absolute left-[415px] top-[410px]">
              <div tw="ml-4 content-[''] h-10 w-10"></div>
              <div tw="content-[''] h-[150px] w-[80px]"></div>
            </div>
          </TooltipComponent>
        </div>
      </Background>
    </div>
  );
};

export default Painting;
