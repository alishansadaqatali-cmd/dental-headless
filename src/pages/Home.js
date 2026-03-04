import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/7?_embed')
      .then(res => res.json())
      .then(json => setData(json.acf || json));
  }, []);

  if (!data) return <div className="h-screen flex items-center justify-center text-blue-600 font-bold animate-pulse text-2xl">Loading Home...</div>;

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-black text-blue-900 mb-4">{data.hero_title || "Welcome Home"}</h1>
        <p className="text-blue-700 mb-12 text-lg">{data.hero_description}</p>

        {/* Home Page Repeater - Passing Blue Color as Prop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.services_list && data.services_list.map((service, index) => (
            <ServiceCard key={index} item={service} colorClass="border-blue-500" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;