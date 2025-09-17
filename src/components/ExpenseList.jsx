import React from 'react'

export default function ExpenseList({expenses,deleteExpenses,editExpenses}) {
  return (
    <div>{expenses.map((item,index) => (
        <div key={index}>
          {item.title} - {item.amount}
  <button onClick={()=>deleteExpenses(item._id)}>Delete</button>  
   <button onClick={()=>editExpenses(item)}>Edit</button>     
        </div>
      ))}</div>
  )
}
