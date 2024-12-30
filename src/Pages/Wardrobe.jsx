import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Upload from "../Components/Upload";

const Wardrobe = () => {
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const items = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Call `key` with index
        try {
          const storedItem = JSON.parse(localStorage.getItem(key));
          if (storedItem && storedItem.id && storedItem.image) {
            items.push(storedItem);
          }
        } catch (error) {
          console.warn(`Skipped invalid JSON for key: ${key}`);
        }
      }
      setLocalStorageData(items); // Update state
    };

    fetchData(); // Call fetchData inside useEffect
  }, []); // Dependency array

  return (
    <div>
      <Navbar />
      <Upload />
      <div className="p-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {localStorageData.map((item) => (
          <div
            key={item.id}
            className="w-full h-40 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.image}
              alt={item.name || `wardrobe-item-${item.id}`}
              className="w-full h-full object-cover"
            />
            <p className="text-center text-sm mt-2">{item.name || "Unnamed Item"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wardrobe;
