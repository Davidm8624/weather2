function Modal(props) {

  function cancleButtonHandler() {
    props.onCancle();
  }

  function confirmButtonHandler() {
    props.onConfirm();
  }


  return (
    <div className='modal'>
      <p>are you sure</p>
      <button className='btn bth--alt' onClick={cancleButtonHandler}>cancle</button>
      <button className='btn' onClick={confirmButtonHandler}>more</button>
    </div>
  );
}

export default Modal;
