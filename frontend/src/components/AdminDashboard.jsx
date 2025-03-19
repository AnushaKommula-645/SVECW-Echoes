import { useEffect, useState } from "react";

function AdminDashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/admin/pending-users")

            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const approveUser = async (id) => {
        await fetch(`http://localhost:5000/admin/approve/${id}`, { method: "PUT" });
        alert("User approved!");
        setUsers(users.filter((user) => user._id !== id));
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Pending Approvals:</h3>
            <ul>
                {users.filter((user) => !user.isApproved).map((user) => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                        <button onClick={() => approveUser(user._id)}>Approve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;
