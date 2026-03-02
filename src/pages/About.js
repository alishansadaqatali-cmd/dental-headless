import { useEffect, useState } from 'react';

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Yahan apni About Page ki sahi ID (maslan 10 ya 15) likhein
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/17?_embed') 
      .then(res => res.json())
      .then(json => {
        // SCF ka data nikalna
        const cleanData = (json.acf && !Array.isArray(json.acf)) ? json.acf : json;
        setData(cleanData);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  // Loading Screen
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-green-50">
        <div className="text-2xl font-bold text-green-600 animate-pulse">
          Loading About Details...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-10 flex flex-col items-center">
      
      {/* 1. Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">
          {data.hero_title || "Our Services"}
        </h1>
        <p className="text-xl text-green-700 max-w-2xl">
          {data.hero_description || "Explore what we offer at our clinic."}
        </p>
      </div>

      {/* 2. Repeater Loop (Services List) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {data.services_list && data.services_list.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-green-500 hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {item.service_name}
            </h3>
            <p className="text-green-600 font-semibold text-lg">
              Price: {item.service_price}
            </p>
          </div>
        ))}
      </div>

      {/* Agar data na mile to message */}
      {!data.services_list && (
        <p className="text-gray-500">No services found. Please add them in WordPress.</p>
      )}

    </div>
  );
}

export default About;