import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-2xl font-semibold text-gray-800">
        Add new transaction
      </h3>
      <form onSubmit={formSubmit}>
        <div className="flex mx-5 items-center my-1">
          <div className="w-1/3">
            <label
              htmlFor="text"
              className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Text
            </label>
          </div>
          <div className="w-2/3">
            <input
              value={text}
              type="text"
              placeholder="Enter Text.."
              onChange={(e) => setText(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-700"
            />
          </div>
        </div>
        <div className="flex mx-5 items-center">
          <div className="w-1/3">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Amount
            </label>
          </div>
          <div className="w-2/3">
            <input
              value={amount}
              type="number"
              placeholder="Enter Amount.."
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-700"
            />
          </div>
        </div>
        <p className="text-gray-700 font-medium">
          ( positive for income ; negative for expense )
        </p>
        <button
          className="my-3 bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-teal-200 font-semibold py-2 px-4 border border-teal-200 rounded-full shadow-md focus:outline-none"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
