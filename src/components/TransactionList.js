import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <div className="transaction">
      <h3> Transaction History </h3>
      <ul className="transaction__list">
        { transactions.map( transaction => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </div>
  )
}

export default TransactionList;
