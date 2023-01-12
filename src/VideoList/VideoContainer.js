import Videos from "./Videos";
import Comment from "./Comments";
import LiveChatComponent from "../LiveChatComponent";

const Video = ({}) => (
  <div>
    <div className="flex w-[1000px]">
      <Videos />
      <LiveChatComponent />
    </div>
    <Comment />
  </div>
);

export default Video;
