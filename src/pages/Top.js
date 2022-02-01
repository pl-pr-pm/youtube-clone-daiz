import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../apis";

const Top = () => {
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log("data", res);
    });
  }, []);

  return (
    <>
      <Layout>Top Page</Layout>
    </>
  );
};

export default Top;
