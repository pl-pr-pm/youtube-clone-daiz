import axios from "axios";

const APIKEY = process.env.REACT_APP_YOUTUBEAPI_KEY;

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      part: "snippet",
      maxResults: 20,
      key: APIKEY,
      regionCode: "JP",
      type: "video",
      chart: "mostPopular",
    },
  });
};
