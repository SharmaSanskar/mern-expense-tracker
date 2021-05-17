import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-$' : '+$';
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      className={
        transaction.amount < 0
          ? ' border-r-4 border-red-700 p-1 shadow-sm mb-1 flex items-center flex-row'
          : 'border-r-4 border-green-700 p-1 shadow-sm mb-1 flex items-center flex-row'
      }
    >
      <p className='p-1 mx-12 text-4 font-medium flex-1 text-left'>
        {transaction.text}
      </p>
      <p className='mr-8 p-1 font-bold text-teal-700'>
        {sign}
        {numberWithCommas(Math.abs(transaction.amount))}
      </p>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className='p-1 mx-2 rounded-full h-8 w-8 bg-red-700 text-white hover:bg-red-600 focus:outline-none'
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
