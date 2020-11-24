import React from 'react';
import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="expense-tracker">
      <h1> Expense Tracker </h1>
      <GlobalProvider>
        <div className="expense-tracker__account-summary">
          <Balance />
          <IncomeExpenses />
        </div>

        <AddTransaction />

        <TransactionList />

      </GlobalProvider>
    </div>
  );
}

export default App;
