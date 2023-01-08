import { API_KEY } from "./config";

export const fetchApi = async () => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`
  );
  const json = response.json();
  return json;
};
