import { getPicturesBySearch } from "@/services/getPictures";

import { createWithEqualityFn } from "zustand/traditional";

type UsePosts = {
  pictures: Card[];
  search: string;
  filter: string;
  sort: string;
  page: number;
  loading: boolean;
  getPicturesBySearch: () => Promise<void>;
  // getPicturesByFilter: () => Promise<void>;
  setPage: (newPage: number) => void;
  setSearch: (newSearch: string) => void;
  // setFilter: (newFilter: string) => void;
  setSort: (newFSort: string) => void;
};
export const usePosts = createWithEqualityFn<UsePosts>((set, get) => ({
  pictures: [],
  search: "space",
  filter: "",
  sort: "latest",
  page: 1,
  loading: false,
  getPicturesBySearch: async () => {
    set({ loading: true });
    const page = get().page;
    const search = get().search;
    const sort = get().sort;
    const pictures: SearchResponse = await getPicturesBySearch({
      search,
      page,
      sort,
    });
    set({ pictures: pictures.results, loading: false });
  },
  // getPicturesByFilter: async () => {
  //   set({ loading: true });
  //   const page = get().page;
  //   const filter = get().filter;
  //   const sort = get().sort;
  //   const pictures: SearchResponse = await getPicturesBySearch({
  //     search: filter,
  //     page,
  //     sort,
  //   });
  //   set({ pictures: pictures.results, loading: false });
  // },
  setPage: (newPage: number) => set({ page: newPage }),
  setSearch: (newSearch: string) => set({ search: newSearch }),
  // setFilter: (newFilter: string) => set({ filter: newFilter }),
  setSort: (newSort: string) => set({ sort: newSort }),
}));
