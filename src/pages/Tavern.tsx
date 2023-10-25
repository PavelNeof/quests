import 'react';
import {useNavigate} from "react-router-dom";
import store from "../store/store";
import "twin.macro";


const Tavern = () => {
  const navigate = useNavigate()
  const navigateToTavern = () => {
    navigate('/')
  }
  return <div tw="bg-red-400 p-10">
    <div>{store.hearts}</div>
    <button onClick={navigateToTavern}>go to home</button>
    Tavern
  </div>;
};

export default Tavern;