"use client";
import { usePosts } from "@/store/store";
import { Select, Option } from "@material-tailwind/react";
import { onChange } from "@material-tailwind/react/types/components/select";
import { shallow } from "zustand/shallow";

export const SortPicturesWithApi = () => {
  const [setSortWithApi, getPicturesBySearch] = usePosts(
    (state) => [state.setSortWithApi, state.getPicturesBySearch],
    shallow
  );

  const handleSubmit: onChange = async (value) => {
    setSortWithApi(value!);
    await getPicturesBySearch();
  };

  return (
    <div className="mr-4 mt-2">
      <Select onChange={handleSubmit} label="Sort (api)">
        <Option value="latest">latest</Option>
        <Option value="relevant">relevant</Option>
      </Select>
    </div>
  );
};
