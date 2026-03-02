import { useEffect, useState } from 'react';

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Yahan 7 ki jagah About page ki ID likhein
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/17?_embed') 
      .then(res => res.json())
      .then(json => {
        const cleanData = (json.acf && !Array.isArray(json.acf)) ? json.acf : json;
        setData(cleanData);
      });
  }, []);

  if (!data) return <div className="h-screen flex items-center justify-center bg-green-50 text-2xl font-bold text-green-600 animate-pulse">Loading About...</div>;

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold text-green-900 mb-4">{data.hero_title || data.title?.rendered}</h1>
      <p className="text-xl text-green-700 max-w-2xl">{data.hero_description}</p>
    </div>
  );
}
export default About;