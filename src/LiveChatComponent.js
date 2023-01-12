import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { makeid } from "./config";
import { addLiveChats } from "./LiveChatSlice";

const LiveChatComponent = ({}) => {
  const [loggedInUserMessage, setLoggedInUserMesssage] = useState("");
  const chatInfo = useSelector((store) => store.liveChat);
  const dispatch = useDispatch();
  useEffect(() => {
    //polling
    const interval = setInterval(() => {
      const chatting = makeid(6) + ":" + makeid(20);
      dispatch(addLiveChats(chatting));
      console.log(chatting, "chatting");
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOnchange = (event) => {
    setLoggedInUserMesssage(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addLiveChats("Nitish :" + loggedInUserMessage));
  };
  console.log(chatInfo, "chatInfo");
  return (
    <>
      <div className="flex">
        <div className="w-[400px] h-[400px] ml-4 mt-10 shadow-lg  flex flex-col-reverse">
          {chatInfo &&
            chatInfo.length > 0 &&
            chatInfo.map((individualMessages) => (
              <div className="shadow-lg p-2">{individualMessages}</div>
            ))}
        </div>
        <div className="mt-10 ml-4 w-[30px] border-black">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Please type your text"
              value={loggedInUserMessage}
              onChange={handleOnchange}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LiveChatComponent;
