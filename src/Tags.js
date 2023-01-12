import { TagNames } from "./config";
const Tags = ({}) => (
  <>
    {TagNames &&
      TagNames.map((tagName) => (
        <button key={tagName} className="w-24 p-4 m-5 bg-slate-500 h-10">
          {tagName}
        </button>
      ))}
  </>
);

export default Tags;
