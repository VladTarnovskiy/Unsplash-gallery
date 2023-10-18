import axios from "axios";

export async function getPicturesBySearch({ search, page }: RequestProps) {
  const response = await axios({
    method: "get",
    url: `https://api.unsplash.com/search/photos`,
    params: {
      query: search,
      page: page ?? 1,
      client_id: "sP8YdBsJSg8cHVqUXc7g4K4Ts3fEzyCZeQv4KDu2fR8",
    },
  });
  console.log(response);
  return response.data;
}
