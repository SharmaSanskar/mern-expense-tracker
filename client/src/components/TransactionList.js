import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions, loading } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div className='text-2xl font-bold text-gray-600 tracking-wider'>
          Loading..
        </div>
      ) : (
        <div>
          <h3 className='border-t border-gray-200 text-2xl font-semibold text-gray-800'>
            History
          </h3>
          <ul>
            {transactions.map((transaction) => (
              <Transaction key={transaction._id} transaction={transaction} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TransactionList;
