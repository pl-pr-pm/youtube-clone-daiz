import React, { useEffect, useContext } from "react";
import { Store } from "../../store";
import { fetchRelatedData } from "../../apis/index";
import SideListItem from "../SideListItem/SideListItem";
import Style from "./SideList.module.scss";

const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const setRelatedVideo = async (id) => {
    await fetchRelatedData(id).then((res) => {
      const items = res.data.items;
      const filterdItems = items.filter((item) =>
        "snippet" in item ? true : false
      );
      setGlobalState({
        type: "SET_RELATED",
        payload: { related: filterdItems },
      });
    });
  };

  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
  }, [globalState.selected]);

  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          );
        })
      ) : (
        <span>No data </span>
      )}
    </div>
  );
};

export default SideList;
