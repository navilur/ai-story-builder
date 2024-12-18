"use client";
import React from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";

export interface fieldData {
  fieldValue: string;
  fieldName: string;
}

function CreateStory() {
  const onHandelUserSelection = (data: fieldData) => {
    console.log(data);
  };

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="font-extrabold text-[70px] uppercase text-primary text-center">
        Create Your Story
      </h2>
      <p className="text-2xl text-primary text-center font-semibold">
        Unlock your creativity with AI: Craft stories like never before! Let our
        AI bring you <br /> imagination to life, one story at a time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandelUserSelection} />

        {/* Story Type */}
        <StoryType />

        {/* Age Group */}

        {/* Image Style */}
      </div>
    </div>
  );
}

export default CreateStory;
