import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
const Expense = (props) => {
  const [year, setYear] = useState('2019');
  const filterChangeHandler = (choosenvalue) => {
    setYear(choosenvalue);
  };
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onFilter={filterChangeHandler} />
        <ExpenseChart expenses = {filteredExpenses}/>
        <ExpensesList expenses = {filteredExpenses} />
      </Card>
    </div>
  );

}
export default Expense;