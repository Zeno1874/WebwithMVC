import { useState, useEffect } from 'react';
import './App.css';
import { getAllUsers } from './client.jsx';

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await getAllUsers();
            const users = await response.json();
            console.log(users);
            setUsers(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
      <>
        <h1>Subscription</h1>
          {users.length > 0 ? (
              <ul>
                  {users.map(user => (
                      <li key={user.userID}>{user.username}</li>
                  ))}
              </ul>
          ) : (
              <p>No users available</p>
          )}
      </>
    );
}

export default App;
