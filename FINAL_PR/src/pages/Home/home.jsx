import React from "react";
import ImageSlider from "./slider";
import FeatureCards from "./FeatureCards";
import ServicesSection from "./ServicesSection";
import AgricultureSection from "./AgricultureSection";
import WhyChooseUs from "./WhyChooseUs";





const Home = () => {
  return (
    <div>
      <ImageSlider />
      <FeatureCards />
      <AgricultureSection />
      <ServicesSection />
      <WhyChooseUs />
 

    </div>
    
  );
};

export default Home;