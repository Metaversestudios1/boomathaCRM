import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdEye } from "react-icons/io";
const Managers = () => {
  const [managers, setManagers] = useState([]);
  const [noData, setNoData] = useState(false);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const fetchData = async () => {
    setLoader(true);

    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/getAlluser?page=${page}&limit=${pageSize}&search=${search}`
      );
      const response = await res.json();
console.log(response)
      if (response.success) {
        setNoData(false);
        if (response.result.length === 0) {
          setNoData(true);
        }
        setManagers(response.result);
        setCount(response.count);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearch(value);
      setPage(1);
    }
  };

  const startIndex = (page - 1) * pageSize;

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
        <div className="text-2xl font-bold mx-2 my-8 px-4">Managers List</div>
      </div>
      <div className="flex justify-between">
        <NavLink to="/managers/addmanager">
          <button className="bg-[#16144b] text-white p-3 m-5 text-sm rounded-lg">
            Add New
          </button>
        </NavLink>
        <div className={`flex items-center`}>
          <input
            placeholder="Search "
            type="text"
            name="search"
            className={`text-black border-[1px] rounded-lg bg-white p-2 m-5`}
          />
        </div>
      </div>
      {loader && (
        <div className="absolute h-full w-full  flex justify-center items-center">
          <div
            className=" flex justify-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {managers.length !== 0 && (
        <div className="relative overflow-x-auto m-5 mb-0">
          <table className="w-full text-sm text-left rtl:text-right border-2 border-gray-300">
            <thead className="text-xs uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                  Sr no.
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                  Full name
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                  Agents
                </th>
                <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {managers.map((item, index) => {
                return (
                  <tr className="bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
                    >
                      {startIndex + index + 1}
                    </th>

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-gray-300"
                    >
                      {item?.username}
                    </th>
                    <td className="px-6 py-4 border-2 border-gray-300">
                      {item?.contact}
                    </td>
                    <td className="px-6 py-4 border-2 border-gray-300">
                      {item?.email}
                    </td>
                    <td className="px-6 py-4 border-2 border-gray-300">
                      <NavLink to="/viewagents/3245435">
                        <div className="text-white  bg-blue-900 rounded-lg px-8 py-2">
                          View AGENTS 
                        </div>
                      </NavLink>
                    </td>
                    <td className=" p-5   border-2  border-gray-300">
                      <div className="flex items-center">
                        <NavLink to={`/managers/viewmanager/${item?._id}`}>
                          <IoMdEye className="text-2xl cursor-pointer text-blue-900" />
                        </NavLink>
                        <NavLink to={`/managers/editmanager/${item?._id}`}>
                          <CiEdit className="text-2xl cursor-pointer text-blue-900" />
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {noData && (
        <div className="text-center text-xl">
          Currently! There are no managers in the storage.
        </div>
      )}
      {managers.length !== 0 && (
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
      )}
    </div>
  );
};

export default Managers;
