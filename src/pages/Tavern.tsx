import React from 'react';
import {useNavigate} from "react-router-dom";
import store from "../store/store";
import "twin.macro";
import ModalComponent from "../components/ModalComponent";


const Tavern = () => {
  const [value, setValue] = React.useState(false);
  const navigate = useNavigate()
  const navigateToTavern = () => {
    navigate('/')
  };
  const changesValue = () => {
    setValue(!value)
  }
  console.log('value', value);
  return <div tw="bg-red-400 p-10 flex flex-col">
    <div>{store.hearts}</div>
    <button onClick={navigateToTavern}>go to home</button>
    <button onClick={changesValue}>setValue true</button>
    <ModalComponent isOpen={value} setIsOpen={setValue}>
      <div>
        blablabla
      </div>
    </ModalComponent>
    Tavern
  </div>;
};

export default Tavern;