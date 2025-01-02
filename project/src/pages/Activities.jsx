import React from 'react';

const events = [
  {
    title: "Kick Cancer Fundraiser",
    date: "Tue, Feb 15",
    location: "500 Terry A Francois Blvd",
    image: "https://via.placeholder.com/300x200", // Replace with your event image URL
  },
  {
    title: "San Francisco Half Marathon",
    date: "Sat, Apr 22",
    location: "500 Terry A Francois Blvd",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Charity 10k Fun Run",
    date: "Sat, May 7",
    location: "Mountain View",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Nevada Country Run",
    date: "Mon, Aug 15",
    location: "Mountain View",
    image: "https://via.placeholder.com/300x200",
  },
];

const Activities = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Upcoming Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {events.map((event, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-600">{event.location}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Activities;
