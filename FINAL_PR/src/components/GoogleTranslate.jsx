import React, { useEffect } from "react";

const GoogleTranslatePage = () => {
  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.querySelector(
      "script[src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']"
    );
    if (!existingScript) {
      // Add the Google Translate script to the document
      const addScript = document.createElement("script");
      addScript.src ="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr,ta,te,kn,gu,bn,pa", // Add more languages as needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="fixed top-20 right-5 z-40 bg-green-400 p-1 rounded-bl-md shadow-lg">
      <div id="google_translate_element" className="text-white text-sm"></div>
    </div>
  );
};

export default GoogleTranslatePage;
