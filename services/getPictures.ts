import axios from "axios";

export async function getPicturesBySearch({
  search,
  page,
  sort,
}: RequestProps) {
  const response = await axios({
    method: "get",
    url: `https://api.unsplash.com/search/photos`,
    params: {
      query: search,
      page: page ?? 1,
      per_page: 12,
      order_by: sort ?? "latest",
      client_id: "sP8YdBsJSg8cHVqUXc7g4K4Ts3fEzyCZeQv4KDu2fR8",
    },
  });
  console.log(response);
  return response.data;
}
