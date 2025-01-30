/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import './AddBudgetForm.css'
import axios from "axios";
import { useCookies } from "react-cookie";

function AddBudgetForm({onClose}) {
    const [cookies] = useCookies(["event_id"]);
    const[expenseForm,setExpenseForm] = useState({event_id:cookies.event_id});

    const handleChanges = (e) => {
        setExpenseForm({
            ...expenseForm,
            [e.target.name]: e.target.value, });
    };

    const onSubmit=()=>{
        console.log(expenseForm);
        axios.post('http://localhost:8000/budgets/create/',expenseForm)
          .then((response)=>{
            console.log("Guest added");
            onClose();
          }).catch((error)=>{
            console.error(error);
          })
      };

  return (
    <div className="AddBudgetForm-sector">
      <div className="AddBudgetForm-title">
        <h2>BUDGET</h2>
      </div>
      <div className="AddBudgetForm-input">
        <label htmlFor="budget_name">Expense Name</label>
        <input name="budget_name" type="text" className="input-name" onChange={handleChanges}></input>
      </div>
      <div className="AddBudgetForm-input">
        <label htmlFor="budget_amount">Amount</label>
        <input name="budget_amount" type="number" className="input-name" onChange={handleChanges}></input>
      </div>
      <div className="AddBudgetForm-input">
        <label htmlFor="">Date</label>
        <input name="budget_date" type="date" className="input-date" onChange={handleChanges}></input>
      </div>
      <div className="AddBudgetForm-input">
        <label htmlFor="budget_notes">Notes</label>
        <textarea name="budget_notes" type="text" className="input-notes" onChange={handleChanges}></textarea>
      </div>
      <div className="AddBudgetForm-addBtn-container">
        <div className="AddBudgetForm-addBtn" onClick={onSubmit}>Add Budget</div>
      </div>
    </div>
  )
}

export default AddBudgetForm
