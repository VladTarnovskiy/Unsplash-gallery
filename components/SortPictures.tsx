"use client";
import { usePosts } from "@/store/store";
import { Select, Option } from "@material-tailwind/react";
import { onChange } from "@material-tailwind/react/types/components/select";
import { shallow } from "zustand/shallow";

export const SortPictures = () => {
  const [setSort, getPicturesBySearch] = usePosts(
    (state) => [state.setSort, state.getPicturesBySearch],
    shallow
  );

  const handleSubmit: onChange = async (value) => {
    setSort(value!);
    await getPicturesBySearch();
  };

  return (
    <div className="mr-10">
      <Select onChange={handleSubmit} label="Sort by category">
        <Option value="latest">latest</Option>
        <Option value="oldest">oldest</Option>
        <Option value="popular">popular</Option>
        <Option value="downloads">downloads</Option>
        <Option value="people">peoples</Option>
      </Select>
    </div>
  );
};
