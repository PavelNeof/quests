import 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import store from "../store/store";
import {PopoverComponent, Background, ButtonComponent, ModalComponent} from "../components";
import Header from "../components/Header";
import styled from "styled-components";
import tw from "twin.macro";

const Home = observer(() => {
  // const [hearts, setHearts] = React.useState<number | null>();

  const navigate = useNavigate();
  const navigateToTavern = () => {
    navigate('/tavern')
  };
  const deleteHearts = () => {
    store.deleteHearts()
  };
 const addHearts = () => {
    store.addHearts()
  };

  return <>
    <Header />
    <Background src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/WNKQ/cEEogN5G5" >
    <div tw="text-red-400 bg-gray-100 flex flex-col items-center">

      <div>{store.hearts}</div>
      <button tw="w-fit" onClick={store.startGame}>start Game</button>
      <button tw="w-fit" onClick={deleteHearts}>delete hearts</button>
      <button tw="w-fit" onClick={addHearts}>add hearts</button>
      <ModalComponent trigger={<Block>modal trigger</Block>}>
        <div>asdasdasd</div>
      </ModalComponent>
      <div tw="absolute top-[430px] left-[500px] text-white">
        <ButtonComponent onClick={navigateToTavern}>go to tavern!</ButtonComponent>
      </div>
      <PopoverComponent trigger={<div>trigger</div>}>
        <div>1</div>
      </PopoverComponent>
      <Block>Home</Block>
    </div>
  </Background>
</>
});
const Block = styled.div`
  ${tw`flex self-start`}
`;
export default Home;