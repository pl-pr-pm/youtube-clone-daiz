import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSelectedData } from "../../apis/index";
import { Store } from "../../store";
import VideoPlay from "../VideoPlay/VideoPlay";
import Styles from "./VideoDetail.module.scss";
import Linkify from "react-linkify";
const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const location = useLocation();
  // useEffectの中では、async awaitは使えない
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search); // クエリパラメータ取得
    const id = searchParams.get("v");
    // fetchSelectedDataはPromiseを返却してくる
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift();
      console.log("item", item);
      setGlobalState({
        type: "SET_SELECTED",
        payload: { selected: item },
      });
    });
  };
  useEffect(() => {
    setSelectedVideo();
  }, [location.search]);

  return globalState.selected ? (
    <div className={Styles.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.slectedTitle}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selectedDesctiption}</pre>
      </Linkify>
    </div>
  ) : (
    <span>No data</span>
  );
};

export default VideoDetail;
