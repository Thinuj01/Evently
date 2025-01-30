/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import './EditBudgetForm.css'
import axios from "axios";
import { useCookies } from "react-cookie";

function EditBudgetForm({onClose, editBudget}) {
    const [cookies] = useCookies(["event_id"]);
    const[expenseForm,setExpenseForm] = useState(editBudget);

    const handleChanges = (e) => {
        setExpenseForm({
            ...expenseForm,
            [e.target.name]: e.target.value, });
    };

    const onSubmit=()=>{
        console.log(expenseForm);
        axios.put(`http://localhost:8000/budgets/edit/${expenseForm.budget_id}/`,expenseForm)
          .then((response)=>{
            console.log("Budget Edited");
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
        <input name="budget_name" type="text" className="input-name" value={expenseForm.budget_name} onChange={handleChanges}></input>
      </div>
      <div className="AddBudgetForm-input">
        <label htmlFor="budget_amount">Amount</label>
        <input name="budget_amount" type="number" className="input-name" value={expenseForm.budget_amount} onChange={handleChanges}></input>
      </div>
      <div className="AddBudgetForm-input">
        <label htmlFor="">Date</label>
        <input name="budget_date" type="date" className="input-date" value={expenseForm.budget_date} onChange={handleChanges}></input>
      </div>
      <div className="AddBudgetForm-input">
        <label htmlFor="budget_notes">Notes</label>
        <textarea name="budget_notes" type="text" className="input-notes" value={expenseForm.budget_notes} onChange={handleChanges}></textarea>
      </div>
      <div className="AddBudgetForm-addBtn-container">
        <div className="AddBudgetForm-addBtn" onClick={onSubmit}>Update Budget</div>
      </div>
    </div>
  )
}

export default EditBudgetForm
