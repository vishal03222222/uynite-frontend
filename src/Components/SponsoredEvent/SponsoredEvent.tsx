// import React, { useState, useEffect } from "react";
// import BreadcrumbsWithFilter from "../Breadcrumbs";
// import SidebarMenu from "../SidebarMenu";
// import EventCard from "../EventCard";
// import { useNavigate } from "react-router-dom";
// import SponsoredEventForm from "./CreateEvent";

// const SponsoredEvent: React.FC = () => {
//   const breadcrumbLinks = [
//     { label: "Dashboard", path: "/" },
//     { label: "Sponsored Event", path: "/sponsored-event" },
//   ];

//   const [activeMenu, setActiveMenu] = useState("Create Event and list");
//   const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [visibleEvents, setVisibleEvents] = useState<{ title: string; location: string; category: string }[]>([]);

//   const allEvents = [
//     { title: "Cute Baby Contest", location: "All Countries", category: "Up Comming Events" },
//     { title: "Best Photography Contest", location: "Japan", category: "On Going Event" },
//     { title: "Beauty Contest", location: "2+ Countries", category: "Completed Events" },
//     { title: "Music Fest 2024", location: "USA", category: "Up Comming Events" },
//     { title: "Tech Innovation Awards", location: "India", category: "Completed Events" },
//     { title: "Startup Pitch Fest", location: "Europe", category: "On Going Event" },
//   ];

//   useEffect(() => {
//     if (activeMenu === "Create Event and list") {
//       setVisibleEvents(allEvents);
//     } else {
//       const filtered = allEvents.filter(event => event.category === activeMenu);
//       setVisibleEvents(filtered);
//     }
//   }, [activeMenu]);

//   const handleMenuClick = (menuLabel: string) => {
//     setActiveMenu(menuLabel);
//     setSelectedEvent(null);
//   };
//   const navigate = useNavigate()
//   const menuItems = [
//     { label: "Create Event and list", onClick: () => handleMenuClick("Create Event and list"), active: activeMenu === "Create Event and list" },
//     { label: "Up Comming Events", onClick: () => handleMenuClick("Up Comming Events"), active: activeMenu === "Up Comming Events" },
//     { label: "On Going Event", onClick: () => handleMenuClick("On Going Event"), active: activeMenu === "On Going Event" },
//     { label: "Completed Events", onClick: () => handleMenuClick("Completed Events"), active: activeMenu === "Completed Events" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <BreadcrumbsWithFilter links={breadcrumbLinks} />
//   {/* <SponsoredEventForm allEvents ={allEvents}/> */}

    

//       <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
//         {/* Sidebar */}
      
//         <div className="col-span-1">
       
//           <SidebarMenu menuItems={menuItems} />
          
//         </div>
        

        

//         {/* Event List or Event Detail View */}
//         <div className="col-span-2 bg-white rounded shadow p-6">
//         <button className="text-xl mb-4 hover:text-blue-500 transition width: 1000px;" onClick={() => navigate(-1)}>
//           &#8592;
//         </button>
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">{activeMenu}</h2>
//             {activeMenu === "Create Event and list" && (
//               <button 
//                 className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
//                 onClick={() => navigate("/create-event")}        

                
              
//                 title="Click to create a new event"
//            >
//                 Create Event
//               </button>
//             )}
//           </div>

//           {visibleEvents.length > 0 ? (
//             visibleEvents.map((event, index) => (
//               <EventCard 
//                 key={index} 
//                 title={event.title} 
//                 location={event.location} 
//                 onClick={() => setSelectedEvent(event.title)} 
//               />
//             ))
//           ) : (
//             <p className="text-gray-600 text-center">No events available.</p>
//           )}
//         </div>
//       </div>

//       Event Creation Modal
//        {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
//             <input 
//               type="text" 
//               placeholder="Event Name" 
//               className="w-full p-2 border rounded mb-3"
//             />
//             <button 
//               className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Save Event
//             </button>
//             <button 
//               className="ml-2 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
 
// };



// export default SponsoredEvent;
import React, { useState, useEffect } from "react";
import BreadcrumbsWithFilter from "../Breadcrumbs";
import SidebarMenu from "../SidebarMenu";
import EventCard from "../EventCard";
import { useNavigate } from "react-router-dom";
import SponsoredEventForm from "./CreateEvent";

