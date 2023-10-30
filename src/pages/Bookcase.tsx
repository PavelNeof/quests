import React from 'react';
import { Background, ButtonComponent, ModalComponent, TooltipComponent } from '../components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import 'twin.macro';

const Bookcase = () => {
  const navigate = useNavigate();
  const [result, setResult] = React.useState<string[]>([]);

  const setFunction = (value: string) => {
    const findItem = result.find(item => item === value);
    if (!findItem) {
      const arr = [...result, value];
      setResult(arr);
      return;
    }
    const filteredResult = result.filter(item => item !== value);
    setResult(filteredResult);
  };

  const checkForIdentity = () => {
    const checkArray = ['Приключения Какашки', 'Душим кошку за 15 секунд', 'Проктология для любознательных', 'Олег, Олег, скорей сюда, там с Игорем что-то случилось, он лежит и дергается',
    'Мой дедушка был вишней', 'Девственная селедка', 'Парадокс пениса', 'Как объяснить ребенку, что вы собираетесь его продать'];
    console.log('checkArray', checkArray)
    console.log('result', result)
    if (JSON.stringify(checkArray) === JSON.stringify(result)) {
      alert('всё заебись');
      return;
    }
    //минус жизнь
    alert('hui');
  };
  
  return (
    <div>
      <Header />
      <Background src="https://sun9-38.userapi.com/impg/rtAf_sz3Ph0zQnKCE_hMh5Yp-3-IwEvuPaY_0A/5HcIdtHoSVI.jpg?size=1024x800&quality=96&sign=ac36afce244394d562c48147be5c0900&type=album">
        <div tw="flex flex-col items-center">
          <div tw="bg-gray-900/50 absolute top-4 left-[262px] text-xs max-h-[110px] w-[500px] overflow-y-auto rounded">
          {result.map(item => (
              <div tw="text-white">{item}</div>
          ))}
          </div>
          <div tw="mt-32 flex gap-2">
            <ButtonComponent onClick={() => navigate('/library')}>Вернуться назад</ButtonComponent>
            <ModalComponent
              title={'Информация'}
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
              <div>
                Осматривая книги вы поняли, что на некоторые из них можно нажать. И похоже, что они должны нажимться в каком-то определённом порядке.
                Единственное, вас немного настораживает, что будет, если выбрать неправильную очерёдность...
              </div>
            </ModalComponent>
          </div>
          <div tw="absolute top-[650px] right-10 flex gap-2">
            <ButtonComponent onClick={checkForIdentity}>Нажать</ButtonComponent>
            <ButtonComponent onClick={() => setResult([])}>Сбросить</ButtonComponent>
          </div>

          <TooltipComponent content="Проктология для любознательных" delayDuration="10">
            <div
              tw="absolute top-[191px] left-[168px] h-[110px] w-[30px] rounded hover:bg-red-400/50"
              onClick={() => setFunction('Проктология для любознательных')}
            />
          </TooltipComponent>
          <TooltipComponent content="Мой дедушка был вишней" delayDuration="10" arrowSide="right">
            <div
              tw="absolute top-[178px] left-[464px] h-[123px] w-[18px] rounded hover:bg-red-400/50"
              onClick={() => setFunction('Мой дедушка был вишней')}
            />
          </TooltipComponent>
          <TooltipComponent content="Олег, Олег, скорей сюда, там с Игорем что-то случилось, он лежит и дергается" delayDuration="10">
            <div
              tw="absolute top-[375px] left-[168px] h-[30px] w-[110px] rounded hover:bg-red-400/50 rotate-[3deg]"
              onClick={() => setFunction('Олег, Олег, скорей сюда, там с Игорем что-то случилось, он лежит и дергается')}
            />
          </TooltipComponent>
          <TooltipComponent content="Приключения Какашки" delayDuration="10">
            <div
              tw="absolute top-[335px] left-[606px] h-[134px] w-[25px] rounded hover:bg-red-400/50"
              onClick={() => setFunction('Приключения Какашки')}
            />
          </TooltipComponent>
          <TooltipComponent content="Как объяснить ребенку, что вы собираетесь его продать" delayDuration="10">
            <div
              tw="absolute top-[214px] right-[66px] h-[86px] w-[16px] rounded hover:bg-red-400/50 rotate-[2deg]"
              onClick={() => setFunction('Как объяснить ребенку, что вы собираетесь его продать')}
            />
          </TooltipComponent>
          <TooltipComponent content="Парадокс пениса" delayDuration="10">
            <div
              tw="absolute top-[533px] right-[133px] h-[104px] w-[16px] rounded hover:bg-red-400/50"
              onClick={() => setFunction('Парадокс пениса')}
            />
          </TooltipComponent>
          <TooltipComponent content="Душим кошку за 15 секунд" delayDuration="10">
            <div
              tw="absolute top-[517px] right-[410px] h-[120px] w-[31px] rounded hover:bg-red-400/50 rotate-[-1deg]"
              onClick={() => setFunction('Душим кошку за 15 секунд')}
            />
          </TooltipComponent>
          <TooltipComponent content="Девственная селедка" delayDuration="10">
            <div
              tw="absolute top-[730px] right-[298px] h-[16px] w-[110px] rounded hover:bg-red-400/50 rotate-[1deg]"
              onClick={() => setFunction('Девственная селедка')}
            />
          </TooltipComponent>
          <TooltipComponent content="Мерзкий Гриша" delayDuration="10">
            <div
              tw="absolute top-[620px] right-[263px] h-[16px] w-[120px] rounded hover:bg-red-400/50 rotate-[1deg]"
              onClick={() => setFunction('Мерзкий Гриша')}
            />
          </TooltipComponent>
          <TooltipComponent content="В прошлой жизни я был хлебом" delayDuration="10">
            <div
              tw="absolute top-[555px] left-[100px] h-[82px] w-[16px] rounded hover:bg-red-400/50"
              onClick={() => setFunction('В прошлой жизни я был хлебом')}
            />
          </TooltipComponent>
          <TooltipComponent content="Половое воспитание пенсионеров" delayDuration="10">
            <div
              tw="absolute top-[665px] left-[124px] h-[133px] w-[32px] rounded hover:bg-red-400/50"
              onClick={() => setFunction('Половое воспитание пенсионеров')}
            />
          </TooltipComponent>
          <TooltipComponent content="Исповедь рядового Кучи" delayDuration="10">
            <div
              tw="absolute top-[349px] right-[119px] h-[120px] w-[22px] rounded hover:bg-red-400/50 rotate-[-2deg]"
              onClick={() => setFunction('Исповедь рядового Кучи')}
            />
          </TooltipComponent>
          <TooltipComponent content="лженазвание" delayDuration="10">
            <div
              tw="absolute top-[349px] right-[245px] h-[120px] w-[17px] rounded bg-red-400/50 rotate-[-2deg]"
              onClick={() => setFunction('В прошлой жизни я был бабушкой')}
            />
          </TooltipComponent>
          <TooltipComponent content="Неожиданное применение дыни. О чём молчат бахчевые культуры" delayDuration="10">
            <div
              tw="absolute top-[680px] left-[425px] h-[114px] w-[25px] rounded hover:bg-red-400/50  rotate-[14deg]"
              onClick={() => setFunction('Неожиданное применение дыни. О чём молчат бахчевые культуры')}
            />
          </TooltipComponent>
          <TooltipComponent content="лженазвание" delayDuration="10">
            <div
              tw="absolute top-[268px] left-[723px] h-[15px] w-[92px] rounded bg-red-400/50"
              onClick={() => setFunction('лженазвание')}
            />
          </TooltipComponent>
          <TooltipComponent content="Душим кошку за 15 секунд" delayDuration="10">
            <div
              tw="absolute top-[557px] right-[563px] h-[80px] w-[31px] rounded bg-red-400/50 rotate-[2deg]"
              onClick={() => setFunction('Душим кошку за 15 секунд')}
            />
          </TooltipComponent>
        </div>
      </Background>
    </div>
  );
};

export default Bookcase;
