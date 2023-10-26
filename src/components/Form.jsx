// import React from 'react'
import { useRef } from 'react'
import './Form.css'
const Form = (props) => {
    const inputRef=useRef('');

    function submitHandler(e){
        e.preventDefault();
        // console.log(inputRef.current.value);
        props.addTasks(inputRef.current.value);
        inputRef.current.value='';
    }

  return (
    <form className="form">
      <input ref={inputRef}></input>
      <button onClick={submitHandler}>+</button>
    </form>
  );
}

export default Form