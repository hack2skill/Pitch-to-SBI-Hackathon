"use client"
import React, { useState } from 'react';

function Scraper() {
  const [subWindow, setSubWindow] = useState(null);

  const openSubWindow = () => {
    // Open the sub-window with the target website's URL
    const subWindowRef = window.open('https://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do', 'SubWindow', 'width=1200,height=600');
    
    // Set a reference to the sub-window
    setSubWindow(subWindowRef);
  };

  const fetchResult = () => {
    if (subWindow) {
      // Access the sub-window's DOM and retrieve data
      const resultElement = subWindow.document.getElementById('resultElement');
      if (resultElement) {
        const result = resultElement.innerText;
        // Now you can work with the retrieved result, e.g., send it to your database
        console.log(result);
      }
    }
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-6" onClick={openSubWindow}>Connect with MCA to fill the organizational details</button>
    </div>
  );
}

export default Scraper;
