import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('')

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div className="add-transaction">
      <h3> Add New Transaction </h3>
      <form action="" onSubmit={onSubmit}>
        <div className="add-transaction__form">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text ( Example: Salary )" />
        </div>
        <div className="add-transaction__form">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount ( Example: 2000 )" />
        </div>
        <button type="submit" className="add-transaction__button"> Add transaction </button>
      </form>
    </div>
  )
}

export default AddTransaction;
