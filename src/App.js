import { useState } from 'react';
import './App.css';
import Input from './component/input';
import List from './component/list';

function App() {
  const [storeInpput, takeInput] = useState([]);

  

  const addList = (inputText) =>{
    if(inputText.length>0)
    takeInput([...storeInpput, inputText]);
  };

  const deleteListItem = (key)=> {
    let newListTodo = [...storeInpput];
    newListTodo.splice(key,1)
    takeInput([...newListTodo])
  }
  return (
    <div className="main-Container">
      <div className="center-Container">

        <Input addList={addList} />
        <h2>TODO LIST</h2>
        <hr />
        <ul className='ul'>
        {storeInpput.map((listItem,i)=>(
            <List key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
