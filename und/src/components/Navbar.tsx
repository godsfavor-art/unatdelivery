import { useState } from "react";
import { Search, Menu, X, User, Bookmark, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 border-b border-[#D8D8D8]">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold text-[#4A4A4A]">
              Travelsy
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-gray-700 hover:text-[#FF5200] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex text-sm items-center space-x-8 mr-20">
              <a
                href="/camping-locations"
                className="text-gray-700 hover:text-[#FF5200]"
              >
                Camping Locations
              </a>
              <a
                href="/activities"
                className="text-gray-700 hover:text-[#FF5200]"
              >
                Activities
              </a>
              <a
                href="/equipment"
                className="text-gray-700 hover:text-[#FF5200]"
              >
                Equipment
              </a>
              <a href="/blogs" className="text-gray-700 hover:text-[#FF5200]">
                Blogs
              </a>
            </div>
            <a
              href="#"
              className="bg-[#FF5200] text-white text-sm px-4 py-2 rounded-3xl flex items-center gap-2"
            >
              <Bookmark strokeWidth={2} size={20} />
              <span>Reservations</span>
            </a>
            <button className="p-2 rounded-full text-gray-700 hover:text-[#FF5200]">
              <Search size={20} />
            </button>
            <div className="relative flex gap-2 items-center cursor-pointer">
              <button className="p-1 rounded-full bg-gray-200 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <User size={16} className="text-[#FF5200]" />
                </div>
              </button>
              <ChevronDown color="#4A4A4A" />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pb-3">
              <a
                href="/camping-locations"
                className="text-gray-700 hover:text-[#FF5200] px-2"
              >
                Camping Locations
              </a>
              <a
                href="/activities"
                className="text-gray-700 hover:text-[#FF5200] px-2"
              >
                Activities
              </a>
              <a
                href="/equipment"
                className="text-gray-700 hover:text-[#FF5200] px-2"
              >
                Equipment
              </a>
              <a
                href="/blogs"
                className="text-gray-700 hover:text-[#FF5200] px-2"
              >
                Blogs
              </a>
            </div>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <a
                href="/reservations"
                className="bg-[#FF5200] text-white px-4 py-2 rounded-md text-center"
              >
                Reservations
              </a>
              <div className="flex items-center justify-between">
                <button className="p-2 text-gray-700 hover:text-[#FF5200]">
                  <Search size={20} />
                </button>
                <div className="relative">
                  <button className="p-1 rounded-full bg-gray-200 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <User size={16} className="text-[#FF5200]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
