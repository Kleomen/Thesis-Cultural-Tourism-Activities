import React from 'react';
import chaniaSummerFest from '../photos/chania-summer-festival.jpg'
import cretanDietFest from '../photos/cretan-diet-festival.jpg'
import discoverBeaches from '../photos/discover-our-beaches.jpg'
import groupCooking from '../photos/group-cooking.jpg'
import pottery from '../photos/pottery.png'
import tripAxos from '../photos/trip-axos-village.jpg'

const events = [
  {
    title: "Chania Summer Festival",
    date: "Tue, Feb 15",
    location: "Chania outskirts",
    image: chaniaSummerFest,
  },
  {
    title: "Cretan Diet Festival",
    date: "Sat, Apr 22",
    location: "Herakleion",
    image: cretanDietFest,
  },
  {
    title: "Discover Cretan Beaches",
    date: "Sat, May 7",
    location: "Chania Elafonisi",
    image: discoverBeaches,
  },
  {
    title: "Group Cooking With Elderly",
    date: "Mon, Aug 15",
    location: "Costelos Village",
    image: groupCooking,
  },
  {
    title: "Pottery Class",
    date: "Mon, Aug 22",
    location: "Rethymno",
    image: pottery,
  },
  {
    title: "Magical Trip on Axios",
    date: "Mon, Aug 27",
    location: "Axios",
    image: tripAxos,
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
            {/* <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Sign Up
            </button> */}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Activities;
