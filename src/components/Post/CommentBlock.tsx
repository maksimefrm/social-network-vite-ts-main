interface CommentBlockProps {
    text: string
}

const CommentBlock = ({text}: CommentBlockProps) => {
  return (
    <div className="CommentBlock">
      <div className="comment__description">
        <p className="comment__text">{text}</p>
      </div>
    </div>
  );
};

export default CommentBlock;
