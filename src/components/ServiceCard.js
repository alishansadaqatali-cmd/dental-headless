// src/components/ServiceCard.js
function ServiceCard({ item, colorClass }) {
    return (
      <div className={`p-6 bg-white rounded-2xl shadow-sm border-t-4 ${colorClass} transition-all hover:shadow-lg`}>
        <h3 className="text-xl font-bold text-gray-800">{item.service_name}</h3>
        <p className="text-gray-500 mt-2 font-semibold">Price: {item.service_price}</p>
      </div>
    );
  }
  
  export default ServiceCard;