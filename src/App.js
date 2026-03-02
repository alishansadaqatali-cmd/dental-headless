import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. WordPress API se data fetch karna
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/7?_embed')
      .then(res => res.json())
      .then(json => {
        // 2. SCF/ACF data ko nikalna
        const cleanData = (json.acf && !Array.isArray(json.acf)) ? json.acf : json;
        setData(cleanData);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // 3. Professional Loading Style (Centered + Pulse Animation)
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-50">
        <div className="text-2xl font-bold text-blue-600 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-6">
      
      {/* 4. Hero Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-4">
        {data.hero_title || data.title?.rendered}
      </h1>

      {/* 5. Hero Description */}
      <p className="text-xl text-blue-700 max-w-2xl">
        {data.hero_description || "Providing the best dental services for your bright smile."}
      </p>

      {/* 6. Call to Action Button */}
      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all">
        Book Appointment
      </button>

    </div>
  );
}

export default App;