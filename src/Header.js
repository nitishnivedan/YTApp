import { useDispatch } from "react-redux";
import { handelPanelOpen } from "./panelSlice";

const Header = ({}) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(handelPanelOpen());
    console.log("hamburger is getting called");
  };
  return (
    <div className="grid grid-flow-col shadow-lg grid-cols-12">
      <div className="col-span-1" onClick={handleOnClick}>
        <img
          className="h-20"
          alt=""
          src="https://w7.pngwing.com/pngs/489/146/png-transparent-hamburger-button-menu-computer-icons-united-states-menue-angle-police-officer-text.png"
        />
      </div>
      <div className="col-span-1">
        <img
          className="h-28"
          alt=""
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
        />
      </div>
      <div className="col-span-8">
        <input
          type="text"
          placeholder="search"
          className="w-full m-5 rounded-md border-8"
        />
      </div>
      <div className="col-span-2">
        <img
          className="h-28 p-5 ml-4"
          alt=""
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
