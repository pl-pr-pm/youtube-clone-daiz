import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Store } from "../../store";
import VideoPlay from "../VideoPlay/VideoPlay";
import Styles from "./VideoDetail.module.scss";
import Linkify from "react-linkify";
const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);

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
