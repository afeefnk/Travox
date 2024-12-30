import React, { useEffect, useState } from "react";
import editicon from "../../../assets/images/UserManagement/editicon.svg";
import deleteicon from "../../../assets/images/UserManagement/deleteicon.svg";
import "./manageuser.css";

const ManageUser = () => {
  const [users, setUsers] = useState([
    {
      id: "Travo034H",
      companyName: "Flynext",
      email: "info@flynext.com",
      contactPerson: "Ansar Mannath",
      contactNumber: "+91 9995 90 9132",
      status: "Active",
      subscriptionEmail: "info@flynext.com",
    },
    {
      id: "Travo034H",
      companyName: "Flynext",
      email: "info@flynext.com",
      contactPerson: "Ansar Mannath",
      contactNumber: "+91 9995 90 9132",
      status: "Inactive",
      subscriptionEmail: "info@flynext.com",
    },
  ]);

  return (
    
      <div className="bg-white manageusercontainer">
        <h2 className="manageuserhead">Manage User</h2>

        <div className="dividerbottom"></div>

        <div className="userslists">
          {users.map((user) => (
            <div
              key={user.id}
              className="border-b border-gray-100 lg:p-5"
            >
              <div className="grid grid-cols-4 gap-9">
                <div>
                  <p className="listhead">ID</p>
                  <p className="listdata">{user.id}</p>
                </div>
                <div>
                  <p className="listhead">Company Name</p>
                  <p className="listdata">{user.companyName}</p>
                </div>
                <div>
                  <p className="listhead">Email</p>
                  <p className="listdata">
                    {user.email}
                  </p>
                </div>
                <div>
                  <p className="listhead">Contact Person</p>
                  <p className="listdata">{user.contactPerson}</p>
                </div>
                <div>
                  <p className="listhead">Contact Number</p>
                  <p className="listdata">{user.contactNumber}</p>
                </div>
                <div>
                  <p className="listhead">Status</p>
                  <span
                    className={`userstatus ${
                      user.status === "Active"
                        ? "text-[#15B085] bg-green-100"
                        : "text-red-700 bg-red-100"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
                <div>
                  <p className="listhead">Manage Subscription</p>
                  <p className="listdata">
                    {user.subscriptionEmail}
                  </p>
                </div>
                <div className="flex space-x-10">
                  <button className="listhead justify-items-center">
                    Edit
                    <img src={editicon} alt="" />
                    </button>
                  <button className="listhead justify-items-center">
                    Delete
                    <img src={deleteicon} alt="" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default ManageUser;
