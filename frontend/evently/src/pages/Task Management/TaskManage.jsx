/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./TaskManage.css";
import AddTask from './AddTask';
import TaskStatusCount from './TaskStatusCount';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TaskManage = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);
    const [cookies] = useCookies(['event_id']);
    const [useEffectRunner, setUseEffectRunner] = useState(false);
    const [editedTask, setEditedTask] = useState({
        task_name: "",
        task_deadline: "",
        task_assigned_to: "",
        task_status: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/tasks/event/${cookies.event_id}/`)
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => console.log(error));
    }, [useEffectRunner]);

    const addTask = (newTask) => {
        setUseEffectRunner(!useEffectRunner);
    };

    const handleStatusChange = (index, newStatus) => {
        const updatedTask = { ...tasks[index], task_status: newStatus };
    
        axios.put(`http://localhost:8000/tasks/edit/${updatedTask.task_id}/`, updatedTask)
            .then(() => {
                setUseEffectRunner(!useEffectRunner);
            })
            .catch(error => console.error("Error updating task status:", error));
    };
    

    const handleDeleteTask = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            const taskId = tasks[index].task_id;

            axios.delete(`http://localhost:8000/tasks/delete/${taskId}/`)
                .then(() => {
                    setUseEffectRunner(!useEffectRunner);
                })
                .catch(error => console.error("Error deleting task:", error));
        }
    };

    const handleEditClick = (task, index) => {
        setEditingTaskIndex(index);
        setEditedTask({ ...task });
    };

    const handleEditChange = (e) => {
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value,
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

    const handleSaveEdit = () => {
        axios.put(`http://localhost:8000/tasks/edit/${tasks[editingTaskIndex].task_id}/`, editedTask)
            .then(() => {
                setUseEffectRunner(!useEffectRunner);
                setEditingTaskIndex(null);
                setEditedTask({
                    task_name: "",
                    task_deadline: "",
                    task_assigned_to: "",
                    task_status: "",
                });
            })
            .catch(error => console.error("Error updating task:", error));
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.task_name}</td>
                                    <td>{task.task_deadline}</td>
                                    <td>{task.task_assigned_to}</td>
                                    <td>
                                        <select
                                            value={task.task_status}
                                            onChange={(e) => handleStatusChange(index, e.target.value)}
                                            style={{
                                                backgroundColor: getStatusBackgroundColor(task.task_status),
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
                                        <a href="#edit" onClick={() => handleEditClick(task, index)}><FaRegEdit /> Edit</a>
                                        <span> | </span>
                                        <a href="#delete" onClick={() => handleDeleteTask(index)}><MdDeleteOutline/> Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {editingTaskIndex !== null && (
                    <div className="edit-form-container">
                        <h3>Edit Task</h3>
                        <form>
                            <label>
                                Task Name:
                                <input type="text" name="task_name" value={editedTask.task_name} onChange={handleEditChange} />
                            </label>
                            <label>
                                Deadline:
                                <input type="date" name="task_deadline" value={editedTask.task_deadline} onChange={handleEditChange} />
                            </label>
                            <label>
                                Assigned To:
                                <input type="text" name="task_assigned_to" value={editedTask.task_assigned_to} onChange={handleEditChange} />
                            </label>
                            <label>
                                Status:
                                <select name="task_status" value={editedTask.task_status} onChange={handleEditChange}>
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </label>
                            <button type="button" onClick={handleSaveEdit}>Save Changes</button>
                            <button type="button" onClick={() => setEditingTaskIndex(null)}>Cancel</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskManage;
