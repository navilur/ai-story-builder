import Image from "next/image";
import React from "react";

function StoryType() {
  const OptionList = [
    {
      label: "Story Book",
      imageUrl: "/story.png",
      isFree: true,
    },
    {
      label: "Bed Story",
      imageUrl: "/bedstory.png",
      isFree: true,
    },
    {
      label: "Educational",
      imageUrl: "/educational.png",
      isFree: true,
    },
  ];
  return (
    <div>
      <label htmlFor="" className="font-bold text-4xl text-primary">
        2. Story Type
      </label>
      <div className="grid grid-cols-3 gap-5 mt-4">
        {OptionList.map((item, index) => (
          <div className="relative">
            {/* https://youtu.be/bxhDP-e4NDA?t=4731 */}
            <h2 className="absolute bottom-5 text-white text-center w-full text-2xl">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryType;
