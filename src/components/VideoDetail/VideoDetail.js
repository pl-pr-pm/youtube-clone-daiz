import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSelectedData } from "../../apis/index";
import { Store } from "../../store";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default VideoDetail;
