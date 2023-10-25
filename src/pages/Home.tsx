import 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import store from "../store/store";


const Home = observer(() => {
  // const [hearts, setHearts] = React.useState<number | null>();

  const navigate = useNavigate();
  const navigateToTavern = () => {
    navigate('/tavern')
  };
  const deleteHearts = () => {
    store.deleteHearts()
  };

  return <div >
    <div>{store.hearts}</div>
    <button onClick={store.startGame}>start Game</button>
    <button onClick={deleteHearts}>delete hearts</button>
    <button onClick={navigateToTavern}>go to tavern</button>
    <div>Home</div>
  </div>;
});

export default Home;