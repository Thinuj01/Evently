const VendorForm = () => {
    return (
        <div className="main-content">
            <h2>Add Vendor</h2>
            <form>
                <input type="text" placeholder="Task Name" />
                <input type="text" placeholder="Deadline" />
                <input type="text" placeholder="Assigned To" />
                <input type="text" placeholder="Status" />
                <button>Add Task</button>
            </form>
        </div>
    );
};
export default VendorForm;