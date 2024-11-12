import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewManager = () => {
  //   const userInfo = getUserFromToken();
  //   const [loader, setLoader] = useState(false);
  //   const [clients, setClients] = useState([]);
  //   const [agent, setAgent] = useState(null); // Change to object to hold agent details
  //   const [rank, setRank] = useState(null); // State to hold rank details
  //   const params = useParams();
  //   const [superiorAgent, setSuperiorAgent] = useState(null); // State for superior agent name

  //   const { id } = params;
    const navigate = useNavigate();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoader(true); // Set loader to true while fetching data
  //       try {
  //         if (userInfo.role === "client") {
  //           // Fetch client-specific data
  //           const clientRes = await fetch(
  //             `${process.env.REACT_APP_BACKEND_URL}/api/getSingleClient`,
  //             {
  //               method: "POST",
  //               headers: { "Content-Type": "application/json" },
  //               body: JSON.stringify({ id: userInfo.id }), // Send client ID to fetch specific client
  //             }
  //           );
  //           const clientData = await clientRes.json();
  //           if (clientData.success) {
  //             setClients(clientData.result); // Set client data in the same state (to avoid changing too much code)
  //           }
  //         } else if (userInfo.role === "agent") {
  //           // Fetch agent-specific data
  //           const [agentRes] = await Promise.all([
  //             fetch(`${process.env.REACT_APP_BACKEND_URL}/api/getSingleAgent`, {
  //               method: "POST",
  //               headers: { "Content-Type": "application/json" },
  //               body: JSON.stringify({ id: userInfo.id }), // Send agent ID to fetch specific agent
  //             }),
  //           ]);

  //           const agentData = await agentRes.json();
  //           if (agentData.success) {
  //             setAgent(agentData.result); // Set agent details

  //             // Fetch the rank details
  //             if (agentData.result.rank) {
  //               const rankRes = await fetch(
  //                 `${process.env.REACT_APP_BACKEND_URL}/api/getSingleRank`,
  //                 {
  //                   method: "POST",
  //                   headers: { "Content-Type": "application/json" },
  //                   body: JSON.stringify({ id: agentData.result.rank }), // Send rank ID to fetch specific rank
  //                 }
  //               );

  //               const rankData = await rankRes.json();
  //               if (rankData.success) setRank(rankData.result); // Set rank details

  //               if (agentData.result.superior) {
  //                 const superiorRes = await fetch(
  //                   `${process.env.REACT_APP_BACKEND_URL}/api/getSingleAgent`,
  //                   {
  //                     method: "POST",
  //                     headers: { "Content-Type": "application/json" },
  //                     body: JSON.stringify({ id: agentData.result.superior }), // Pass superior agent ID
  //                   }
  //                 );
  //                 const superiorData = await superiorRes.json();
  //                 if (superiorData.success)
  //                   setSuperiorAgent(superiorData.result.agentname); // Set superior agent's name
  //               }
  //             }
  //           }
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       } finally {
  //         setLoader(false); // Always turn loader off at the end
  //       }
  //     };

  //     fetchData();
  //   }, [id, userInfo.role]); // Make sure role is included in the dependency array

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center py-10">
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
            className="bg-[#032e4e] text-white rounded-sm text-[40px] cursor-pointer shadow-xl ml-5"
          />
        </div>
      </div>

      <div className="w-[70%] m-auto my-5">
        <form id="siteform">
          <label>
            <b className="underline">Manager profile</b>
          </label>
          <div className="grid gap-6 mb-6 md:grid-cols-2 items-center mt-3">
            <div>
              <label
                htmlFor="agentName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                <b>Manager Name</b>: John
              </label>
            </div>
            <div>
              <label
                htmlFor="agentId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                <b>Manager email</b>: john@gmail.com
              </label>
            </div>
            <div>
              <label
                htmlFor="rank"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                <b>Contact number</b>: 1234567890
              </label>
            </div>
            <div>
              <label
                htmlFor="rank"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                <b>Assigned agents</b> :agent1, agent2
              </label>
            </div>
         
            <div>
              <label
                htmlFor="clients"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                <b>Properties</b>: 4
              </label>
            </div>
           
          
          
          </div>
        </form>
      </div>
    </>
  );
};

export default ViewManager;
