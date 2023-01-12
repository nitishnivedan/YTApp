import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchApi } from "./fetchApi";
import VideoThumbnail from "./Videothumbnail";
import Tags from "./Tags";
import { getVideos } from "./videoSlice";

const Body = ({}) => {
  //const [listOfVideos, setListOfVideos] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.VideoList.videos);
  console.log(selector, "selector");
  useEffect(() => {
    fetchYoutubeVideos();
  }, []);
  const fetchYoutubeVideos = async () => {
    if (!selector.length) {
      const response = await fetchApi();
      dispatch(getVideos(response.items));
    }
    //setListOfVideos(response.items);
  };
  return (
    <>
      <div className="shadow-lg col-span-10">
        <div className="flex flex-wrap">
          <Tags />
          {selector && selector.length > 0
            ? selector.map((videos) => <VideoThumbnail videos={videos} />)
            : null}
        </div>
      </div>
    </>
  );
};

export default Body;
