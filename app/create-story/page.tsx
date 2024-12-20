"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";
import { chatSession } from "@/config/GeminiAI";
import { db } from "@/config/db";
import { StoryData } from "@/config/schema";
// @ts-ignore
import uuid4 from "uuid4";
import CustomLoader from "./_components/CustomLoader";

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

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
  const [loading, setLoading] = useState(false);

  const onHandelUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
  };

  const GenerateStory = async () => {
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      "{ageGroup}",
      formData?.ageGroup ?? ""
    )
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "");

    // Generate AI Story
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result?.response.text());
      const response = await SaveInDB(result?.response.text());
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    // Generate Image
  };

  const SaveInDB = async (output: string) => {
    const recordId = uuid4();
    setLoading(true);
    try {
      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          ageGroup: formData?.ageGroup,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          imageStyle: formData?.imageStyle,
          output: JSON.parse(output),
        })
        .returning({ storyId: StoryData?.storyId });
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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
        <Button
          color="primary"
          className="p-10 text-2xl"
          onPress={GenerateStory}
          isDisabled={loading}>
          Generate Story
        </Button>
      </div>
      <CustomLoader isLoading={loading} />
      {/* https://youtu.be/bxhDP-e4NDA?t=8213 */}
    </div>
  );
}

export default CreateStory;
