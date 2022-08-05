import axios from "axios";

export const baseUrl = "https://wookie.codesubmit.io/movies";

const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
  },
};

export const fetchAPI = async (url: string) => {
  const { data } = await axios.get(url, config);

  return data;
};
