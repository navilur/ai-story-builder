"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";

export interface fieldData {
  fieldValue: string;
  fieldName: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

function CreateStory() {
  const [formData, setFormData] = useState<formDataType>();

  const onHandelUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
  };

  return (
    <div className="p-10 md:px-20 xl:px-40">
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
        <StoryType userSelection={onHandelUserSelection} />

        {/* Age Group */}
        <AgeGroup userSelection={onHandelUserSelection} />

        {/* Image Style */}
        <ImageStyle userSelection={onHandelUserSelection} />
      </div>
      <div className="flex justify-end mt-5">
        <Button color="primary" className="p-10 text-2xl">
          Generate Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
