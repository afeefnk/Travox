import React, { useState } from "react";
import "./adminmanagement.css";
import addAdmin from "../../assets/images/AdminManagement/addAdmin.svg";
import { FaEdit, FaTrash } from "react-icons/fa";
import editicon from "../../assets/images/AdminManagement/editicon.svg";
import deleteicon from "../../assets/images/AdminManagement/deleteicon.svg";

const AdminManagement = () => {
  const [isAddAdmin, setIsAddAdmin] = useState(true);

  const [admins, setAdmins] = useState([
    { name: "Shihabudheen", status: true },
    { name: "Ansar", status: true },
    { name: "Rasheed", status: true },
  ]);

  const handleToggleStatus = (index) => {
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin, i) =>
        i === index ? { ...admin, status: !admin.status } : admin
      )
    );
  };

  const handleEdit = (index) => {
    const adminToEdit = admins[index];
    console.log("Edit admin:", adminToEdit);
  };

  const handleDelete = (index) => {
    setAdmins((prevAdmins) => prevAdmins.filter((_, i) => i !== index));
  };

  return (
    <div className="adminmanage">
      <h1 className="adminhead">Admin Management</h1>

      <div className="addmanagebuttons">
        <button
          onClick={() => setIsAddAdmin(true)}
          className={`adminbtns ${
            isAddAdmin
              ? "text-[#254396] border-b-2 border-b-[#254396] border-t-2 border-t-transparent border-r-transparent border-l-transparent text-base font-switzerSM"
              : "text-[#ACACAC] duration-200 border-2 border-transparent text-sm font-switzerR"
          }`}
        >
          <div className="flex items-center justify-center">
            {isAddAdmin && (
              <img src={addAdmin} alt="Add Admin Icon" className="mr-2" />
            )}
            Add Admin
          </div>
        </button>

        <button
          onClick={() => setIsAddAdmin(false)}
          className={`adminbtns ${
            !isAddAdmin
              ? "text-[#254396] border-b-2 border-b-[#254396] border-t-2 border-t-transparent border-r-transparent border-l-transparent text-base font-switzerSM"
              : "text-[#ACACAC] duration-200 border-2 border-transparent text-sm font-switzerR"
          }`}
        >
          <div className="flex items-center justify-center">
            {!isAddAdmin && (
              <img src={addAdmin} alt="Manage Admin Icon" className="mr-2" />
            )}
            Manage Admin
          </div>
        </button>
      </div>

      {isAddAdmin ? (
        <form className="grid-cols-1 md:grid-cols-2 addadminform">
          <div>
            <label className="addadminlabels" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="inputbox"
            />
          </div>

          <div>
            <label className="addadminlabels" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="inputbox"
            />
          </div>

          <div>
            <label className="addadminlabels" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your number"
              className="inputbox"
            />
          </div>

          <div>
            <label className="addadminlabels" htmlFor="username">
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="inputbox"
            />
          </div>

          <div>
            <label className="addadminlabels" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="inputbox"
            />
          </div>

          <div className="flex mt-7">
            <button
              type="submit"
              className="bg-[#254396] text-white rounded-md hover:bg-[#233a78] duration-100 submitbtn"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className=" bg-white">
            <table className="min-w-full  divide-[#EEEFFF] text-sm">
              <thead className="manageadminhead">
                <tr>
                  <th
                    scope="col"
                    className="text-left admintablehaed px-5"
                  >
                    Admin Name
                  </th>
                  <th
                    scope="col"
                    className="admintablehaed w-[10%]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="admintablehaed w-[10%]"
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="admintablehaed admindeletebtn"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEEFFF]">
                {admins.map((admin, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 adminnamecol">{admin.name}</td>
                    <td className="py-4 text-center">
                      <button
                        className={`items-center rounded-full p-1 toggle ${
                          admin.status ? "bg-[#1BC194]" : "bg-[#F36643]"
                        }`}
                        onClick={() => handleToggleStatus(index)}
                      >
                        <div
                          className={`bg-white rounded-full transform transition-transform bar ${
                            admin.status ? "translate-x-0" : "translate-x-2"
                          }`}
                        />
                      </button>
                    </td>
                    <td className="py-4 text-center">
                      <button
                        type="button"
                        onClick={() => handleEdit(index)}
                      >
                        <img src={editicon} alt="" />
                      </button>
                    </td>
                    <td className="py-4 text-center admindeletebtn">
                      <button
                        type="button"
                        onClick={() => handleDelete(index)}
                      >
                       <img src={deleteicon} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagement;
