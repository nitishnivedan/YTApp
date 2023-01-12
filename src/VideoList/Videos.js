import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { closeVideo } from "../panelSlice";

const Video = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeVideo());
  }, []);
  let [searchParams, setSearchParams] = useSearchParams();
  const url = searchParams.get("v");
  console.log(url, "url");
  return (
    <div className="ml-4">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
