import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);
  const expense = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0) * -1
  ).toFixed(2);

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-green-600 py-3 px-8 mx-4 my-2 rounded-lg'>
        <h4 className='text-green-200 font-semibold tracking-wider'>Income</h4>
        <p className='text-green-100 font-bold text-2xl'>
          ${numberWithCommas(income)}
        </p>
      </div>
      <div className='bg-red-600 py-3 px-8 mx-4 my-2 rounded-lg'>
        <h4 className='text-red-200 font-semibold tracking-wider'>Expense</h4>
        <p className='text-red-100 font-bold text-2xl'>
          ${numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
