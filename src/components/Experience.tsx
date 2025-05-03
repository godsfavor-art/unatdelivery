import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import {
  bike,
  nature,
  bungee,
  camping,
  cloud,
  coffee,
  farm,
  kibera,
  wineTasting,
} from "../utils/image";

export type ExpereinceType = {
  id: string;
  title: string;
  image: string;
  size: string;
};

export default function ExperienceGrid() {
  const [selectedExperiences, setSelectedExperiences] = useState([
    "nature-walk",
    "farm-visit",
    "camping",
  ]);

  const experiences: ExpereinceType[] = [
    {
      id: "rafting",
      title: "Rafting",
      image: cloud,
      size: "medium-wide",
    },
    {
      id: "nature-walk",
      title: "Nature Walk",
      image: nature,
      size: "medium",
    },
    {
      id: "bike-riding",
      title: "Bike Riding",
      image: bike,
      size: "small",
    },
    {
      id: "bungee-jumping",
      title: "Bungee Jumping",
      image: bungee,
      size: "small",
    },
    {
      id: "wine-tasting",
      title: "Wine Tasting",
      image: wineTasting,
      size: "small",
    },
    {
      id: "coffee-tasting",
      title: "Coffee Tasting",
      image: coffee,
      size: "small",
    },
    {
      id: "farm-visit",
      title: "Farm Visit",
      image: farm,
      size: "medium-wide",
    },
    {
      id: "camping",
      title: "Camping",
      image: camping,
      size: "wide",
    },
    {
      id: "kilarea-tour",
      title: "Kilarea Tour",
      image: kibera,
      size: "medium",
    },
  ];

  const toggleExperience = (id: string) => {
    if (selectedExperiences.includes(id)) {
      setSelectedExperiences(
        selectedExperiences.filter((expId) => expId !== id)
      );
    } else {
      setSelectedExperiences([...selectedExperiences, id]);
    }
  };

  return (
    <section className="mt-12 pb-8 w-11/12 md:w-10/12 mx-auto">
      <p className="text-sm text-[#4A4A4A] mb-6">What are your interests?</p>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 auto-rows-auto">
        <ExperienceCard
          experience={experiences[0]}
          className="col-span-4 md:col-span-5 lg:col-span-8 row-span-1"
          isSelected={selectedExperiences.includes(experiences[0].id)}
          onToggle={() => toggleExperience(experiences[0].id)}
        />

        <ExperienceCard
          experience={experiences[1]}
          className="col-span-4 md:col-span-3 lg:col-span-4 row-span-1"
          isSelected={selectedExperiences.includes(experiences[1].id)}
          onToggle={() => toggleExperience(experiences[1].id)}
        />

        <ExperienceCard
          experience={experiences[2]}
          className="col-span-4 md:col-span-4 row-span-1"
          isSelected={selectedExperiences.includes(experiences[2].id)}
          onToggle={() => toggleExperience(experiences[2].id)}
        />

        <ExperienceCard
          experience={experiences[3]}
          className="col-span-4 md:col-span-4 row-span-1"
          isSelected={selectedExperiences.includes(experiences[3].id)}
          onToggle={() => toggleExperience(experiences[3].id)}
        />

        <ExperienceCard
          experience={experiences[4]}
          className="col-span-4 md:col-span-4 row-span-1"
          isSelected={selectedExperiences.includes(experiences[4].id)}
          onToggle={() => toggleExperience(experiences[4].id)}
        />

        <ExperienceCard
          experience={experiences[5]}
          className="col-span-4 md:col-span-4 lg:col-span-4 row-span-1"
          isSelected={selectedExperiences.includes(experiences[5].id)}
          onToggle={() => toggleExperience(experiences[5].id)}
        />

        <ExperienceCard
          experience={experiences[6]}
          className="col-span-4 md:col-span-4 lg:col-span-8 row-span-1"
          isSelected={selectedExperiences.includes(experiences[6].id)}
          onToggle={() => toggleExperience(experiences[6].id)}
        />

        <ExperienceCard
          experience={experiences[7]}
          className="col-span-4 md:col-span-8 lg:col-span-8 row-span-1"
          isSelected={selectedExperiences.includes(experiences[7].id)}
          onToggle={() => toggleExperience(experiences[7].id)}
        />

        <ExperienceCard
          experience={experiences[8]}
          className="col-span-4 md:col-span-4 lg:col-span-4 row-span-1"
          isSelected={selectedExperiences.includes(experiences[8].id)}
          onToggle={() => toggleExperience(experiences[8].id)}
        />
      </div>

      <div className="flex mt-8">
        <button className="bg-[#FF5200] rounded-sm text-white px-12 py-2 flex items-center justify-center hover:bg-orange-600 transition-colors">
          Set
        </button>
      </div>
    </section>
  );
}