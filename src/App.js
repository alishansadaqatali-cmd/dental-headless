import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page ID 7 se data fetch ho raha hai
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/7?_embed')
      .then(res => res.json())
      .then(json => {
        console.log("WordPress Data:", json); // Console mein check karne ke liye
        
        // Agar acf khali hai toh poora json use karo (SCF handle karne ke liye)
        const finalData = (json.acf && !Array.isArray(json.acf)) ? json.acf : json;
        setData(finalData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-50">
        <div className="text-2xl font-bold text-blue-600 animate-pulse">
          Connecting to WordPress...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-6">
      {/* Hero Title: Pehle SCF field dekhega, phir default WordPress title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-4">
        {data.hero_title || data.title?.rendered || "Welcome to Dental Care"}
      </h1>

      {/* Hero Description */}
      <p className="text-xl text-blue-700 max-w-2xl">
        {data.hero_description || "Providing the best dental services for your bright smile."}
      </p>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all">
        Book Appointment
      </button>
      
      {/* Debugging help: Agar data na dikhayi de toh ye niche wala hissa hata dena */}
      {!data.hero_title && (
        <div className="mt-10 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-sm">
          Tip: Check if your SCF field name is exactly <b>hero_title</b> in WordPress.
        </div>
      )}
    </div>
  );
}

export default App;