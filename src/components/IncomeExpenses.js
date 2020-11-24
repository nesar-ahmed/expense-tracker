import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0)
                        .reduce((acc, item) => (acc += item), 0)
                        .toFixed(2);

  const expense = ( amounts.filter(item => item < 0)
                        .reduce((acc, item) => (acc += item), 0) * -1)
                        .toFixed(2);

  return (
    <>
      <div className="income">
        <h2> Monthly Income </h2>
        <h3> €{ income }</h3>
      </div>
      <div className="expense">
        <h2> Monthly Expense </h2>
        <h3> €{ expense }</h3>
      </div>
    </>
  )
}

export default IncomeExpenses;
