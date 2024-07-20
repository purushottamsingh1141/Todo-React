import React, { useState } from 'react';

function Input(props) {
  const [inputText, setinputText] = useState('');
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      props.addList(inputText);
      setinputText('');
    }}>
      <input 
        type="text" 
        placeholder='Enter Your Task' 
        value={inputText} 
        onChange={e => setinputText(e.target.value)} 
      />
      <button type='submit'
      >
        Add Task
      </button>
    </form>
  );
}

export default Input;
