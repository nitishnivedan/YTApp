import { comments } from "../config";

const CommentComponents = ({}) => {
  console.log(comments, "comments");
  const renderComponents = (commentInfo) => {
    console.log(commentInfo, "commentInfo");
    return (
      <div className="border-8 w-96 m-5">
        <div>Name : {commentInfo.name}</div>
        <div>Comments : {commentInfo.comments}</div>
        {commentInfo &&
          commentInfo.replies &&
          commentInfo.replies.length > 0 && (
            <div className="ml-6">
              {commentInfo.replies.map((item) => renderComponents(item))}
            </div>
          )}
      </div>
    );
  };
  return (
    <div>
      {comments &&
        comments.map((commentInformation) => (
          <>{renderComponents(commentInformation)}</>
        ))}
    </div>
  );
};

export default CommentComponents;
