import 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import store from "../store/store";
import 'twin.macro'

import {PopoverComponent, Background, ButtonComponent, ModalComponent} from "../components";
import Header from "../components/Header";

const Home = observer(() => {
  // const [hearts, setHearts] = React.useState<number | null>();

  const navigate = useNavigate();
  const navigateToTavern = () => {
    navigate('/tavern')
  };
  const deleteHearts = () => {
    store.deleteHearts()
  };

  return <>
    <Header />
    <Background src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/WNKQ/cEEogN5G5" >
    <div tw="text-red-400 bg-gray-100">

      <div>{store.hearts}</div>
      <button onClick={store.startGame}>start Game</button>
      <button onClick={deleteHearts}>delete hearts</button>
      <ModalComponent trigger={<div>modal trigger</div>}>
        <div>asdasdasd</div>
      </ModalComponent>
      <div tw="absolute top-[430px] left-[500px] text-white"><ButtonComponent onClick={navigateToTavern}>go to tavern!</ButtonComponent></div>

      <span>123</span>

      <PopoverComponent trigger={<div>trigger</div>}>
        <div>1</div>
      </PopoverComponent>
      <div tw="flex self-start">Home</div>
    </div>
  </Background>
</>
});

export default Home;