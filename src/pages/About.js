import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // YAHA APNI ABOUT PAGE KI ID LIKHEIN (Maslan 15)
    fetch('https://api.codingdudees.com/wp-json/wp/v2/pages/17?_embed') 
      .then(res => res.json())
      .then(json => setData(json.acf || json));
  }, []);

  if (!data) return <div className="h-screen flex items-center justify-center text-green-600 font-bold animate-pulse text-2xl">Loading About...</div>;

  return (
    <div className="min-h-screen bg-green-50 p-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-black text-green-900 mb-4">{data.hero_title || "About Us"}</h1>
        <p className="text-green-700 mb-12 text-lg">{data.hero_description}</p>

        {/* About Page Repeater - Passing Green Color as Prop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.services_list && data.services_list.map((service, index) => (
            <ServiceCard key={index} item={service} colorClass="border-green-500" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;