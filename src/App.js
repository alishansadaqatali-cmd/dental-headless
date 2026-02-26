// Build Version 2
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Page ID 7 use kar rahe hain
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/7?_embed')
      .then(res => res.json())
      .then(json => {
        setData(json.acf); // SCF ka data .acf mein hota hai
      });
  }, []);

  if (!data) return <div className="h-screen flex items-center justify-center font-bold">Connecting to WordPress...</div>;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-4">
        {data.hero_title || "Title loading..."}
      </h1>
      <p className="text-xl text-blue-700 max-w-2xl">
        {data.hero_description || "Description loading..."}
      </p>
      <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg">
        Book Appointment
      </button>
    </div>
  );
}

export default App;