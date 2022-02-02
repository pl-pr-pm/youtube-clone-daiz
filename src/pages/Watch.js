import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import SideList from "../components/SideList/SideList";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import { Store } from "../store/index";
import { useLocation } from "react-router-dom";
import { fetchSelectedData, fetchRelatedData } from "../apis";

const Watch = () => {
  const { setGlobalState } = useContext(Store);
  const location = useLocation();
  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");

    if (id) {
      const result = await Promise.all([
        fetchSelectedData(id),
        fetchRelatedData(id),
      ]);
      const [selected, related] = result;
      // console.log("selected is ", selected);
      // console.log("related is ", related);
      const items = related.data.items;
      const filterdItems = items.filter((item) =>
        "snippet" in item ? true : false
      );
      setGlobalState({
        type: "SET_SELECTED",
        payload: { selected: selected.data.items.shift() },
      });
      setGlobalState({
        type: "SET_RELATED",
        payload: { related: filterdItems },
      });
    }
  };

  useEffect(() => {
    setVideos();
  }, [location.search]);

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  );
};

export default Watch;
