import { useEffect, useState } from "react";

import { fetchApi } from "./fetchApi";
import VideoThumbnail from "./Videothumbnail";

const Body = ({}) => {
  const [listOfVideos, setListOfVideos] = useState([]);
  useEffect(() => {
    fetchYoutubeVideos();
  }, []);
  const fetchYoutubeVideos = async () => {
    const response = await fetchApi();
    setListOfVideos(response.items);
  };
  return (
    <div className="shadow-lg col-span-10">
      <div className="flex flex-wrap">
        {listOfVideos && listOfVideos.length > 0
          ? listOfVideos.map((videos) => <VideoThumbnail videos={videos} />)
          : null}
      </div>
    </div>
  );
};

export default Body;
