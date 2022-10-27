import React, { useEffect } from "react";
import Card from "../../components/Cards/Card";
import { fetchIndonesiaNews } from "../../features/slice/newsSlicer";
import { useSelector, useDispatch } from "react-redux";

export default function Index() {
  const allNews = useSelector((state) => state.news.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIndonesiaNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
        <h1>News Indonesia</h1>
      <Card props={allNews} />
    </div>
  );
}
