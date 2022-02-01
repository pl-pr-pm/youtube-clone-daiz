import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../apis";
import { Store } from "../store/index";

const Top = () => {
  const { globalStore, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log("data", res.data.items);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: res.data.items },
      });
    });
  }, []);

  return (
    <>
      <Layout>Top Page</Layout>
    </>
  );
};

export default Top;
