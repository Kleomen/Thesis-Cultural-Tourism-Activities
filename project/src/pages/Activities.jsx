import React from 'react';
import chaniaSummerFest from '../photos/chania-summer-festival.jpg'
import cretanDietFest from '../photos/cretan-diet-festival.jpg'
import discoverBeaches from '../photos/discover-our-beaches.jpg'
import groupCooking from '../photos/group-cooking.jpg'
import pottery from '../photos/pottery.png'
import tripAxos from '../photos/trip-axos-village.jpg'
import cretanCraft from '../photos/cretan-craft.jpg'
import makeDish from '../photos/make-your-dish.jpg'
import makeJewlerly from '../photos/make-jewelry.jpg'
import glassBlowing from '../photos/glassblowing.png'

export const events = [  
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
    title: "Magical Trip on Axos",
    date: "Mon, Aug 27",
    location: "Axios",
    image: tripAxos,
  },
  {
    title: "Cretan Craft Workshop",
    date: "Tue, Feb 1",
    location: "Chania",
    image: cretanCraft,
  },
  {
    title: "Create Your Own Dish",
    date: "Mon, Mar 15",
    location: "Rethymno",
    image: makeDish,
  },
  {
    title: "Make Your Own Jewelry",
    date: "Mon, Apr 17",
    location: "Costelos Village",
    image: makeJewlerly,
  },
  {
    title: "Learn the art of Glass Blowing",
    date: "Mon, May 22",
    location: "Costelos Village",
    image: glassBlowing,
  },
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
];

const Activities = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <h1 className="section-header">Upcoming Events</h1>
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
