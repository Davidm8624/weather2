import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  } 

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>view more</button>
      </div>
      {modalIsOpen && <Modal onCancle={closeModalHandler} onConfirm={closeModalHandler}/>} 
      {modalIsOpen && <Backdrop onCancle={closeModalHandler}/>}
      {/* this fowards the onlick which is not supported by js as it is a html feature to the backdrop js where we tell that our non-supported onClick 
      is just infact a basic onclick according to html using props.onclick */}
    </div>
  );
}

export default Card;

//make sure that the name of all compoents is CAPITAL
