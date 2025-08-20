import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar: React.FC = () => {
  const users = [
    {
      id: 1,
      name: "Arpan",
      live: true,
      img: "../../public/dark.jpg",
      livewatch: "1.1k",
    },
    {
      id: 2,
      name: "Rohan",
      live: false,
      img: "../../public/dark.jpg",
      livewatch: "10k",
    },
    {
      id: 3,
      name: "Sohan",
      live: true,
      img: "../../public/dark.jpg",
      livewatch: "1110k",
    },
    {
      id: 4,
      name: "kohan",
      live: true,
      img: "../../public/dark.jpg",
      livewatch: "3213k",
    },
    {
      id: 5,
      name: "mohan",
      live: true,
      img: "../../public/dark.jpg",
      livewatch: "321321k",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`bg-gray-300  transition-all duration-300 h-screen ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-3 border-b ">
        {isOpen && <span>Live Channels</span>}

      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
		{isOpen ? (
			<ChevronLeft size={20} />   // collapse icon
		) : (
			<ChevronRight size={20} />  // expand icon
		)}
		</button>
      </div>

      <ul className="m-2 space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className={`flex items-center ${
              isOpen ? "justify-start space-x-3 px-3" : "justify-center"
            }`}
          >
            <img src={user.img} alt="" className="w-10 h-10 rounded-full" />
            {isOpen && (
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{user.name}</span>
                <span className="text-sm text-gray-600">{user.livewatch}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
