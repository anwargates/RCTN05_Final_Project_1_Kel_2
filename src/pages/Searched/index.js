import React, { useEffect } from "react";
import Card from "../../components/Cards/Card";
import { fetchSearchResponse } from "../../features/slice/newsSlicer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Index() {
  const allNews = useSelector((state) => state.news.entities);
  const dispatch = useDispatch();
  const params = useParams()

  useEffect(() => {
    dispatch(fetchSearchResponse(params.query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <h1>Searched</h1>
      {console.log(allNews.length)}
      {allNews.length !== 0 ? <Card props={allNews} /> : <h3>hasil pencarian tidak ada</h3>}
    </div>
  );
}
