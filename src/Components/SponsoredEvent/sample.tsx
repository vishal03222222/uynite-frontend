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
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<{ title: string; location: string; category: string }[]>([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

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
      setVisibleEvents(allEvents.filter(event => event.category === activeMenu));
    }
  }, [activeMenu, allEvents]);

  const handleMenuClick = (menuLabel: string) => {
    setActiveMenu(menuLabel);
    setSelectedEvent(null);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const newCategory = event.target.value;
    
    if (newCategory === "On Going Event") {
      const confirmChange = window.confirm("Are you sure you want to change the category to On Going Event?");
      if (!confirmChange) return;
    }

    setAllEvents((prevEvents) =>
      prevEvents.map((ev, i) => (i === index ? { ...ev, category: newCategory } : ev))
    );
  };

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
        <div className="col-span-1">
          <SidebarMenu menuItems={menuItems} />
        </div>
        <div className="col-span-2 bg-white rounded shadow p-6">
          <button className="text-xl mb-4 hover:text-blue-500 transition" onClick={() => navigate(-1)}>
            &#8592;
          </button>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{activeMenu}</h2>
          </div>
          {visibleEvents.length > 0 ? (
            visibleEvents.map((event, index) => (
              <EventCard 
                key={index} 
                title={event.title} 
                location={event.location} 
                onClick={() => setSelectedEvent(event)}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center">No events available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsoredEvent;