const SponsoredEvent: React.FC = () => {
  const breadcrumbLinks = [
    { label: "Dashboard", path: "/" },
    { label: "Sponsored Event", path: "/sponsored-event" },
  ];
  const [upcomingevent, setupcomingevent] = useState([]);


  const [activeMenu, setActiveMenu] = useState("Create Event and list");

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  //const [isModalOpen, setIsModalOpen] = useState(true);
  const [visibleEvents, setVisibleEvents] = useState<{ title: string; location: string; category: string }[]>([]);
  const [showForm, setShowForm] = useState(false);

  const allEvents = [
    { title: "Cute Baby Contest", location: "All Countries", category: "Up Comming Events" },
    { title: "Best Photography Contest", location: "Japan", category: "On Going Event" },
    { title: "Beauty Contest", location: "2+ Countries", category: "Completed Events" },
    { title: "Music Fest 2024", location: "USA", category: "Up Comming Events" },
    { title: "Tech Innovation Awards", location: "India", category: "Completed Events" },
    { title: "Startup Pitch Fest", location: "Europe", category: "On Going Event" },
  ];

  useEffect(() => {
    if (activeMenu === "Create Event and list") {
      setVisibleEvents(allEvents);
    } else {
      const filtered = allEvents.filter(event => event.category === activeMenu);
      setVisibleEvents(filtered);
    }
  }, [activeMenu]);

  const handleMenuClick = (menuLabel: string) => {
    setActiveMenu(menuLabel);
    setSelectedEvent(null);
  };

  const navigate = useNavigate();

  const menuItems = [
    { label: "Create Event and list", onClick: () => handleMenuClick("Create Event and list"), active: activeMenu === "Create Event and list" },
    { label: "Up Comming Events", onClick: () => handleMenuClick("Up Comming Events"), active: activeMenu === "Up Comming Events" },
    { label: "On Going Event", onClick: () => handleMenuClick("On Going Event"), active: activeMenu === "On Going Event" },
    { label: "Completed Events", onClick: () => handleMenuClick("Completed Events"), active: activeMenu === "Completed Events" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <BreadcrumbsWithFilter links={breadcrumbLinks} />

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar */}
        <div className="col-span-1">
          <SidebarMenu menuItems={menuItems} />
        </div>

        {/* Event List or Event Detail View */}
        <div className="col-span-2 bg-white rounded shadow p-6">
          <button className="text-xl mb-4 hover:text-blue-500 transition width: 1000px;" onClick={() => navigate(-1)}>
            &#8592;
          </button>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{activeMenu}</h2>
            {activeMenu === "Create Event and list" && (
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                onClick={() => setShowForm(true)}        
                title="Click to create a new event"
              >
                Create Event
              </button>
            )}
          </div>

          {showForm ? (
            <SponsoredEventForm allEvents={allEvents} setShowForm={setShowForm}  />
          ) : (
            visibleEvents.length > 0 ? (
              visibleEvents.map((event, index) => <EventCard 
               key={index} 
               title={event.title} 
               location={event.location} 
               onClick={() => setSelectedEvent(event.title)} 
            />)
            ) : (
              <p className="text-gray-600 text-center">No events available.</p>
            )
          )}
        </div>
      </div>

      {/* Event Creation Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
            <input 
              type="text" 
              placeholder="Event Name" 
              className="w-full p-2 border rounded mb-3"
            />
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Save Event
            </button>
            <button 
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

// const SponsoredEventForm: React.FC<{ allEvents: any[], setShowForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ allEvents, setShowForm }) => {
//   const navigate = useNavigate();

//   // ---- Form states ----
//   const [eventName, setEventName] = useState("");
//   const [country, setCountry] = useState("");
//   const [scheduleType, setScheduleType] = useState("");
//   const [mediaType, setMediaType] = useState("Video"); // default selection
//   const [rootPoster1, setRootPoster1] = useState<string | null>(null);
//   const [rootPoster2, setRootPoster2] = useState<string | null>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [termsImage, setTermsImage] = useState<string | null>(null);

//   // ---- Submission states ----
//   const [submittedData, setSubmittedData] = useState<any | null>(null);
//   const [isEditing, setIsEditing] = useState(true); 

//   const handleImageChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setImage: React.Dispatch<React.SetStateAction<string | null>>
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const dataToSubmit = {
//       eventName,
//       country,
//       scheduleType,
//       mediaType,
//       rootPoster1,
//       rootPoster2,
//       startDate,
//       endDate,
//       termsImage,
//     };

//     setSubmittedData(dataToSubmit);
//     allEvents.push(dataToSubmit);
//     console.log(allEvents);
//     setIsEditing(false); // Hide the form, show submitted data
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg lg:grid-cols-0 shadow-lg border border-gray-200">
//       {/* Back Button */}
//       <button
//         className="text-xl mb-4 hover:text-blue-500 transition"
//         onClick={() => setShowForm(false)}
//       >
//         &#8592;
//       </button>

//       {/* Title */}
//       <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
//         Event Type: <span className="text-blue-500">Sponsored Event</span>
//       </h2>

//       {/* If data is submitted and not editing, show the summary/details */}
//       {submittedData && !isEditing && (
//         <div className="mb-6 border border-gray-300 rounded-md p-4 bg-gray-50">
//           <h3 className="font-bold text-lg text-gray-700 mb-2">
//             Submitted Event Data
//           </h3>
//           <p>
//             <strong>Event Name:</strong> {submittedData.eventName}
//           </p>
//           <p>
//             <strong>Selected Country:</strong> {submittedData.country}
//           </p>
//           <p>
//             <strong>Schedule Type:</strong> {submittedData.scheduleType}
//           </p>
//           <p>
//             <strong>Media Type:</strong> {submittedData.mediaType}
//           </p>
//           <p>
//             <strong>Start Date/Time:</strong> {submittedData.startDate}
//           </p>
//           <p>
//             <strong>End Date/Time:</strong> {submittedData.endDate}
//           </p>

//           {/* Root Poster 1 */}
//           <div className="mt-2">
//             <strong>Root Poster 1:</strong>
//             {submittedData.rootPoster1 && (
//               <img
//                 src={submittedData.rootPoster1}
//                 alt="Root Poster 1"
//                 className="mt-2 h-24 w-24 object-cover border border-gray-300"
//               />
//             )}
//           </div>

//           {/* Root Poster 2 */}
//           <div className="mt-2">
//             <strong>Root Poster 2:</strong>
//             {submittedData.rootPoster2 && (
//               <img
//                 src={submittedData.rootPoster2}
//                 alt="Root Poster 2"
//                 className="mt-2 h-24 w-24 object-cover border border-gray-300"
//               />
//             )}
//           </div>

//           {/* Terms & Conditions Image */}
//           <div className="mt-2">
//             <strong>Terms & Conditions Poster:</strong>
//             {submittedData.termsImage && (
//               <img
//                 src={submittedData.termsImage}
//                 alt="Terms & Conditions Poster"
//                 className="mt-2 h-24 w-24 object-cover border border-gray-300"
//               />
//             )}
//           </div>

//           {/* Edit Button */}
//           <button
//             type="button"
//             className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
//             onClick={handleEdit}
//           >
//             Edit
//           </button>
//         </div>
//       )}

//       {/* Show the form if we are in editing mode */}
//       {isEditing && (
//         <form onSubmit={handleSubmit}>
//           {/* Event Name */}
//           <input
//             type="text"
//             placeholder="Event Name"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//           />

//           {/* Country */}
//           <select
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option>Select Country</option>
//             <option>United States</option>
//             <option>Canada</option>
//             <option>United Kingdom</option>
//             <option>Australia</option>
//             <option>India</option>
//             <option>Germany</option>
//             <option>France</option>
//             <option>Japan</option>
//             <option>Brazil</option>
//             <option>South Africa</option>
//           </select>

//           {/* Schedule Type */}
//           <select
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
//             value={scheduleType}
//             onChange={(e) => setScheduleType(e.target.value)}
//           >
//             <option>Select Schedule Type</option>
//             <option>Create Into List</option>
//             <option>Up Coming Event</option>
//             <option>On-Going Event</option>
//           </select>

//           {/* Media Type */}
//           <select
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
//             value={mediaType}
//             onChange={(e) => setMediaType(e.target.value)}
//           >
//             <option>Video</option>
//             {/* Add more media types if needed */}
//           </select>

//           {/* Root Poster 1 */}
//           <div className="mb-4">
//             <p className="font-semibold text-gray-700">
//               Posters Display in Root (1)
//             </p>
//             <div className="w-full h-32 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition">
//               <label
//                 htmlFor="rootPoster1-upload"
//                 className="w-full h-full flex items-center justify-center"
//               >
//                 Add Image
//                 <input
//                   id="rootPoster1-upload"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => handleImageChange(e, setRootPoster1)}
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Root Poster 2 */}
//           <div className="mb-4">
//             <p className="font-semibold text-gray-700">
//               Posters Display in Root (2)
//             </p>
//             <div className="w-full h-32 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition">
//               <label
//                 htmlFor="rootPoster2-upload"
//                 className="w-full h-full flex items-center justify-center"
//               >
//                 Add Image
//                 <input
//                   id="rootPoster2-upload"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => handleImageChange(e, setRootPoster2)}
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Date Range */}
//           <div className="mb-4 flex items-center space-x-2">
//             <input
//               type="datetime-local"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//             <span className="text-gray-600">To</span>
//             <input
//               type="datetime-local"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>

//           {/* Terms & Conditions Image */}
//           <div className="mb-4">
//             <p className="font-semibold text-gray-700">Terms & Conditions</p>
//             <div className="w-full h-32 flex items-center justify-center border border-gray-300 width-1000px rounded-lg bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition">
//               <label
//                 htmlFor="termsImage-upload"
//                 className="w-full h-full flex items-center justify-center"
//               >
//                 Add Image
//                 <input
//                   id="termsImage-upload"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => handleImageChange(e, setTermsImage)}
//                 />
//               </label>
//             </div>
//           </div>

//           {/* Submit & Cancel */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-600 transition mb-2"
//           >
//             {submittedData ? "Update Event" : "Create Event"}
//           </button>

//           <button
//             type="button"
//             className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg shadow-md hover:bg-gray-400 transition"
//             onClick={() => setShowForm(false)}
//           >
//             Cancel
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

export default SponsoredEvent;