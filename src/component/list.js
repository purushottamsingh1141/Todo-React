import React from 'react'


function List(props) {
  return (
    <li className="list-item">
       {props.index+1}.&nbsp;
        {props.item}
        <span>
        <i class="fa-solid fa-trash-can" onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  );
}

export default List
