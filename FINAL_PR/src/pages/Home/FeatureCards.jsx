import React from "react";

const features = [
  { title: "Technology", description: "We’ve been using tech", icon: "🛠" },
  { title: "Best Farmer", description: "Skilled and trained", icon: "🌾" },
  { title: "100% Organic", description: "Certified quality", icon: "✅" },
  { title: "Delivery", description: "Quick service at your door", icon: "🚚" },
];

const FeatureCards = () => {
  return (
    <div className="py-12 bg-goldenYellow">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white shadow rounded">
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-bold text-forestGreen">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

