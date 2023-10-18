"use client";
import { Select, Option } from "@material-tailwind/react";

export const FilterPictures = () => {
  return (
    <div>
      <Select label="Select category">
        <Option value="nature">Nature</Option>
        <Option value="city">Cities</Option>
        <Option value="animals">Animals</Option>
        <Option value="space">Space</Option>
        <Option value="people">Peoples</Option>
      </Select>
    </div>
  );
};
