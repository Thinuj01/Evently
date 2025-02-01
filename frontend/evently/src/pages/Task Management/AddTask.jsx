/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";

const AddTask = ({ addTask }) => {
    // Local state for form inputs
    const [taskName, setTaskName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
      const [cookies] = useCookies(["event_id"]);
    const [task, setTask] = useState({event_id:cookies.event_id});

    const handleChanges = (e) => {
        setTask({
          ...task,
          [e.target.name]: e.target.value, });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        axios.post('http://localhost:8000/tasks/create/',task)
        addTask()
      .then((response)=>{
        console.log("Task added");
      }).catch((error)=>{
        console.error(error);
      })
    };

    return (
        <div className="task-form-container">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Name"
                    name='task_name'
                    onChange={handleChanges}
                />
                <input
                    type="date"
                    placeholder="Deadline"
                    name='task_deadline'
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    placeholder="Assigned To"
                    name='task_assigned_to'
                    onChange={handleChanges}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
