import React from 'react';
import ReviewFace from '../photos/Review-Face.jpg'

const events = [
  {
    title: "Chloe",
    review: "Had a wonderful time while taking the pottery classes.",
    date: "Tue, Feb 15",
    location: "Chania outskirts",
    image: ReviewFace,
  },
];

const Experiences = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="section-header">User Experiences</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {events.map((event, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-100 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-1600">{event.title}</h3>
            <h3 className="text-xl text-gray-1000">{event.review}</h3>
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


export default Experiences;
