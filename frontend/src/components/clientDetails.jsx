import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdEye } from "react-icons/io";
const ClientDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [noData, setNoData] = useState(false);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     fetchData();
  //   }, [page, search]);

  //   const fetchData = async () => {
  //     setLoader(true);

  //     try {
  //       const res = await fetch(
  //         `${
  //           import.meta.env.VITE_BACKEND_URL
  //         }/api/getAllEmployees?page=${page}&limit=${pageSize}&search=${search}`
  //       );
  //       const response = await res.json();

  //       if (response.success) {
  //         setNoData(false);
  //         if (response.result.length === 0) {
  //           setNoData(true);
  //         }

  //         // Modify data to include role name for each employee
  //         const modifiedData = await Promise.all(
  //           response.result.map(async (employee) => {
  //             let id = employee?.employeeType;
  //             const roleRes = await fetch(
  //               `${import.meta.env.VITE_BACKEND_URL}/api/getSingleCategory/${id}`
  //             );
  //             const roleData = await roleRes.json();
  //             return {
  //               ...employee,
  //               employeeType: roleData?.result?.role || "Unknown", // add role name or default to "Unknown"
  //             };
  //           })
  //         );

  //         setEmployees(modifiedData);
  //         setCount(response.count);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoader(false);
  //     }
  //   };

  //   const handleDelete = async (e, id) => {
  //     e.preventDefault();
  //     const permissionOfDelete = window.confirm(
  //       "Are you sure, you want to delete the employee"
  //     );
  //     if (permissionOfDelete) {
  //       let employeeOne = employees.length === 1;
  //       if (count === 1) {
  //         employeeOne = false;
  //       }
  //       const res = await fetch(
  //         `${import.meta.env.VITE_BACKEND_URL}/api/deleteEmployee`,
  //         {
  //           method: "DELETE",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ id }),
  //         }
  //       );
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const response = await res.json();
  //       if (response.success) {
  //         toast.success("Employee is deleted Successfully!", {
  //           position: "top-right",
  //           autoClose: 1000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //         if (employeeOne) {
  //           setPage(page - 1);
  //         } else {
  //           fetchData();
  //         }
  //       }
  //     }
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     if (name === "search") {
  //       setSearch(value);
  //       setPage(1);
  //     }
  //   };

  //   const startIndex = (page - 1) * pageSize;

  return (
    <div className="relative">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex items-center">
        <div className="text-2xl font-bold mx-2 my-8 px-4">Property List</div>
      </div>
      <div className="flex justify-between">
        <div className={`flex items-center`}>
          <input
            placeholder="Search "
            type="text"
            name="search"
            className={`text-black border-[1px] rounded-lg bg-white p-2 m-5`}
          />
        </div>
      </div>

      <div className="relative overflow-x-auto m-5 mb-0">
        <table className="w-full text-sm text-left rtl:text-right border-2 border-gray-300">
          <thead className="text-xs uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                Sr no.
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                Property Name
              </th> <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                Client Name
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                Any documents
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
               Message
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
               Description
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
               Loan Status
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
               Action
              </th>
             
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                1
              </th>

              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                Property 1
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                test client 1
              </th>
              <td className="px-6 py-4 border-2 border-gray-300">NA</td>
              <td className="px-6 py-4 border-2 border-gray-300">Lorem ipsum</td>
              <td className="px-6 py-4 border-2 border-gray-300">test description</td>

              <td className="px-6 py-4 border-2 border-gray-300">Approved</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                2
              </th>

              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                Property 3
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                test client 3
              </th>
              <td className="px-6 py-4 border-2 border-gray-300">NA</td>
              <td className="px-6 py-4 border-2 border-gray-300">Lorem ipsum</td>
              <td className="px-6 py-4 border-2 border-gray-300">test description</td>

              <td className="px-6 py-4 border-2 border-gray-300">Pending</td>
              <td className=" p-5   border-2  border-gray-300">
                   <div className="flex items-center">
                                        
                       <NavLink to={`/editclientdetail/${item?._id}`}>
                         <CiEdit className="text-2xl cursor-pointer text-green-900" />
                      </NavLink>
                      </div>
                       </td>
            </tr> <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                2
              </th>

              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                Property 3
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
              >
                test client 3
              </th>
              <td className="px-6 py-4 border-2 border-gray-300">NA</td>
              <td className="px-6 py-4 border-2 border-gray-300">Lorem ipsum</td>
              <td className="px-6 py-4 border-2 border-gray-300">test description</td>

              <td className="px-6 py-4 border-2 border-gray-300">Rejected</td>
              <td className=" p-5   border-2  border-gray-300">
                   <div className="flex items-center">
                                        
                       <NavLink to={`/editclientdetail/${item?._id}`}>
                         <CiEdit className="text-2xl cursor-pointer text-green-900" />
                      </NavLink>
                      </div>
                       </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center my-10">
        <span className="text-sm text-black">
          Showing <span className="font-semibold text-black">1</span> to{" "}
          <span className="font-semibold text-black">5</span> of{" "}
          <span className="font-semibold text-black">{10}</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900">
            Prev
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
