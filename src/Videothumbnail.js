import { Link } from "react-router-dom";
const VideoThumbnail = ({
  videos: {
    snippet: {
      thumbnails: {
        medium: { url },
      },
      title,
    },
    id,
  },
}) => {
  return (
    <Link to={`watch?v=${id}`}>
      <div className="flex flex-col shadow-lg p-10 m-10 w-96">
        <div>
          <img src={url} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default VideoThumbnail;
