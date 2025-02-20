
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
  const [activeMenu, setActiveMenu] = useState("Create Event and list");

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<{ title: string; location: string; category: string }[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [allEvents, setAllEvents] = useState([
    { title: "Cute Baby Contest", location: "All Countries", category: "Up Comming Events" },
    { title: "Best Photography Contest", location: "Japan", category: "On Going Event" },
    { title: "Beauty Contest", location: "2+ Countries", category: "Completed Events" },
    { title: "Music Fest 2024", location: "USA", category: "Up Comming Events" },
    { title: "Tech Innovation Awards", location: "India", category: "Completed Events" },
    { title: "Startup Pitch Fest", location: "Europe", category: "On Going Event" },
  ]);

  useEffect(() => {
    if (activeMenu === "Create Event and list") {
      setVisibleEvents(allEvents);
    } else {
      const filtered = allEvents.filter(event => event.category === activeMenu);
      setVisibleEvents(filtered);
    }
  }, [activeMenu, allEvents]);

  const handleMenuClick = (menuLabel: string) => {
    setActiveMenu(menuLabel);
    setSelectedEvent(null); // Reset selected event on menu change
  };

  const navigate = useNavigate();

  const menuItems = [
    { label: "Create Event and list", onClick: () => handleMenuClick("Create Event and list"), active: activeMenu === "Create Event and list" },
    { label: "Up Comming Events", onClick: () => handleMenuClick("Up Comming Events"), active: activeMenu === "Up Comming Events" },
    { label: "On Going Event", onClick: () => handleMenuClick("On Going Event"), active: activeMenu === "On Going Event" },
    { label: "Completed Events", onClick: () => handleMenuClick("Completed Events"), active: activeMenu === "Completed Events" },
  ];

  const renderEventDetails = (event: { title: string; location: string; category: string }) => (
    <div className="bg-white rounded shadow p-6">
      <button className="text-xl mb-4 hover:text-blue-500 transition" onClick={() => setSelectedEvent(null)}>
        &#8592; Back to Events
      </button>
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <div className="mt-4">
        {/* Add more event details here */}
        <p className="text-gray-600">More details about the event can be added here.</p>
      </div>
    </div>
  );

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
          <button className="text-xl mb-4 hover:text-blue-500 transition" onClick={() => navigate(-1)}>
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
            <SponsoredEventForm allEvents={allEvents} setShowForm={setShowForm} />
          ) : (
            selectedEvent ? (
              // If an event is selected, render the event details
              renderEventDetails(allEvents.find(event => event.title === selectedEvent)!)
            ) : (
              visibleEvents.length > 0 ? (
                visibleEvents.map((event, index) => (
                  <EventCard 
                    key={index} 
                    title={event.title} 
                    location={event.location} 
                    onClick={() => setSelectedEvent(event.title)} 
                  />
                ))
              ) : (
                <p className="text-gray-600 text-center">No events available.</p>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};
//export default SponsoredEvent;

export default SponsoredEvent;