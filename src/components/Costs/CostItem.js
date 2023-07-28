import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css';
import React, { useState } from 'react';
 
const CostItem = (props) => {

  const [description, setDescription] = useState(props.description);


  const changeDescriptionHandler = () => {
    setDescription('New Coast');
    console.log(description);
  }

  return (

    <Card className='cost-item'>
      <CostDate date={props.date}/>
      <div className='cost-item__description'>
        <h2>{description}</h2>
        <div classNa  me='cost-item__price'>${props.amount}</div> 
      </div>
      <button onClick={changeDescriptionHandler} >change offs</button>
    </Card>
  );
}

export default CostItem;
