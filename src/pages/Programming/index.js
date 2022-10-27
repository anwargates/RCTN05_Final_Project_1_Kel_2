import React, { useEffect } from "react";
import Card from "../../components/Cards/Card";
import { fetchProgrammingNews } from "../../features/slice/newsSlicer";
import { useSelector, useDispatch } from "react-redux";

export default function Index() {
  const allNews = useSelector((state) => state.news.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProgrammingNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
        <h1>News Programming</h1>
      <Card props={allNews} />
    </div>
  );
}
