import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/7?_embed')
      .then(res => res.json())
      .then(json => {
        const cleanData = (json.acf && !Array.isArray(json.acf)) ? json.acf : json;
        setData(cleanData);
      });
  }, []);

  if (!data) return <div className="h-screen flex items-center justify-center bg-blue-50 text-2xl font-bold text-blue-600 animate-pulse">Loading Home...</div>;

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-4">{data.hero_title || data.title?.rendered}</h1>
      <p className="text-xl text-blue-700 max-w-2xl">{data.hero_description}</p>
    </div>
  );
}
export default Home;