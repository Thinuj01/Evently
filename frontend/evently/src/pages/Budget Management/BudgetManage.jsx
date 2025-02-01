/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./BudgetManage.css";
import BudgetOverview from "../../components/Budget Overview/BudgetOverview";
import { useCookies } from "react-cookie";
import axios from "axios";
import Model from '../../components/Model/Model';
import AddBudgetForm from "../../components/AddBudgetForm/AddBudgetForm";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditBudgetForm from "../../components/EditBudgetForm/EditBudgetForm";
import { SiCashapp } from "react-icons/si";


function BudgetManage() {
  const [cookies] = useCookies(["event_id"]);
  const [budget, setBudget] = useState({});
  const [isAddBudgetModelOpen, setIsAddBudgetModelOpen] = useState(false);
  const [isEditBudgetModelOpen, setIsEditBudgetModelOpen] = useState(false);
  const [editBudget, setEditBudget] = useState({});
  const[useEffectRunner,setUseEffectRunner] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/budgets/event/${cookies.event_id}/`)
      .then((response) => {
        setBudget(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[isAddBudgetModelOpen,isEditBudgetModelOpen,useEffectRunner]);

  const handleGuestDeleteClick = (budget_id) => {
    if (window.confirm("Are you sure you want to delete this Budget?")) {
      axios.delete(`http://localhost:8000/budgets/delete/${budget_id}/`)
        .then((response) => {
          console.log("Guest deleted");
          setUseEffectRunner(!useEffectRunner);
        })
        .catch((error) => {
          console.log(error);
        });
    }

  };
  const handleGuestEditClick = (budget_id) => {
    axios.get(`http://localhost:8000/budgets/${budget_id}/`)
    .then((response) => {
        console.log(response.data);
        setEditBudget(response.data);
        setIsEditBudgetModelOpen(true);
    })
    .catch((error) => {
        console.log(error);
    });
  };

  const totalExpenses = Array.isArray(budget) ? budget.reduce((total, item) => total + item.budget_amount, 0) : 0;

  return (
    <div className="budgetManage-container">
      <div className="budgetOverview-section">
        <BudgetOverview total={totalExpenses}/>
      </div>
      <div className="budgetManage-addExpense">
        <div className="budgetManage-addExpense-Btn" onClick={()=>setIsAddBudgetModelOpen(true)}><SiCashapp/> Add a Expense</div>
      </div>
      <div className="budgetManage-table-container">
        {budget.length === 0 ? (
          <table>
            <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
              <tr>
                <td colSpan={5}>No Budgets found.</td>
              </tr>
            </thead>
          </table>
        ) : (
          <table>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          {Array.isArray(budget) && budget.map((expense) => (
            <tr key={expense.budget_id}>
              <td>{expense.budget_name}</td>
              <td>Rs {expense.budget_amount}.00</td>
              <td>{expense.budget_date}</td>
              <td>{expense.budget_notes}</td>
<td><a href="#"  onClick={()=>handleGuestEditClick(expense.budget_id)} className='guestManageEdit'><FaRegEdit/></a> <a href='#' className='guestManageDelete' onClick={()=>handleGuestDeleteClick(expense.budget_id)}><MdDeleteOutline/></a></td>
            </tr>
          ))}
          </table>
        )}
      </div>
      <Model isOpen={isAddBudgetModelOpen} onClose={()=> setIsAddBudgetModelOpen(false)} >
            <div className="addBudget-container">
                     <AddBudgetForm onClose={()=>setIsAddBudgetModelOpen(false)}/>     
            </div>
      </Model>
      <Model isOpen={isEditBudgetModelOpen} onClose={()=> setIsEditBudgetModelOpen(false)} >
            <div className="addBudget-container">
                     <EditBudgetForm onClose={()=>setIsEditBudgetModelOpen(false)} editBudget={editBudget}/>     
            </div>
      </Model>
    </div>
  );
}

export default BudgetManage;
