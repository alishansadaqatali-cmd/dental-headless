import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. WordPress se data mangwana
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/7?_embed')
      .then(res => res.json())
      .then(json => {
        // 2. Data ko save karna (Pehle ACF check karega, warna poora JSON)
        const cleanData = (json.acf && !Array.isArray(json.acf)) ? json.acf : json;
        setData(cleanData);
      });
  }, []);

  // 3. Jab tak data nahi aata, screen par "Loading" dikhana
  if (!data) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-6">
      
      {/* 4. Hero Title (SCF field ya WordPress Title) */}
      <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
        {data.hero_title || data.title?.rendered}
      </h1>

      {/* 5. Hero Description */}
      <p className="text-xl text-blue-700 max-w-2xl">
        {data.hero_description || "Description not found"}
      </p>

      <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full">
        Book Appointment
      </button>

    </div>
  );
}

export default App;