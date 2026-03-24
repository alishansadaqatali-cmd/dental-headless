import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Menu data fetch karne ka function
    fetch('https://api.codingdudees.com/wp-json/menus/v1/menus/main-menu')
      .then(res => res.json())
      .then(data => {
        setMenuItems(data.items);
        // Debugging ke liye console zaroor check karein ke data kya aa raha hai
        console.log("WordPress Menu Data:", data.items);
      })
      .catch(err => console.error("Menu fetch error:", err));
  }, []);

  return (
    <header className="bg-white border-b sticky top-0 z-50 py-4 px-6 flex justify-between items-center">
      <div className="logo font-bold text-2xl tracking-tighter">
        <Link to="/">CODING DUDEES</Link>
      </div>

      <nav>
        <ul className="flex gap-8">
          {menuItems && menuItems.map((item) => {
            // 1. Domain remove karein
            let slug = item.url.replace('https://api.codingdudees.com', '');
            
            // 2. Agar slug khali hai, ya sirf aik slash "/" hai, 
            // toh usay default "/" (Home) bana do.
            const finalPath = (slug === "" || slug === "/") ? "/" : slug;

            return (
              <li key={item.ID}>
                <Link 
                  to={finalPath} 
                  className="text-gray-600 hover:text-black font-medium transition"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}