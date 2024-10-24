import React, { useState } from "react";
import { FiHome, FiSearch, FiCompass, FiMessageCircle, FiHeart, FiPlusSquare, FiLogOut, FiX, FiMenu } from "react-icons/fi";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo_name.png';

const sidebarItems = [
  { icon: <FiHome className="w-6 h-6" />, text: "Home" },
  { icon: <FiSearch className="w-6 h-6" />, text: "Search" },
  { icon: <FiCompass className="w-6 h-6" />, text: "Explore" },
  { icon: <FiMessageCircle className="w-6 h-6" />, text: "Messages" },
  { icon: <FiHeart className="w-6 h-6" />, text: "Notifications" },
  { icon: <FiPlusSquare className="w-6 h-6" />, text: "Create" },
  {
    icon: (
      <Avatar className="w-8 h-8 flex items-center justify-center">
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="rounded-full object-cover"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    text: "Profile",
  },
  { icon: <FiLogOut className="w-6 h-6" />, text: "Logout" },
];

const LeftSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuButtonVisible, setMenuButtonVisible] = useState(true); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
      setTimeout(() => {
        setMenuButtonVisible(true); // Show menu button after sidebar is fully hidden
      }, 500); // Match this duration with the sidebar transition duration
    } else {
      setMenuButtonVisible(false); // Hide menu button immediately when opening sidebar
      setSidebarOpen(true);
    }
  };

  return (
    <div>
      {/* Button to open/close the sidebar */}
      <div className="fixed top-4 left-4 z-20">
         {menuButtonVisible && (
          <button onClick={toggleSidebar} className="p-2">
            <FiMenu className="w-8 h-8" />
          </button>
          )}
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-10 border-r border-gray-300 w-1/4 md:w-1/5 lg:w-1/6 h-screen bg-white transition-transform duration-500 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between px-4 py-4">
            <h1 className="text-xl font-bold"><img src={logo} alt="Logo" className="h-6  ml-7" />
            </h1>
            {/* Close button next to the logo */}
            <button onClick={toggleSidebar}>
              <FiX className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex flex-col">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-2"
              >
                <div className="flex items-center justify-center w-8 h-8">{item.icon}</div>
                <span className="text-left">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
