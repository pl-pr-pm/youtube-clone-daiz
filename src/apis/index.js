import axios from "axios";

const APIKEY = process.env.REACT_APP_YOUTUBEAPI_KEY;

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const params = {
  part: "snippet",
  maxResults: 5,
  key: APIKEY,
  regionCode: "JP",
  type: "video",
};

export const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      chart: "mostPopular",
    },
  });
};

export const fetchSelectedData = async (id) => {
  return await youtube.get("videos", {
    params: {
      ...params,
      id,
    },
  });
};
