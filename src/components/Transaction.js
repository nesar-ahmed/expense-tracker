import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+';
  const borderColor = transaction.amount > 0 ? 'border-green' : 'border-red';

  return (
    <li className={borderColor}>
      <span> { transaction.text } </span>
      <span> {sign} €{Math.abs(transaction.amount)} </span>
      <button onClick={() => deleteTransaction(transaction.id)}> X </button>
    </li>
  )
}

export default TransactionList;
