import React from 'react'

export default function ExpenseSummary({expenses}) {
  const income = expenses
    .filter((e) => e.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

    const expense = expenses
    .filter((e) => e.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

    const balance=income+expense;
    return (
    <div>ExpenseSummary<br/><br/>
      INCOME:  {income} <br/><br/>
      EXPENSES:  {Math.abs(expense)} <br/><br/>
      Balance:  {balance}
    </div>
  )
}
