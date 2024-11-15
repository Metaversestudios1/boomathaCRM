import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import "jquery-validation";
import { FaAngleDown } from "react-icons/fa6";

const AddManagers = () => {
  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
    employeeType: "",
    contactNumber: "",
    licenseNumber: "",
    experienceYears: "",
  };
  const [data, setData] = useState(initialState);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/getAllCategoryWithoutPagination`
    );
    const response = await res.json();
    if (response.success) {
      setCategories(response.result);
    }
  };
  const validateEmployeeForm = () => {
    $.validator.addMethod(
      "validPhone",
      function (value, element) {
        return this.optional(element) || /^\d{10}$/.test(value);
      },
      "Please enter a valid 10-digit phone number."
    );

    // Initialize jQuery validation
    $("#employeeform").validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
        },
        contactNumber: {
          required: true,
          validPhone: true,
        },
        employeeType: {
          required: true,
        },
        licenseNumber: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Please enter name",
        },
        email: {
          required: "Please enter email",
          email: "Please enter a valid email address",
        },
        password: {
          required: "Please enter password",
        },
        employeeType: {
          required: "Please select employee type",
        },
        contactNumbe: {
          required: "Please enter contact details",
          validPhone: "Phone number must be exactly 10 digits",
        },
        licenseNumber: {
          required: "Please enter license number",
        },
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.addClass("invalid-feedback");
        error.insertAfter(element);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass("is-invalid").addClass("is-valid");
      },
    });

    // Return validation status
    return $("#employeeform").valid();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmployeeForm()) {
      //setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoader(true);

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/insertEmployee`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const response = await res.json();
      if (response.success) {
        toast.success("New employee is added Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/employees");
        }, 1500);
      } else {
        setLoader(false);
        setError(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex items-center ">
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
          <IoIosArrowRoundBack
            onClick={handleGoBack}
            className="bg-[#16144b] text-white rounded-sm text-[40px] cursor-pointer shadow-xl ml-5"
          />
        </div>
        <div className="flex items-center">
          <div className="text-2xl font-bold mx-2 my-8 px-4">Add Manager</div>
        </div>
      </div>
      {loader ? (
        <div className="absolute w-[80%] h-[40%] flex justify-center items-center">
          <div
            className=" flex justify-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="w-[70%] m-auto my-10">
          <form id="employeeform">
            <div className="grid gap-6 mb-6 md:grid-cols-2 items-center">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Full Name<span className="text-red-900 text-lg ">&#x2a;</span>
                </label>
                <input
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Contact number
                  <span className="text-red-900 text-lg ">&#x2a;</span>
                </label>
                <input
                  name="contactNumber"
                  value={data.contactNumber}
                  onChange={handleChange}
                  type="text"
                  id="contact"
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
                  placeholder="123-45-678"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Email address
                  <span className="text-red-900 text-lg ">&#x2a;</span>
                </label>
                <input
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Password<span className="text-red-900 text-lg ">&#x2a;</span>
                </label>
                <input
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block w-full p-2.5 "
                  placeholder="•••••••••"
                  required
                />
              </div>

              <div>
              <label
                htmlFor="projects_assigned"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
               Agents assign
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={()=>{setDropdownOpen(!dropdownOpen)}}
                  // onBlur={handleDropdownBlur}
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black w-full p-2.5 flex justify-between items-center"
                >
                  Select agents<FaAngleDown className="text-end" />
                </button>
                {dropdownOpen && (<div className="absolute top-full left-0 bg-white border border-gray-300 rounded-sm shadow-lg w-full">
                 
                    <div  className="p-2  bg-gray-200 text-gray-900 text-sm  focus:ring-blue-500 focus:border-black block w-full" onMouseDown={(e) => e.preventDefault()}>
                      <input
                        type="checkbox"
                        id={`agent-1`}
                        value=""
                        // checked={data.currentInventory.includes(item._id)}
                        // onChange={() => handleCheckboxChange(item._id)}
                        className="mr-2"
                      />
                      <label htmlFor={`agent-1`} className="text-gray-900 text-sm">
                        agent 1
                      </label>
                    </div>
                    <div  className="p-2  bg-gray-200 text-gray-900 text-sm  focus:ring-blue-500 focus:border-black block w-full" onMouseDown={(e) => e.preventDefault()}>
                      <input
                        type="checkbox"
                        id={`agent-2`}
                        value=""
                        // checked={data.currentInventory.includes(item._id)}
                        // onChange={() => handleCheckboxChange(item._id)}
                        className="mr-2"
                      />
                      <label htmlFor={`agent-2`} className="text-gray-900 text-sm">
                        agent 2
                      </label>
                    </div>
                    <div  className="p-2  bg-gray-200 text-gray-900 text-sm  focus:ring-blue-500 focus:border-black block w-full" onMouseDown={(e) => e.preventDefault()}>
                      <input
                        type="checkbox"
                        id={`agent-3`}
                        value=""
                        // checked={data.currentInventory.includes(item._id)}
                        // onChange={() => handleCheckboxChange(item._id)}
                        className="mr-2"
                      />
                      <label htmlFor={`agent-3`} className="text-gray-900 text-sm">
                        agent 3
                      </label>
                    </div>
                </div>)}
              </div>
              </div>
              
         
            </div>

            {error && <p className="text-red-900  text-[17px] mb-5">{error}</p>}
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-[#16144b] hover:bg-[#16144bea] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              ADD
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddManagers;
