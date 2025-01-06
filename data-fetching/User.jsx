// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import UpdateUser from "./Updateuser";
// const User = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/user/fetch")
//       .then((res) => {
//         console.log(res.data);
//         setUsers(res.data.data); // Assuming the API returns data in res.data.data
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const deleteUser = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       axios
//         .delete(`http://localhost:3000/api/user/delete/${id}`)
//         .then(() => {
//           alert("User deleted successfully");
//           setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
//         })
//         .catch((error) => {
//           console.log(error);
//           alert("Failed to delete user");
//         });
//     }
//   };
  

//   return (
//     <div>
//       <Link to="/create">Create User</Link>
//       <table border={1} style={{ width: "100%" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.address}</td>
//               <td>
//             <Link to={`/update/${user._id}`}>Update</Link>
//               </td>
//               <td>
//                 <button onClick={() => deleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default User;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/fetch")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.data); // Assuming the API returns data in res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:3000/api/user/delete/${id}`)
        .then(() => {
          alert("User deleted successfully");
          setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to delete user");
        });
    }
  };

  return (
    <div>
      <Link to="/create">Create User</Link>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/update/${user._id}`} style={{ marginRight: "10px" }}>
                  Update
                </Link>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
