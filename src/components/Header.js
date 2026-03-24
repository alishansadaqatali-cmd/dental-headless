import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('https://api.codingdudees.com/wp-json/menus/v1/menus/main-menu')
      .then(res => res.json())
      .then(data => {
        setMenuItems(data.items);
      })
      .catch(err => console.error("Menu fetch error:", err));
  }, []);

  return (
    <header className="bg-white border-b sticky top-0 z-50 py-4 px-6 flex justify-between items-center">
      <div className="logo font-bold text-2xl tracking-tighter">
        {/* Logo hamesha root par jayega */}
        <Link to="/">CODING DUDEES</Link>
      </div>

      <nav>
        <ul className="flex gap-8">
          {menuItems && menuItems.map((item) => {
            // 1. Pehle domain ko remove karein
            let slug = item.url.replace('https://api.codingdudees.com', '');
            
            // 2. Slug ko clean karein: Agar slug khali hai, ya exactly "/home/", ya "/home" hai
            // Toh usay zabardasti "/" (root) bana dein.
            let finalPath = slug;
            if (slug === "" || slug === "/" || slug === "/home" || slug === "/home/") {
              finalPath = "/";
            }

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