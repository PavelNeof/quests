import 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import store from "../store/store";
import 'twin.macro'
import {Button} from "@radix-ui/themes";
import {PopoverComponent, Background} from "../components";
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
      <Button onClick={navigateToTavern}>go to tavern</Button>

      <PopoverComponent trigger={<div>trigger</div>}>
        <div>1</div>
      </PopoverComponent>
      <div tw="flex self-start">Home</div>
    </div>
  </Background>
</>
});

export default Home;