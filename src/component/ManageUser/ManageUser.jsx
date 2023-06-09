import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useEffect } from 'react';
import { getAllUser } from '../../api/auth';
import { useState } from 'react';

const ManageUser = () => {
    const { user } = useContext(AuthContext)
    const [userinfo, setUSerinfo] = useState([])
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        getAllUser()
          .then(data => setUSerinfo(data));
      }, []);
      
    console.log(userinfo)

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className='bg-base-200'>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>email</th>
              <th>make admin</th>
              <th>make instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userinfo.map((item, index) =>  <tr key={item._id}>
              <th>
               {index + 1}
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {item.email}
              </td>
              <th>
                <button className="btn btn-ghost btn-xs bg-base-200">{item.role}</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs bg-base-200">sudent</button>
              </th>
            </tr>)}
            <tr>
              <th>
               1
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user?.photoURL}alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.displayName}</div>
                  </div>
                </div>
              </td>
              <td>
                {user?.email}
              </td>
              <th>
                <button className="btn btn-ghost btn-xs bg-base-200">student</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs bg-base-200">sudent</button>
              </th>
            </tr>
          </tbody>
          
        </table>
      </div>
    );
};

export default ManageUser;