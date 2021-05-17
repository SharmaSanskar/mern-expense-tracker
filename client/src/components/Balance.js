import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);
  return (
    <div className='bg-gray-200'>
      <h4 className='text-2xl tracking-wider font-semibold text-gray-800'>
        Balance
      </h4>
      <h1 className='text-3xl tracking-wider font-bold text-teal-700'>
        ${numberWithCommas(total)}
      </h1>
    </div>
  );
};

export default Balance;
