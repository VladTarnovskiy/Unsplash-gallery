"use client";
import { usePosts } from "@/store/store";
import { Select, Option } from "@material-tailwind/react";
import { onChange } from "@material-tailwind/react/types/components/select";
import { shallow } from "zustand/shallow";

export const SortPicturesManual = () => {
  const setSortManual = usePosts((state) => state.setSortManual, shallow);

  const handleSubmit: onChange = async (value) => {
    setSortManual(value!);
  };

  return (
    <div className="mr-10 mt-2">
      <Select onChange={handleSubmit} label="Sort (local)">
        <Option value="popularInc">popularInc</Option>
        <Option value="popularDec">popularDec</Option>
        <Option value="dateInc">dateInc</Option>
        <Option value="dateDec">dateDec</Option>
      </Select>
    </div>
  );
};
