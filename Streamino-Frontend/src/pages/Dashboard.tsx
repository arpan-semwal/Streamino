import React from "react";
import { useNavigate } from "react-router-dom";
//import { LogOut, PlayCircle, Video } from "lucide-react"; // for icons
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  //const user = JSON.parse(localStorage.getItem("user") || "{}");

  //const handleGoLive = () => {
  //  navigate("/stream/create");
  //};

  //const handleWatch = () => {
  //  navigate(`/watch/${user.streamKey}`);
  //};

  //const handleLogout = () => {
  //  localStorage.removeItem("user");
  //  navigate("/login");
  //};

  return (
    <div className="flex flex-col h-screen fixed left-0 right-0 top-0 bg-white z-10 shadow">
      <div className="h-16">
        <Navbar />
      </div>

      <div className="flex flex-1 h-screen">
        <div>
          <Sidebar />
        </div>

        <div className="flex-1">content</div>
      </div>
    </div>
  );
};

export default Dashboard;
