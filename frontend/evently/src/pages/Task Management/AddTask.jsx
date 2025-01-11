import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    // Local state for form inputs
    const [taskName, setTaskName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [assignedTo, setAssignedTo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName && deadline && assignedTo) {
            // Create new task object with default status as "Pending"
            const newTask = { name: taskName, deadline, assignedTo, status: "Pending" };
            addTask(newTask); // Pass the new task to the parent component
            // Reset the form
            setTaskName("");
            setDeadline("");
            setAssignedTo("");
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <div className="task-form-container">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Assigned To"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
