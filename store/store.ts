import {
  getPicturesBySearch,
  sortByDateDec,
  sortByDateInk,
  sortByPopularDec,
  sortByPopularInk,
} from "@/services/getPictures";
import { createWithEqualityFn } from "zustand/traditional";

type UsePosts = {
  pictures: Card[];
  search: string;
  filter: string;
  sort: string;
  page: number;
  loading: boolean;
  totalPages: number;
  getPicturesBySearch: () => Promise<void>;
  getPicturesByFilter: () => Promise<void>;
  setPage: (newPage: number) => void;
  setSearch: (newSearch: string) => void;
  setFilter: (newFilter: string) => void;
  setSortWithApi: (newSort: string) => void;
  setSortManual: (newSort: string) => void;
};
export const usePosts = createWithEqualityFn<UsePosts>((set, get) => ({
  pictures: [],
  search: "cities",
  filter: "",
  sort: "relevant",
  page: 1,
  loading: false,
  totalPages: 10,
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
    set({
      pictures: pictures.results,
      loading: false,
      totalPages: pictures.total_pages,
    });
  },
  getPicturesByFilter: async () => {
    set({ loading: true });
    const page = get().page;
    const filter = get().filter;
    const sort = get().sort;
    const pictures: SearchResponse = await getPicturesBySearch({
      search: filter,
      page,
      sort,
    });
    set({
      pictures: pictures.results,
      loading: false,
      totalPages: pictures.total_pages,
    });
  },
  setPage: (newPage: number) => set({ page: newPage }),
  setSearch: (newSearch: string) => set({ search: newSearch }),
  setFilter: (newFilter: string) => set({ filter: newFilter }),
  setSortWithApi: (newSort: string) => set({ sort: newSort }),
  setSortManual: (newSort: string) => {
    const pictures = get().pictures;
    switch (newSort) {
      case "popularInc":
        const x: Card[] = sortByPopularInk(pictures);
        set({ pictures: x });
        break;

      case "popularDec":
        const y: Card[] = sortByPopularDec(pictures);
        set({ pictures: y });
        break;

      case "dateInc":
        set({ pictures: sortByDateInk(pictures) });
        break;

      case "dateDec":
        set({ pictures: sortByDateDec(pictures) });
        break;
    }
  },
}));
