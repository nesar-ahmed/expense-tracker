import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    { id: 100, text: 'Flower', amount: -20},
    { id: 101, text: 'Salary', amount: 300},
    { id: 102, text: 'Book', amount: -10},
    { id: 103, text: 'Camera', amount: -150},
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
       {children}
    </GlobalContext.Provider>)
}
