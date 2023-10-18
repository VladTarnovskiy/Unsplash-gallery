"use client";
import { usePosts } from "@/store/store";
import { Select, Option } from "@material-tailwind/react";
import { onChange } from "@material-tailwind/react/types/components/select";
import { shallow } from "zustand/shallow";

export const FilterPictures = () => {
  const [setFilter, getPicturesByFilter] = usePosts(
    (state) => [state.setFilter, state.getPicturesByFilter],
    shallow
  );

  const handleSubmit: onChange = async (value) => {
    setFilter(value!);
    await getPicturesByFilter();
  };

  return (
    <div className="mr-10 mt-2">
      <Select onChange={handleSubmit} label="Filter by category">
        <Option value="nature">nature</Option>
        <Option value="cities">cities</Option>
        <Option value="animals">animals</Option>
        <Option value="space">space</Option>
        <Option value="art">art</Option>
      </Select>
    </div>
  );
};
