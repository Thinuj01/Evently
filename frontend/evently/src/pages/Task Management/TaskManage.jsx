import React, { useState } from 'react';
import "./TaskManage.css";
import AddTask from './AddTask';
import TaskStatusCount from './TaskStatusCount'; // Import TaskStatusCount component

const TaskManage = () => {
    const [tasks, setTasks] = useState([
        { name: "Decorate Venue", deadline: "2024-01-10", assignedTo: "John", status: "Pending" },
        { name: "Order Catering", deadline: "2024-01-12", assignedTo: "Lisa", status: "In Progress" }
    ]);
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);
    const [editedTask, setEditedTask] = useState({
        name: "",
        deadline: "",
        assignedTo: "",
        status: ""
    });

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleStatusChange = (index, newStatus) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = newStatus;
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
            setTasks(updatedTasks);
        }
    };

    const handleEditClick = (task, index) => {
        setEditingTaskIndex(index);
        setEditedTask({ ...task }); // Pre-fill the edited task with the current task values
    };

    const handleEditChange = (e) => {
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveEdit = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editingTaskIndex] = editedTask;
        setTasks(updatedTasks);
        setEditingTaskIndex(null); // Close the edit form
        setEditedTask({
            name: "",
            deadline: "",
            assignedTo: "",
            status: "",
        });
    };

    const getStatusBackgroundColor = (status) => {
        switch (status) {
            case 'Pending':
                return '#f4b400'; 
            case 'In Progress':
                return '#1e88e5'; 
            case 'Completed':
                return '#388e3c'; 
            default:
                return '#f1f5f9'; 
        }
    };

    return (
        <div className="task-manage-container">
            <div className="main-content">
                <div className="task-content-wrapper">
                    <div className="add-task-container">
                        <AddTask addTask={addTask} />
                    </div>
                    <div className="task-status-summary-container">
                        <TaskStatusCount tasks={tasks} />
                    </div>
                </div>
                <div className="taskManage-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Deadline</th>
                                <th>Assigned To</th>
                                <th>Status</th>
                                <th>Action</th> {/* New column for actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.deadline}</td>
                                    <td>{task.assignedTo}</td>
                                    <td>
                                        <select
                                            value={task.status}
                                            onChange={(e) => handleStatusChange(index, e.target.value)}
                                            style={{
                                                backgroundColor: getStatusBackgroundColor(task.status),
                                                color: 'white',
                                                border: 'none',
                                                padding: '5px 10px',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    </td>
                                    <td>
                                        <a
                                            href="#edit"
                                            className="edit-link"
                                            onClick={() => handleEditClick(task, index)}
                                        >
                                            Edit
                                        </a>
                                        <span className="space-between" />
                                        <a
                                            href="#delete"
                                            className="delete-link"
                                            onClick={() => handleDeleteTask(index)}
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Edit Form */}
                {editingTaskIndex !== null && (
                    <div className="edit-form-container">
                        <h3>Edit Task</h3>
                        <form>
                            <label>
                                Task Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={editedTask.name}
                                    onChange={handleEditChange}
                                    placeholder="Enter task name"
                                />
                            </label>
                            <label>
                                Deadline:
                                <input
                                    type="date"
                                    name="deadline"
                                    value={editedTask.deadline}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <label>
                                Assigned To:
                                <input
                                    type="text"
                                    name="assignedTo"
                                    value={editedTask.assignedTo}
                                    onChange={handleEditChange}
                                    placeholder="Enter assignee"
                                />
                            </label>
                            <label>
                                Status:
                                <select
                                    name="status"
                                    value={editedTask.status}
                                    onChange={handleEditChange}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </label>
                            <button type="button" onClick={handleSaveEdit}>
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditingTaskIndex(null)} // Close the edit form
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskManage;
