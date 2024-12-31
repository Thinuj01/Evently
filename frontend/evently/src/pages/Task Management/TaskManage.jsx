import React from 'react'
import "./TaskManage.css"
import AddTask from './AddTask';

const TaskManage = () => {
    return (
        <div className="main-content">
            <h2>Task Management</h2>
            <input type="text" placeholder="Search for a task..." />
            <AddTask/>
            <table>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Deadline</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Decorate Venue</td>
                        <td>2024-01-10</td>
                        <td>John</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>Order Catering</td>
                        <td>2024-01-12</td>
                        <td>Lisa</td>
                        <td>In Progress</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default TaskManage;
