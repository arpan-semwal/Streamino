// Cards.tsx
import { Gamepad } from "lucide-react";

interface CardProps {
  title: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-md transition 
                 transform hover:-translate-y-1 cursor-pointer 
                 flex flex-row items-center p-4 space-x-3 
                 w-full h-full"
    >
      <Gamepad size={24} className="text-blue-500" />
      <span className="font-medium text-sm">{title}</span>
    </button>
  );
};

export default Card;
