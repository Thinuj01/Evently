/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const TaskStatusCount = ({ tasks }) => {
    // Calculate the count for each status
    const statusCount = {
        Pending: tasks.filter(task => task.task_status === 'Pending').length,
        'In Progress': tasks.filter(task => task.task_status === 'In Progress').length,
        Completed: tasks.filter(task => task.task_status === 'Completed').length,
    };

    return (
        <div className="task-status-count-container">
            <h3>Status Summary</h3>
            <div className="status-summary">
                <div className="status-item">
                    <span className="status-label">Pending</span>
                    <span className="status-count">{statusCount.Pending}</span>
                </div>
                <div className="status-item">
                    <span className="status-label">In Progress</span>
                    <span className="status-count">{statusCount['In Progress']}</span>
                </div>
                <div className="status-item">
                    <span className="status-label">Completed</span>
                    <span className="status-count">{statusCount.Completed}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskStatusCount;
