import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const services = [
  { 
    title: "Dairy Products", 
    description: "Fresh milk and products", 
    image: "/service-1.jpg"  // Replace with the actual image path
  },
  { 
    title: "Organic Farming", 
    description: "100% pesticide-free", 
    image: "/service-2.jpg"  // Replace with the actual image path
  },
  { 
    title: "Fresh Vegetables", 
    description: "Direct from farms", 
    image: "/service-3.jpg"  // Replace with the actual image path
  },
  { 
    title: "Agricultural Tools", 
    description: "Best quality tools", 
    image: "/service-4.jpg"  // Replace with the actual image path
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 sec-title__title">Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow rounded">
              {/* Display the image instead of icon */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="mx-auto object-cover w-full h-48 rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              {/* Use the FontAwesomeIcon component */}
              <a href="#" className="mt-4 text-blue-500 hover:text-blue-600">
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-forestGreen right-ar" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
