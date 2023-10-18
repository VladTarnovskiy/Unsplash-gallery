"use client";
import { usePosts } from "@/store/store";
import { Select, Option } from "@material-tailwind/react";
import { onChange } from "@material-tailwind/react/types/components/select";
import { shallow } from "zustand/shallow";

export const FilterPictures = () => {
  const [setSearch, getPicturesBySearch] = usePosts(
    (state) => [state.setSearch, state.getPicturesBySearch],
    shallow
  );

  const handleSubmit: onChange = async (value) => {
    setSearch(value!);
    await getPicturesBySearch();
  };

  return (
    <div>
      <Select onChange={handleSubmit} label="Filter by category">
        <Option value="nature">nature</Option>
        <Option value="cities">cities</Option>
        <Option value="animals">animals</Option>
        <Option value="space">space</Option>
        <Option value="people">peoples</Option>
      </Select>
    </div>
  );
};
