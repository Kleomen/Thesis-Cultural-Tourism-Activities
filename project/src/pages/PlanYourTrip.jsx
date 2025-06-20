// src/pages/PlanYourTripPage.jsx
import React, { useState, useEffect } from "react";
import { events } from "./Activities"; // Importing the events data

const PlanYourTripPage = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  const onSignUp = (event) => {
    setSelectedEvents((prevSelected) => {      
      if (prevSelected.every((e) => e.title !== event.title)) {
        return [...prevSelected, event];
      }
      return prevSelected;
    });
  };

  const onSignOut = (event) => {
    setSelectedEvents((prevSelected) =>
      prevSelected.filter((e) => e.title !== event.title)
    );
  }


  return (
      <div className="max-w-6xl mx-auto px-4 py-8">
         <h1 className="section-header">Your Trip Plan</h1>      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">         
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden w-64 mx-auto flex flex-col h-80">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-32 object-cover"
            />
          
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.location}</p>
              </div>
          
              <button
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 mt-4 self-start"
                onClick={() => onSignUp(event)}
              >
                Sign Up
              </button>
            </div>
          </div>
          ))}
        </div>
    
        <div className="p-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Event</th>
                <th className="border border-gray-300 p-2">Location</th>
                <th className="border border-gray-300 p-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {selectedEvents.sort((a, b) => new Date(a.date) - new Date(b.date)).map((event, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2 text-center">{event.title}</td>
                    <td className="border border-gray-300 p-2 text-center">{event.location}</td>
                    <td className="border border-gray-300 p-2 text-center">{event.date}</td>
                    <td className="border border-gray-300 p-2 text-center">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => onSignOut(event)}
                    >
                      Sign Out
                    </button>
                  </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PlanYourTripPage;
