import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UsersList from './Components/UsersList/UsersList';

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUsersList( prevUsersList => {
      
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {usersList.length > 0 ? <UsersList users={usersList}/> : null}

    </div>
  );
}

export default App;
