import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = ({
  options,
  defaultValue,
  country,
  width = "w-48",
}: {
  options: string[];
  defaultValue: string;
  country?: boolean;
  width?: string
 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${width}`}>
      <button
        type="button"
        className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          {country && (
            // <div className="w-5 h-5 p-2 mr-2 rounded-full">
            <div className="w-5 h-5 p-3 rounded-full bg-purple-200 flex items-center justify-center text-xs">
              <p>US</p>
            </div>
            // </div>
          )}
          <span>{selected}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1 max-h-60 overflow-auto">
            {options.map((option) => (
              <li
                key={option}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {country && (
                  //   <div className="w-5 h-5 mr-2 rounded-full">
                  <div className="w-5 h-5 rounded-full p-3 bg-purple-200 flex items-center justify-center text-xs">
                    <p>US</p>
                  </div>
                  //   </div>
                )}
                <p>{option}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;