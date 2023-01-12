import { useSelector } from "react-redux";

const Panel = ({}) => {
  const selector = useSelector((store) => store.panel.items);
  return (
    <>
      {selector ? (
        <div className="shadow-lg col-span-2 p-10">
          <ui>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>Libray</li>
          </ui>
        </div>
      ) : null}
    </>
  );
};

export default Panel;
