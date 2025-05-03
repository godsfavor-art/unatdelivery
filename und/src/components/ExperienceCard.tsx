import { Check } from "lucide-react";
import { ExpereinceType } from "./Experience";

type PropType = {
  experience: ExpereinceType;
  className: string;
  isSelected: boolean;
  onToggle: () => void;
};

const ExperienceCard = ({ experience, className, isSelected, onToggle }: PropType) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer h-[200px] w-full ${className}`}
      style={{ aspectRatio: "4/3" }}
      onClick={onToggle}
    >
      <img
        src={experience.image}
        alt={experience.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay - orange for selected, dark for unselected */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-colors ${
          isSelected
            ? "bg-[#FF5200]/70 bg-opacity-90"
            : "bg-transparent bg-opacity-25"
        }`}
      >
        {/* {isSelected && (
          <div className="absolute top-4 right-4 bg-white rounded-full p-1">
            <Check size={16} className="text-[#FF5200]" />
          </div>
        )} */}
        <div className="flex flex-col items-center gap-1">
          {isSelected && <Check size={30} className="text-white" />}
          <h3 className="text-white text-2xl font-medium font-serif">
            {experience.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
