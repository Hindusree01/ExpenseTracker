import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''
    //})

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        //});
        //setUserInput((prevSate)=>{
        //    return {...prevSate, enteredTitle: event.target.value};
        //})
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value,
        //});
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value,
        //});
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setState(0);
    };
    const [state, setState] = useState(0);
    const addExpenseHandler = () => {
        setState(1);
    }
    const cancelHandler=()=>{
        setState(0);
    }



    return (
        <div>
            {state === 0 && (<button onClick={addExpenseHandler}>Add New Expense</button>)}
            {state === 1 && (<form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type = 'button' onClick = {cancelHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>

                </div>

            </form>)}
        </div>
    );
};



export default ExpenseForm;
