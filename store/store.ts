import { getPicturesBySearch } from "@/services/getPictures";

import { createWithEqualityFn } from "zustand/traditional";

type UsePosts = {
  pictures: Card[];
  page: number;
  loading: boolean;
  getPostsBySearch: (search: RequestProps) => Promise<void>;
};
export const usePosts = createWithEqualityFn<UsePosts>((set) => ({
  pictures: [],
  page: 1,
  loading: false,
  getPostsBySearch: async (search: RequestProps) => {
    set({ loading: true });
    const pictures = await getPicturesBySearch(search);
    set({ pictures, loading: false });
  },
}));
